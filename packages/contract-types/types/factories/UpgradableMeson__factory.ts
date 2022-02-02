/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradableMeson,
  UpgradableMesonInterface,
} from "../UpgradableMeson";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "addressOfIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "bondSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "depositAndRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "recipientHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "depositToPool",
        type: "bool",
      },
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getLockedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "until",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getShortCoinType",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "indexOfToken",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "supportedTokens",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint208",
        name: "packedData",
        type: "uint208",
      },
    ],
    name: "postSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "requestSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "swapInitiator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "swapProvider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "tokenForIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c6132e761004b60003960008181610a9401528181610b2a01528181610c320152610cc801526132e76000f3fe60806040526004361061018b5760003560e01c80639033ed08116100d6578063d3705a921161007f578063f7888aec11610059578063f7888aec14610594578063ff378719146105d5578063ffa96ec41461060e57600080fd5b8063d3705a9214610492578063e76afb54146104b2578063eba7fb771461055a57600080fd5b8063b002249d116100b0578063b002249d1461041a578063b3df5b361461043c578063be18e8a41461047257600080fd5b80639033ed08146103ba5780639432984f146103da578063a224cee7146103fa57600080fd5b806338b0b63f1161013857806360b9d9731161011257806360b9d973146103305780636198e3391461037a5780637c8501871461039a57600080fd5b806338b0b63f146102ac5780634f1ef286146102fd57806354d6a2b71461031057600080fd5b80632335093c116101695780632335093c1461022157806335eff30f1461026c5780633659cfe61461028c57600080fd5b80630b9b44af146101905780631aba3a55146101b25780632217d48314610201575b600080fd5b34801561019c57600080fd5b506101b06101ab366004612f35565b61062e565b005b3480156101be57600080fd5b506101e66101cd366004612c11565b60686020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b34801561020d57600080fd5b506101b061021c366004612e60565b6107ac565b34801561022d57600080fd5b5061025a61023c366004612c11565b6001600160a01b031660009081526067602052604090205460ff1690565b60405160ff90911681526020016101f8565b34801561027857600080fd5b506101b0610287366004612f85565b61092a565b34801561029857600080fd5b506101b06102a7366004612c11565b610a89565b3480156102b857600080fd5b506102e56102c7366004612e60565b6000908152606b602052604090205460281c6001600160a01b031690565b6040516001600160a01b0390911681526020016101f8565b6101b061030b366004612c5f565b610c27565b34801561031c57600080fd5b506101b061032b366004612e60565b610db6565b34801561033c57600080fd5b506102e561034b366004612e60565b6000908152606b602090815260408083205464ffffffffff16835260699091529020546001600160a01b031690565b34801561038657600080fd5b506101b0610395366004612e60565b610f2e565b3480156103a657600080fd5b506101b06103b5366004612e79565b61111f565b3480156103c657600080fd5b506101b06103d5366004612df4565b6112a6565b3480156103e657600080fd5b506101b06103f5366004612e36565b6113cc565b34801561040657600080fd5b506101b0610415366004612d23565b61151a565b34801561042657600080fd5b5061042f61163e565b6040516101f89190612ffa565b34801561044857600080fd5b506102e5610457366004612fa8565b6069602052600090815260409020546001600160a01b031681565b34801561047e57600080fd5b506101b061048d366004612f35565b611764565b34801561049e57600080fd5b506101b06104ad366004612df4565b611a29565b3480156104be57600080fd5b5061052d6104cd366004612e60565b6000908152606c602090815260408083205464ffffffffff60a082901c8116855260699093529220547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316936001600160a01b039091169260c81c90911690565b604080516001600160a01b03948516815293909216602084015264ffffffffff16908201526060016101f8565b34801561056657600080fd5b506040517e3c00000000000000000000000000000000000000000000000000000000000081526020016101f8565b3480156105a057600080fd5b506105b46105af366004612c2c565b611cee565b6040516fffffffffffffffffffffffffffffffff90911681526020016101f8565b3480156105e157600080fd5b506102e56105f0366004612fc3565b60ff166000908152606660205260409020546001600160a01b031690565b34801561061a57600080fd5b506101b0610629366004612ed5565b611d52565b6000858152606c60205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16806106af5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084901b1660208201526107069087906034016040516020818303038152906040528051906020012087878786611ee4565b60ff601887901c166000908152606660205260409020546001600160a01b0316610735818460808a901c612028565b6000878152606c60205260409081902080547fffff000000000000000000000000000000000000000000000000000000000000169055517ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad29061079b9089815260200190565b60405180910390a150505050505050565b80600881901c61ffff16603c146108055760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016106a6565b6000828152606b602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff161561087c5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016106a6565b6000336000848152606b6020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffff0000000000602885901b16179055909150806108e18561219a565b915091506108f081848461230e565b6040518581527fffb55ec353614a34485412bc8d469fe16d3c7f0a963be6dd266938f8ff7d6c3f9060200160405180910390a15050505050565b6000828152606b602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16806109a15760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016106a6565b64ffffffffff8116156109f65760405162461bcd60e51b815260206004820152601f60248201527f5377617020626f6e64656420746f20616e6f746865722070726f76696465720060448201526064016106a6565b6000838152606b602090815260409182902080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff86161717905590518481527f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc9910160405180910390a1505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610b285760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016106a6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610b837f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610bff5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016106a6565b610c08816123af565b60408051600080825260208201909252610c2491839190612417565b50565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610cc65760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016106a6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610d217f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610d9d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016106a6565b610da6826123af565b610db282826001612417565b5050565b6000818152606b602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1680610e2d5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016106a6565b4264ffffffffff16603083901c64ffffffffff1610610e8e5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b656400000000000000000000000060448201526064016106a6565b60ff8216600090815260666020908152604080832054858452606b90925290912080547fffffffffffffff000000000000000000000000000000000000000000000000001690556001600160a01b03602883901c81169116610ef58183608087901c612028565b6040518481527ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f9060200160405180910390a150505050565b6000818152606c60205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1680610faa5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016106a6565b807dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660c842901b7dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff161161103d5760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b000000000000000000000000000060448201526064016106a6565b65ff0000000000601083901b1664ffffffffff60a083901c16176000818152606a6020526040902054608084901c91601885901c9161108e906fffffffffffffffffffffffffffffffff168461262e565b65ffffffffffff919091166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff90951694909417909355958152606c90955290932080547fffff000000000000000000000000000000000000000000000000000000000000169055505050565b6000868152606b6020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000811690915578ffffffffffffffffffffffffffffffffffffffffffffffffff16811561122c576015818152601080519089905260005191519091906111998a8a8a8a8a88611ee4565b65ffffffffffff81166000908152606a60205260409020546111cd906fffffffffffffffffffffffffffffffff168361262e565b65ffffffffffff919091166000908152606a6020526040902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9092169190911790555061129d9050565b611259878787878760288778ffffffffffffffffffffffffffffffffffffffffffffffffff16901c611ee4565b60ff871660009081526066602090815260408083205464ffffffffff8516845260699092529091205461129d916001600160a01b03908116911660808a901c612028565b50505050505050565b6000826fffffffffffffffffffffffffffffffff16116113085760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016106a6565b65ffffffffffff81166000908152606a602052604090205461133c906fffffffffffffffffffffffffffffffff168361262e565b65ffffffffffff82166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9590951694909417909355602884901c60ff168252606690522054610db2906001600160a01b031633846fffffffffffffffffffffffffffffffff1661230e565b3360008181526068602052604090205464ffffffffff16806114565760405162461bcd60e51b815260206004820152602e60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e64526567697374657200000000000000000000000000000000000060648201526084016106a6565b65ff0000000000602884901b1664ffffffffff8216176000818152606a6020526040902054611497906fffffffffffffffffffffffffffffffff16866126b0565b65ffffffffffff82166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff95861617905560ff881683526066909152902054611513916001600160a01b039091169085908816612028565b5050505050565b606d5460ff16156115935760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a656400000000000000000000000000000000000060648201526084016106a6565b606d80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556115c53390565b606d60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060005b81518160ff161015610db25761162c828260ff168151811061161257611612613247565b60200260200101518260016116279190613153565b612732565b80611636816131f8565b9150506115ee565b606060015b6101008160ff1610156116e95760ff81166000908152606660205260409020546001600160a01b03166116d7578060ff1660011415611680575090565b61168b6001826131a9565b60ff1667ffffffffffffffff8111156116a6576116a6613276565b6040519080825280602002602001820160405280156116cf578160200160208202803683370190505b5091506116e9565b806116e1816131f8565b915050611643565b60015b8160ff168160ff16101561175f5760ff81166000908152606660205260409020546001600160a01b0316836117226001846131a9565b60ff168151811061173557611735613247565b6001600160a01b039092166020928302919091019091015280611757816131f8565b9150506116ec565b505090565b84602081901c61ffff16603c146117bd5760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016106a6565b6000868152606c60205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16156118395760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016106a6565b6118468686868686612817565b3360009081526068602052604090205464ffffffffff16806118d05760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e000000000000000000000000000000000060648201526084016106a6565b600080806118e06104b04261311b565b6020878152600c86815260188d901c600790815260008051925191859052835165ffffffffffff83168252606a909452604090205460309290921c965094509192509061193f906fffffffffffffffffffffffffffffffff16856126b0565b65ffffffffffff84166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff95909516949094179093558d8252606c81529082902080547fffff000000000000000000000000000000000000000000000000000000000000167dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851617905590518c81527fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb4910160405180910390a15050505050505050505050565b6000826fffffffffffffffffffffffffffffffff1611611a8b5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016106a6565b338164ffffffffff8116611ae15760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742075736520302061732070726f766964657220696e646578000060448201526064016106a6565b64ffffffffff81166000908152606960205260409020546001600160a01b031615611b4e5760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c72656164792072656769737465726564000000000000000060448201526064016106a6565b6001600160a01b03821660009081526068602052604090205464ffffffffff1615611bbb5760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c7265616479207265676973746572656400000000000060448201526064016106a6565b64ffffffffff8116600081815260696020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03881690811790915583526068825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff86168252606a90522054611c68906fffffffffffffffffffffffffffffffff168561262e565b65ffffffffffff84166000908152606a6020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff958616179055602887901c60ff1683526066909152902054611ce8916001600160a01b03909116908490871661230e565b50505050565b6001600160a01b038281166000908152606760209081526040808320549385168352606882528083205464ffffffffff1660289490941b65ff000000000016939093178252606a905220546fffffffffffffffffffffffffffffffff165b92915050565b83600881901c61ffff16603c14611dab5760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016106a6565b6000858152606b602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615611e225760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016106a6565b6020829052600751601b5183611e3b8888888686612817565b6000888152606b6020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff841617905580611e968a61219a565b91509150611ea581858461230e565b6040518a81527f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d9060200160405180910390a150505050505050505050565b6001600160a01b038116611f3a5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016106a6565b60008681526020868152604080832082527f5ef297f2881340f11ed62c7c08e0e0c235c333ad8f340d7285f529f16716968a8352808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa158015611fbe573d6000803e3d6000fd5b505050602060405103516001600160a01b0316826001600160a01b03161461129d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016106a6565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052915160009283928716916120e29190612fde565b6000604051808303816000865af19150503d806000811461211f576040519150601f19603f3d011682016040523d82523d6000602084013e612124565b606091505b509150915081801561214e57508051158061214e57508080602001905181019061214e9190612dd7565b6115135760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c6564000000000000000000000000000000000060448201526064016106a6565b608081901c6000816122145760405162461bcd60e51b815260206004820152602560248201527f5377617020616d6f756e74206d7573742062652067726561746572207468616e60448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106a6565b5060ff82166000908152606660205260409020546001600160a01b0316603083901c42612243610e1082613133565b64ffffffffff168264ffffffffff161161229f5760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c790000000000000000000000000060448201526064016106a6565b6122ab611c2082613133565b64ffffffffff168264ffffffffff16106123075760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c617465000000000000000000000000000060448201526064016106a6565b5050915091565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b15801561237757600080fd5b505af115801561238b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce89190612dd7565b606d5461010090046001600160a01b0316336001600160a01b031614610c245760405162461bcd60e51b815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064016106a6565b600061244a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905061245584612960565b6000835111806124625750815b15612473576124718484612a2d565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff166115135780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011781556040516001600160a01b038316602482015261255c908690604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3659cfe600000000000000000000000000000000000000000000000000000000179052612a2d565b5080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001681557f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b038381169116146126255760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201527f757274686572207570677261646573000000000000000000000000000000000060648201526084016106a6565b61151385612b2f565b60006fffffffffffffffffffffffffffffffff831661264d83856130e7565b9150816fffffffffffffffffffffffffffffffff161015611d4c5760405162461bcd60e51b815260206004820152600860248201527f6f766572666c6f7700000000000000000000000000000000000000000000000060448201526064016106a6565b60006fffffffffffffffffffffffffffffffff83166126cf8385613178565b9150816fffffffffffffffffffffffffffffffff161115611d4c5760405162461bcd60e51b815260206004820152600960248201527f756e646572666c6f77000000000000000000000000000000000000000000000060448201526064016106a6565b60ff81166127825760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e646578000000000060448201526064016106a6565b6001600160a01b03909116600081815260656020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090811660011790915560678352818420805460ff979097169690911686179055938252606690529190912080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b6001600160a01b03811661286d5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016106a6565b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc82526040808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa1580156128ee573d6000803e3d6000fd5b505050602060405103516001600160a01b0316826001600160a01b0316146129585760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016106a6565b505050505050565b803b6129d45760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016106a6565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6060823b612aa35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016106a6565b600080846001600160a01b031684604051612abe9190612fde565b600060405180830381855af49150503d8060008114612af9576040519150601f19603f3d011682016040523d82523d6000602084013e612afe565b606091505b5091509150612b2682826040518060600160405280602781526020016132b460279139612b6f565b95945050505050565b612b3881612960565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60608315612b7e575081612ba8565b825115612b8e5782518084602001fd5b8160405162461bcd60e51b81526004016106a69190613047565b9392505050565b80356001600160a01b0381168114612bc657600080fd5b919050565b80356fffffffffffffffffffffffffffffffff81168114612bc657600080fd5b803564ffffffffff81168114612bc657600080fd5b803560ff81168114612bc657600080fd5b600060208284031215612c2357600080fd5b612ba882612baf565b60008060408385031215612c3f57600080fd5b612c4883612baf565b9150612c5660208401612baf565b90509250929050565b60008060408385031215612c7257600080fd5b612c7b83612baf565b915060208084013567ffffffffffffffff80821115612c9957600080fd5b818601915086601f830112612cad57600080fd5b813581811115612cbf57612cbf613276565b612cef847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613098565b91508082528784828501011115612d0557600080fd5b80848401858401376000848284010152508093505050509250929050565b60006020808385031215612d3657600080fd5b823567ffffffffffffffff80821115612d4e57600080fd5b818501915085601f830112612d6257600080fd5b813581811115612d7457612d74613276565b8060051b9150612d85848301613098565b8181528481019084860184860187018a1015612da057600080fd5b600095505b83861015612dca57612db681612baf565b835260019590950194918601918601612da5565b5098975050505050505050565b600060208284031215612de957600080fd5b8151612ba8816132a5565b60008060408385031215612e0757600080fd5b612e1083612bcb565b9150602083013565ffffffffffff81168114612e2b57600080fd5b809150509250929050565b60008060408385031215612e4957600080fd5b612e5283612bcb565b9150612c5660208401612c00565b600060208284031215612e7257600080fd5b5035919050565b60008060008060008060c08789031215612e9257600080fd5b86359550602087013594506040870135935060608701359250612eb760808801612c00565b915060a0870135612ec7816132a5565b809150509295509295509295565b60008060008060808587031215612eeb57600080fd5b843593506020850135925060408501359150606085013579ffffffffffffffffffffffffffffffffffffffffffffffffffff81168114612f2a57600080fd5b939692955090935050565b600080600080600060a08688031215612f4d57600080fd5b853594506020860135935060408601359250612f6b60608701612c00565b9150612f7960808701612baf565b90509295509295909350565b60008060408385031215612f9857600080fd5b82359150612c5660208401612beb565b600060208284031215612fba57600080fd5b612ba882612beb565b600060208284031215612fd557600080fd5b612ba882612c00565b60008251612ff08184602087016131cc565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561303b5783516001600160a01b031683529284019291840191600101613016565b50909695505050505050565b60208152600082518060208401526130668160408501602087016131cc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156130df576130df613276565b604052919050565b60006fffffffffffffffffffffffffffffffff80831681851680830382111561311257613112613218565b01949350505050565b6000821982111561312e5761312e613218565b500190565b600064ffffffffff80831681851680830382111561311257613112613218565b600060ff821660ff84168060ff0382111561317057613170613218565b019392505050565b60006fffffffffffffffffffffffffffffffff838116908316818110156131a1576131a1613218565b039392505050565b600060ff821660ff8416808210156131c3576131c3613218565b90039392505050565b60005b838110156131e75781810151838201526020016131cf565b83811115611ce85750506000910152565b600060ff821660ff81141561320f5761320f613218565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114610c2457600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000806000a";

type UpgradableMesonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradableMesonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradableMeson__factory extends ContractFactory {
  constructor(...args: UpgradableMesonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradableMeson> {
    return super.deploy(overrides || {}) as Promise<UpgradableMeson>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradableMeson {
    return super.attach(address) as UpgradableMeson;
  }
  connect(signer: Signer): UpgradableMeson__factory {
    return super.connect(signer) as UpgradableMeson__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradableMesonInterface {
    return new utils.Interface(_abi) as UpgradableMesonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradableMeson {
    return new Contract(address, _abi, signerOrProvider) as UpgradableMeson;
  }
}
