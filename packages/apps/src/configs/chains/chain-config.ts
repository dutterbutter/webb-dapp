import EdgewareLogo from '@webb-dapp/apps/configs/logos/EdgewareLogo';
import EtherLogo from '@webb-dapp/apps/configs/logos/Eth';
import { HarmonyLogo } from '@webb-dapp/apps/configs/logos/HarmonyLogo';
import { AppConfig } from '@webb-dapp/react-environment/webb-context';

import { WebbCurrencyId } from '../currencies/webb-currency-id.enum';
import { ChainId, WebbEVMChain } from './chain-id.enum';

export const chainsConfig: AppConfig['chains'] = {
  // edgeware
  [ChainId.EdgewareLocalNet]: {
    id: ChainId.EdgewareLocalNet,
    group: 'edgeware',
    tag: 'dev',
    evmId: undefined,
    logo: EdgewareLogo,
    url: 'ws://127.0.0.1:9944',
    name: 'Edgeware Development',
    currencies: [
      {
        currencyId: WebbCurrencyId.EDG,
        enabled: true,
      },
    ],
    nativeCurrencyId: WebbCurrencyId.EDG,
  },
  [ChainId.EdgewareTestNet]: {
    group: 'edgeware',
    tag: 'test',
    id: ChainId.EdgewareTestNet,
    evmId: WebbEVMChain.Beresheet,
    name: 'Beresheet (Edgeware Testnet)',
    url: 'wss://beresheet1.edgewa.re',
    evmRpcUrls: ['https://beresheet.edgewa.re/evm'],
    logo: EdgewareLogo,
    currencies: [
      {
        currencyId: WebbCurrencyId.TEDG,
        enabled: true,
      },
    ],
    nativeCurrencyId: WebbCurrencyId.TEDG,
  },
  [ChainId.Edgeware]: {
    group: 'edgeware',
    tag: 'live',
    id: ChainId.Edgeware,
    evmId: WebbEVMChain.Edgeware,
    name: 'Edgeware',
    evmRpcUrls: ['https://mainnet.edgewa.re/evm'],
    url: 'wss://mainnet1.edgewa.re',
    logo: EdgewareLogo,
    currencies: [
      {
        currencyId: WebbCurrencyId.EDG,
        enabled: true,
      },
    ],
    nativeCurrencyId: WebbCurrencyId.EDG,
  },

  [ChainId.Rinkeby]: {
    group: 'eth',
    id: ChainId.Rinkeby,
    evmId: WebbEVMChain.Rinkeby,
    name: 'Rinkeby',
    url: '',
    logo: EtherLogo,
    tag: 'test',
    currencies: [
      {
        currencyId: WebbCurrencyId.ETH,
        enabled: true,
      },
    ],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
  [ChainId.HarmonyTestnet1]: {
    group: 'one',
    id: ChainId.HarmonyTestnet1,
    evmId: WebbEVMChain.HarmonyTestnet1,
    name: 'Harmony Testnet Shard 1',
    tag: 'test',
    url: 'https://api.s1.b.hmny.io',
    evmRpcUrls: ['https://api.s1.b.hmny.io'],
    logo: HarmonyLogo,
    currencies: [
      {
        currencyId: WebbCurrencyId.ONE,
        enabled: true,
      },
    ],
    nativeCurrencyId: WebbCurrencyId.ONE,
  },
  [ChainId.EthereumMainNet]: {
    group: 'eth',
    id: ChainId.EthereumMainNet,
    evmId: WebbEVMChain.EthereumMainNet,
    name: 'Ethereum mainnet',
    tag: 'live',
    url: '',
    logo: EtherLogo,
    currencies: [
      {
        currencyId: WebbCurrencyId.ETH,
        enabled: true,
      },
    ],
    nativeCurrencyId: WebbCurrencyId.ETH,
  },
};