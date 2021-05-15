/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IHasherInterface extends ethers.utils.Interface {
  functions: {
    "MiMCSponge(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MiMCSponge",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "MiMCSponge", data: BytesLike): Result;

  events: {};
}

export class IHasher extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IHasherInterface;

  functions: {
    MiMCSponge(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "MiMCSponge(uint256,uint256)"(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  MiMCSponge(
    in_xL: BigNumberish,
    in_xR: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    xL: BigNumber;
    xR: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "MiMCSponge(uint256,uint256)"(
    in_xL: BigNumberish,
    in_xR: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    xL: BigNumber;
    xR: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  callStatic: {
    MiMCSponge(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "MiMCSponge(uint256,uint256)"(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    MiMCSponge(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MiMCSponge(uint256,uint256)"(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MiMCSponge(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MiMCSponge(uint256,uint256)"(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
