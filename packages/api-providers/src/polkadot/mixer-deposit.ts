// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/ban-ts-comment */

import '@webb-tools/types';

import { LoggerService } from '@webb-tools/app-util';
import { Note, NoteGenInput } from '@webb-tools/sdk-core';

import { PalletMixerMixerMetadata } from '@polkadot/types/lookup';
import { u8aToHex } from '@polkadot/util';

import { MixerDeposit } from '../abstracts';
import { WebbError, WebbErrorCodes } from '../webb-error';
import { Currency, DepositPayload as TDepositPayload, MixerSize, ORMLCurrency } from '../';
import { WebbPolkadot } from './webb-provider';

// The DepositPayload is the Note and [treeId, leafhex]
type DepositPayload = TDepositPayload<Note, [number, string]>;
const logger = LoggerService.get('tornado-deposit');

export class PolkadotMixerDeposit extends MixerDeposit<WebbPolkadot, DepositPayload> {
  constructor(protected inner: WebbPolkadot) {
    super(inner);
  }

  static async getSizes(webbPolkadot: WebbPolkadot): Promise<MixerSize[]> {
    const api = webbPolkadot.api;
    const ormlCurrency = new ORMLCurrency(webbPolkadot);
    const ormlAssets = await ormlCurrency.list();
    const data = await api.query.mixerBn254.mixers.entries();
    const groupItem = data
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, info]) => !info.isEmpty)
      // storageKey is treeId.  Info is {depositSize, asset}
      .map(([storageKey, info]) => {
        // TODO: Figure out why typescript complains about an `unwrap()`
        //       while running protocol-substrate locally.
        const mixerInfo: PalletMixerMixerMetadata = info.unwrap();
        const cId = Number(mixerInfo.asset);
        const amount = mixerInfo.depositSize;
        // @ts-ignore
        const treeId = storageKey.toHuman()[0];

        // parse number from amount string
        // TODO: Get and parse native / non-native token denomination
        // TODO replace `replaceAll` or target es2021
        // @ts-ignore
        const amountNumber = (Number(amount?.toString().replaceAll(',', '')) * 1.0) / Math.pow(10, 12);

        const currency = Currency.fromORMLAsset(
          webbPolkadot.config.currencies,
          ormlAssets.find((asset) => Number(asset.id) === cId)!
        );

        return {
          amount: amountNumber,
          currency: currency,
          id: treeId,
          treeId,
        };
      })
      .map(
        ({ amount, currency, treeId }) =>
          ({
            amount: amount,
            asset: currency.view.symbol,
            id: treeId,
            title: amount + ` ${currency.view.symbol}`,
            treeId,
            value: amount,
          } as MixerSize)
      )
      .sort((a, b) => (a.amount > b.amount ? 1 : a.amount < b.amount ? -1 : 0));

    return groupItem;
  }

  async getSizes() {
    return PolkadotMixerDeposit.getSizes(this.inner);
  }

  // MixerId is the treeId for deposit, chainIdType is the destination (and source because this is mixer)
  async generateNote(mixerId: number, chainIdType: number): Promise<DepositPayload> {
    logger.info(`Depositing to mixer id ${mixerId}`);
    const sizes = await this.getSizes();
    const mixer = sizes.find((size) => Number(size.id) === mixerId);
    const properties = await this.inner.api.rpc.system.properties();
    const denomination = properties.tokenDecimals.toHuman() || 12;

    if (!mixer) {
      throw Error('amount not found! for mixer id ' + mixerId);
    }

    const treeId = mixer.id;

    logger.info(`Depositing to tree id ${treeId}`);
    const noteInput: NoteGenInput = {
      amount: String(mixer.amount),
      backend: 'Arkworks',
      curve: 'Bn254',
      denomination: `${denomination}`,
      exponentiation: '5',
      hashFunction: 'Poseidon',
      protocol: 'mixer',
      sourceChain: chainIdType.toString(),
      sourceIdentifyingData: treeId.toString(),
      targetChain: chainIdType.toString(),
      targetIdentifyingData: treeId.toString(),
      tokenSymbol: mixer.asset,
      version: 'v2',
      width: '3',
    };

    logger.info('noteInput in generateNote: ', noteInput);
    const depositNote = await Note.generateNote(noteInput);

    logger.info('generated Note from input: ', depositNote.note);
    const leaf = depositNote.getLeaf();

    return {
      note: depositNote,
      params: [Number(treeId), u8aToHex(leaf)],
    };
  }

  async deposit(depositPayload: DepositPayload): Promise<void> {
    const tx = this.inner.txBuilder.build(
      {
        method: 'deposit',
        section: 'mixerBn254',
      },
      depositPayload.params
    );

    const account = await this.inner.accounts.activeOrDefault;

    if (!account) {
      throw WebbError.from(WebbErrorCodes.NoAccountAvailable);
    }

    tx.on('finalize', () => {
      console.log('deposit done');
    });
    tx.on('failed', (e: any) => {
      console.log('deposit failed', e);
    });
    tx.on('extrinsicSuccess', () => {
      console.log('deposit done');
    });
    await tx.call(account.address);
  }
}