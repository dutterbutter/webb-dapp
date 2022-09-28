import { AppConfig, CurrencyId, EVMChainId } from '@webb-dapp/api-providers';
import ArbitrumLogo from '@webb-dapp/apps/configs/logos/chains/ArbitrumLogo';
import GanacheLogo from '@webb-dapp/apps/configs/logos/chains/GanacheLogo';
import { MoonbeamLogo } from '@webb-dapp/apps/configs/logos/chains/MoonbeamLogo';
import OptimismLogo from '@webb-dapp/apps/configs/logos/chains/OptimismLogo';
import PolygonLogo from '@webb-dapp/apps/configs/logos/chains/PolygonLogo';
import EtherLogo from '@webb-dapp/apps/configs/logos/Eth';
import { calculateTypedChainId, ChainType } from '@webb-tools/sdk-core';
import React from 'react';

export const getSupportedCurrenciesOfChain = (typedChainId: number): CurrencyId[] => {
  return chainsConfig[typedChainId].currencies;
};

export const chainsConfig: AppConfig['chains'] = {
  [calculateTypedChainId(ChainType.EVM, EVMChainId.Rinkeby)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.Rinkeby,
    name: 'Rinkeby',
    url: 'https://rinkeby.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://rinkeby.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://rinkeby.etherscan.io',
    logo: () => EtherLogo,
    tag: 'test',
    currencies: [CurrencyId.ETH, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.Ropsten)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.Ropsten,
    name: 'Ropsten',
    url: 'https://ropsten.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://ropsten.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://ropsten.etherscan.io',
    logo: () => EtherLogo,
    tag: 'test',
    currencies: [CurrencyId.ETH, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.Goerli)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.Goerli,
    name: 'Goerli',
    url: 'https://goerli.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://goerli.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://goerli.etherscan.io',
    logo: () => EtherLogo,
    tag: 'test',
    currencies: [CurrencyId.ETH, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.Kovan)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.Kovan,
    name: 'Kovan',
    url: 'https://kovan.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4',
    evmRpcUrls: ['https://kovan.infura.io/v3/e54b7176271840f9ba62e842ff5d6db4'],
    blockExplorerStub: 'https://kovan.etherscan.io',
    logo: () => EtherLogo,
    tag: 'test',
    currencies: [CurrencyId.ETH, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.OptimismTestnet)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.OptimismTestnet,
    name: 'Optimism',
    url: 'https://goerli.optimism.io',
    evmRpcUrls: ['https://goerli.optimism.io'],
    blockExplorerStub: 'https://blockscout.com/optimism/goerli',
    logo: OptimismLogo,
    tag: 'test',
    currencies: [CurrencyId.ETH, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.ArbitrumTestnet)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.ArbitrumTestnet,
    name: 'Arbitrum',
    url: 'https://goerli-rollup.arbitrum.io/rpc',
    evmRpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
    blockExplorerStub: 'https://goerli-rollup-explorer.arbitrum.io/',
    logo: ArbitrumLogo,
    tag: 'test',
    currencies: [CurrencyId.ETH, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.PolygonTestnet)]: {
    chainType: ChainType.EVM,
    group: 'matic',
    chainId: EVMChainId.PolygonTestnet,
    name: 'Mumbai',
    tag: 'test',
    url: 'https://rpc-mumbai.maticvigil.com/',
    evmRpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    blockExplorerStub: 'https://mumbai.polygonscan.com/',
    logo: PolygonLogo,
    currencies: [CurrencyId.MATIC, CurrencyId.WETH, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.MATIC,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.HermesLocalnet)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.HermesLocalnet,
    name: 'Hermes',
    tag: 'dev',
    url: 'http://127.0.0.1:5001',
    evmRpcUrls: ['http://127.0.0.1:5001'],
    logo: GanacheLogo,
    currencies: [CurrencyId.webbDEV, CurrencyId.DEV, CurrencyId.ETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.AthenaLocalnet)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.AthenaLocalnet,
    name: 'Athena',
    tag: 'dev',
    url: 'http://127.0.0.1:5002',
    evmRpcUrls: ['http://127.0.0.1:5002'],
    logo: GanacheLogo,
    currencies: [CurrencyId.webbDEV, CurrencyId.DEV, CurrencyId.ETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.DemeterLocalnet)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.DemeterLocalnet,
    name: 'Demeter',
    tag: 'dev',
    url: 'http://127.0.0.1:5003',
    evmRpcUrls: ['http://127.0.0.1:5003'],
    logo: GanacheLogo,
    currencies: [CurrencyId.webbDEV, CurrencyId.DEV, CurrencyId.ETH],
    nativeCurrencyId: CurrencyId.ETH,
  },
  [calculateTypedChainId(ChainType.EVM, EVMChainId.MoonbaseAlpha)]: {
    chainType: ChainType.EVM,
    group: 'eth',
    chainId: EVMChainId.MoonbaseAlpha,
    name: 'Moonbase Alpha',
    tag: 'test',
    url: 'https://moonbeam-alpha.api.onfinality.io/public',
    evmRpcUrls: ['https://moonbeam-alpha.api.onfinality.io/public'],
    logo: MoonbeamLogo,
    currencies: [CurrencyId.WETH, CurrencyId.moonDEV, CurrencyId.webbETH],
    nativeCurrencyId: CurrencyId.moonDEV,
  },
};
