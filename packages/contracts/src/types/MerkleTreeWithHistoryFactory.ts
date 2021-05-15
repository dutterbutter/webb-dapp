/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MerkleTreeWithHistory } from "./MerkleTreeWithHistory";

export class MerkleTreeWithHistoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _levels: BigNumberish,
    _hasher: string,
    overrides?: Overrides
  ): Promise<MerkleTreeWithHistory> {
    return super.deploy(_levels, _hasher, overrides || {}) as Promise<
      MerkleTreeWithHistory
    >;
  }
  getDeployTransaction(
    _levels: BigNumberish,
    _hasher: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_levels, _hasher, overrides || {});
  }
  attach(address: string): MerkleTreeWithHistory {
    return super.attach(address) as MerkleTreeWithHistory;
  }
  connect(signer: Signer): MerkleTreeWithHistoryFactory {
    return super.connect(signer) as MerkleTreeWithHistoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTreeWithHistory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MerkleTreeWithHistory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_levels",
        type: "uint32"
      },
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32"
      }
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32"
      }
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      }
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x60c0604052600280546001600160401b03191690553480156200002157600080fd5b506040516200146c3803806200146c833981810160405260408110156200004757600080fd5b50805160209091015163ffffffff8216620000945760405162461bcd60e51b8152600401808060200182810382526023815260200180620014496023913960400191505060405180910390fd5b60208263ffffffff1610620000f0576040805162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604482015290519081900360640190fd5b6001600160e01b031960e083901b1660a0526001600160601b0319606082901b1660805260005b8263ffffffff168163ffffffff1610156200015c576200013d63ffffffff8216620001a6565b63ffffffff821660009081526020819052604090205560010162000117565b506200017263ffffffff600019840116620001a6565b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb495550620008349050565b600081620001d657507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c6200082f565b81600114156200020857507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d6200082f565b81600214156200023a57507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c2006200082f565b81600314156200026c57507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb6200082f565b81600414156200029e57507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c96200082f565b8160051415620002d057507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb549596200082f565b81600614156200030257507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c6200082f565b81600714156200033457507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb46200082f565b81600814156200036657507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff806200082f565b81600914156200039757507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c0076200082f565b81600a1415620003c957507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e306200082f565b81600b1415620003fb57507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e56200082f565b81600c14156200042d57507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f6200082f565b81600d14156200045f57507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd6200082f565b81600e14156200049157507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb1086200082f565b81600f1415620004c357507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b66200082f565b8160101415620004f557507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db618546200082f565b81601114156200052757507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea6200082f565b81601214156200055957507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d6200082f565b81601314156200058b57507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc056200082f565b8160141415620005bd57507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d46200082f565b8160151415620005ef57507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b29676200082f565b81601614156200062157507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc34536200082f565b81601714156200065357507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c486200082f565b81601814156200068557507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd16200082f565b8160191415620006b757507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c6200082f565b81601a1415620006e957507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce996200082f565b81601b14156200071b57507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f3546200082f565b81601c14156200074c57507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d6200082f565b81601d14156200077e57507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f4276200082f565b81601e1415620007b057507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb6200082f565b81601f1415620007e257507f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc6200082f565b6040805162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e647300000000000000000000000000604482015290519081900360640190fd5b919050565b60805160601c60a05160e01c610beb6200085e60003980610229525080610b2c5250610beb6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063c2b40ae41161008c578063ec73295911610066578063ec732959146101c4578063ed33639f146101cc578063f178e47c146101f0578063fc7e9c6f1461020d576100cf565b8063c2b40ae414610182578063cd87a3b41461019f578063e8295588146101a7576100cf565b8063414a37ba146100d45780634ecf518b146100ee5780636d9833e31461010f5780638ea3099e1461014057806390eeb02b14610172578063ba70f7571461017a575b600080fd5b6100dc610215565b60408051918252519081900360200190f35b6100f6610227565b6040805163ffffffff9092168252519081900360200190f35b61012c6004803603602081101561012557600080fd5b503561024b565b604080519115158252519081900360200190f35b6100dc6004803603606081101561015657600080fd5b506001600160a01b0381351690602081013590604001356102bd565b6100f6610489565b6100dc610495565b6100dc6004803603602081101561019857600080fd5b50356104b0565b6100f66104c2565b6100dc600480360360208110156101bd57600080fd5b50356104c7565b6100dc610b06565b6101d4610b2a565b604080516001600160a01b039092168252519081900360200190f35b6100dc6004803603602081101561020657600080fd5b5035610b4e565b6100f6610b60565b600080516020610b9683398151915281565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008161025a575060006102b8565b60025463ffffffff16805b63ffffffff811660009081526001602052604090205484141561028d576001925050506102b8565b63ffffffff811661029c5750601e5b6000190163ffffffff8082169083161415610265576000925050505b919050565b6000600080516020610b968339815191528310610321576040805162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604482015290519081900360640190fd5b600080516020610b96833981519152821061036d5760405162461bcd60e51b8152600401808060200182810382526021815260200180610b756021913960400191505060405180910390fd5b6040805163f47d33b560e01b8152600481018590526000602482018190528251869391926001600160a01b0389169263f47d33b592604480840193829003018186803b1580156103bc57600080fd5b505afa1580156103d0573d6000803e3d6000fd5b505050506040513d60408110156103e657600080fd5b5080516020909101519092509050600080516020610b968339815191528483089150856001600160a01b031663f47d33b583836040518363ffffffff1660e01b81526004018083815260200182815260200192505050604080518083038186803b15801561045357600080fd5b505afa158015610467573d6000803e3d6000fd5b505050506040513d604081101561047d57600080fd5b50519695505050505050565b60025463ffffffff1681565b60025463ffffffff1660009081526001602052604090205490565b60016020526000908152604090205481565b601e81565b6000816104f557507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c6102b8565b816001141561052557507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d6102b8565b816002141561055557507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c2006102b8565b816003141561058557507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb6102b8565b81600414156105b557507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c96102b8565b81600514156105e557507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb549596102b8565b816006141561061557507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c6102b8565b816007141561064557507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb46102b8565b816008141561067557507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff806102b8565b81600914156106a457507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c0076102b8565b81600a14156106d457507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e306102b8565b81600b141561070457507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e56102b8565b81600c141561073457507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f6102b8565b81600d141561076457507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd6102b8565b81600e141561079457507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb1086102b8565b81600f14156107c457507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b66102b8565b81601014156107f457507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db618546102b8565b816011141561082457507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea6102b8565b816012141561085457507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d6102b8565b816013141561088457507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc056102b8565b81601414156108b457507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d46102b8565b81601514156108e457507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b29676102b8565b816016141561091457507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc34536102b8565b816017141561094457507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c486102b8565b816018141561097457507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd16102b8565b81601914156109a457507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c6102b8565b81601a14156109d457507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce996102b8565b81601b1415610a0457507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f3546102b8565b81601c1415610a3357507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d6102b8565b81601d1415610a6357507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f4276102b8565b81601e1415610a9357507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb6102b8565b81601f1415610ac357507f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc6102b8565b6040805162461bcd60e51b8152602060048201526013602482015272496e646578206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b7f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006020819052908152604090205481565b600254640100000000900463ffffffff168156fe5f72696768742073686f756c6420626520696e7369646520746865206669656c6430644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a26469706673582212200c6c2a8454eeccadd25a059aa375442cbb917e658986937b8477a6fa5739f30864736f6c634300070600335f6c6576656c732073686f756c642062652067726561746572207468616e207a65726f";
