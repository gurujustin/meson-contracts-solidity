/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Meson, MesonInterface } from "../Meson";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "supportedTokens",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
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
        indexed: true,
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
        indexed: true,
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
        indexed: true,
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
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "addAuthorizedAddr",
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
        internalType: "uint40",
        name: "poolIndex",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "poolTokenIndex",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "poolTokenIndex",
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
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "getLockedSwap",
    outputs: [
      {
        internalType: "address",
        name: "poolOwner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getPostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
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
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "ownerOfPool",
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
        name: "",
        type: "address",
      },
    ],
    name: "poolOfAuthorizedAddr",
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
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "poolTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "uint200",
        name: "postingValue",
        type: "uint200",
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
        name: "initiator",
        type: "address",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "removeAuthorizedAddr",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "serviceFeeCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
      {
        internalType: "address",
        name: "initiator",
        type: "address",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "poolTokenIndex",
        type: "uint48",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620031fd380380620031fd833981016040819052620000349162000156565b60005b81518160ff16101562000092576200007d828260ff168151811062000060576200006062000290565b60200260200101518260016200007791906200022f565b6200009a565b80620000898162000257565b91505062000037565b5050620002bc565b60ff8116620000ef5760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b80516001600160a01b03811681146200015157600080fd5b919050565b600060208083850312156200016a57600080fd5b82516001600160401b03808211156200018257600080fd5b818501915085601f8301126200019757600080fd5b815181811115620001ac57620001ac620002a6565b8060051b604051601f19603f83011681018181108582111715620001d457620001d4620002a6565b604052828152858101935084860182860187018a1015620001f457600080fd5b600095505b8386101562000222576200020d8162000139565b855260019590950194938601938601620001f9565b5098975050505050505050565b600060ff821660ff84168060ff038211156200024f576200024f6200027a565b019392505050565b600060ff821660ff8114156200027157620002716200027a565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612f3180620002cc6000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80638b0a7765116100d8578063ce9247431161008c578063f1d2ec1d11610066578063f1d2ec1d14610409578063ff22f2721461041c578063ff3787191461042f57600080fd5b8063ce924743146103b6578063d3e95ea4146103c9578063eba7fb77146103dc57600080fd5b8063b002249d116100bd578063b002249d1461037b578063be18e8a414610390578063ce7f79b9146103a357600080fd5b80638b0a77651461032f5780638f487dc91461036857600080fd5b80634d11b0f11161013a5780637fe0282b116101145780637fe0282b1461029e5780638302ce5a146102db57806389a734c0146102ee57600080fd5b80634d11b0f11461024057806354d6a2b71461025357806360a2da981461026657600080fd5b80632335093c1161016b5780632335093c146101dc57806335eff30f1461021a57806337b90a4f1461022d57600080fd5b8063051119f5146101875780631e2a60751461019c575b600080fd5b61019a610195366004612a8b565b61045b565b005b6101af6101aa366004612afd565b610659565b604080516001600160a01b0394851681529390921660208401521515908201526060015b60405180910390f35b6102086101ea366004612a8b565b6001600160a01b031660009081526001602052604090205460ff1690565b60405160ff90911681526020016101d3565b61019a610228366004612cbd565b6106d1565b61019a61023b366004612ce0565b61088e565b61019a61024e366004612be8565b610a2c565b61019a610261366004612afd565b610bfa565b610279610274366004612b16565b610d6b565b604080516001600160a01b03909316835264ffffffffff9091166020830152016101d3565b6102c56102ac366004612a8b565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020016101d3565b61019a6102e9366004612c4b565b610db9565b6103176102fc366004612d1b565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016101d3565b61035a61033d366004612d36565b60281b65ff00000000001660009081526004602052604090205490565b6040519081526020016101d3565b61019a610376366004612ce0565b6110a5565b61038361132c565b6040516101d39190612d8c565b61019a61039e366004612b39565b611452565b61019a6103b1366004612ce0565b611729565b61019a6103c4366004612b89565b6118c1565b61035a6103d7366004612aad565b611aff565b6040517e3c00000000000000000000000000000000000000000000000000000000000081526020016101d3565b61019a610417366004612b16565b611b82565b61019a61042a366004612a8b565b611ce6565b61031761043d366004612d36565b60ff166000908152602081905260409020546001600160a01b031690565b3360008181526002602052604090205464ffffffffff16806104ea5760405162461bcd60e51b815260206004820152602360248201527f546865207369676e657220646f6573206e6f742072656769737465722061207060448201527f6f6f6c000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b64ffffffffff81166000908152600360205260409020546001600160a01b038381169116146105815760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b6001600160a01b03831660009081526002602052604090205464ffffffffff8281169116146106185760405162461bcd60e51b815260206004820152602c60248201527f41646472206973206e6f7420617574686f72697a656420666f7220746865207360448201527f69676e6572277320706f6f6c000000000000000000000000000000000000000060648201526084016104e1565b50506001600160a01b0316600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000169055565b600081815260056020526040812054602881901c6001600160a01b0316919078ffffffffffffffffffffffffffffffffffffffffffffffffff166001811490836106a657600092506106c9565b64ffffffffff81166000908152600360205260409020546001600160a01b031692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161074b5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016104e1565b8064ffffffffff16156107a05760405162461bcd60e51b815260206004820152601b60248201527f5377617020626f6e64656420746f20616e6f7468657220706f6f6c000000000060448201526064016104e1565b3360009081526002602052604090205464ffffffffff8381169116146108085760405162461bcd60e51b815260206004820152601860248201527f43616e206f6e6c7920626f756e6420746f207369676e6572000000000000000060448201526064016104e1565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b600082116108de5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016104e1565b8064ffffffffff81166109335760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e64657800000000000060448201526064016104e1565b64ffffffffff81166000908152600360205260409020546001600160a01b031633146109c75760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b65ffffffffffff8216600090815260046020526040812080548592906109ee908490612dd9565b909155505060ff602883901c81166000818152602081905260409020549091610a26916001600160a01b031690339087908514611eeb565b50505050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1660018111610aa65760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016104e1565b610ab2610e1042612dd9565b603088901c64ffffffffff161015610afd57600087815260056020526040902080547fffffffffffffff00000000000000000000000000000000000000000000000000169055610b35565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b610b508784888888602887901c6001600160a01b03166120e1565b86818315610ba157610b628960d01c90565b64ffffffffff8216602884901b65ff0000000000161760009081526004602052604081208054909190610b96908490612dd9565b90915550610bef9050565b60ff82166000908152602081815260408083205464ffffffffff85168452600390925290912054610bef916001600160a01b039081169116610be38c60d01c90565b8560ff1660ff1461255d565b505050505050505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1660018111610c745760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016104e1565b42603083901c64ffffffffff1610610cce5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b656400000000000000000000000060448201526064016104e1565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff85168352908290529020548290610d3b906001600160a01b0390811690602885901c1660d084901c8460ff1660ff1461255d565b60405183907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a2505050565b6000806000610d7a858561269f565b60009081526006602090815260408083205464ffffffffff808216855260039093529220546001600160a01b03169760289290921c1695509350505050565b84603c610dc68260081c90565b61ffff1614610e175760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016104e1565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff1615610e8e5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016104e1565b6000610e9a8760d01c90565b905064174876e800811115610f175760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b00000000000000000060648201526084016104e1565b6000610f2e4264ffffffffff60308b901c16612e2c565b9050610e108111610f815760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c790000000000000000000000000060448201526064016104e1565b611c208110610fd25760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c617465000000000000000000000000000060448201526064016104e1565b6001600160a01b03602885901c16610fed8989898985612700565b600089815260056020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff88161790558960ff80821660008181526020819052604090205492935061106e926001600160a01b0316918591889114611eeb565b6040518a907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a250505050505050505050565b600082116110f55760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016104e1565b338164ffffffffff811661114b5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e64657800000000000060448201526064016104e1565b64ffffffffff81166000908152600360205260409020546001600160a01b0316156111b85760405162461bcd60e51b815260206004820152601d60248201527f506f6f6c20696e64657820616c7265616479207265676973746572656400000060448201526064016104e1565b6001600160a01b03821660009081526002602052604090205464ffffffffff161561124b5760405162461bcd60e51b815260206004820152602160248201527f5369676e6572206164647265737320616c72656164792072656769737465726560448201527f640000000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905290812080548692906112ed908490612dd9565b909155505060ff602884901c81166000818152602081905260409020549091611325916001600160a01b031690859088908514611eeb565b5050505050565b606060015b6101008160ff1610156113d75760ff81166000908152602081905260409020546001600160a01b03166113c5578060ff166001141561136e575090565b611379600182612e43565b60ff1667ffffffffffffffff81111561139457611394612ee4565b6040519080825280602002602001820160405280156113bd578160200160208202803683370190505b5091506113d7565b806113cf81612e66565b915050611331565b60015b8160ff168160ff16101561144d5760ff81166000908152602081905260409020546001600160a01b031683611410600184612e43565b60ff168151811061142357611423612eb5565b6001600160a01b03909216602092830291909101909101528061144581612e66565b9150506113da565b505090565b84603c61145f8260201c90565b61ffff16146114b05760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e00000000000000000060448201526064016104e1565b60006114bc878461269f565b60008181526006602052604090205490915069ffffffffffffffffffff16156115275760405162461bcd60e51b815260206004820152601360248201527f5377617020616c7265616479206578697374730000000000000000000000000060448201526064016104e1565b6115348787878787612700565b3360009081526002602052604090205464ffffffffff16806115be5760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e000000000000000000000000000000000060648201526084016104e1565b60006115cc61096042612dd9565b9050603089901c64ffffffffff16811061164e5760405162461bcd60e51b815260206004820152602560248201527f43616e6e6f74206c6f636b20626563617573652065787069726554732069732060448201527f736f6f6e2e00000000000000000000000000000000000000000000000000000060648201526084016104e1565b64ffffffffff82811660108b901b65ff000000000016179060588b901c1660d08b901c61167b9190612e2c565b65ffffffffffff8216600090815260046020526040812080549091906116a2908490612e2c565b909155505060008481526006602052604080822080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001664ffffffffff8716602887901b69ffffffffff00000000001617179055518b917fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb491a250505050505050505050565b600082116117795760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f73697469766500000000000000000060448201526064016104e1565b8064ffffffffff81166117ce5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420757365203020617320706f6f6c20696e64657800000000000060448201526064016104e1565b64ffffffffff81166000908152600360205260409020546001600160a01b031633146118625760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b65ffffffffffff821660009081526004602052604081208054859290611889908490612e2c565b909155505060ff602883901c81166000818152602081905260409020549091610a26916001600160a01b03169033908790851461255d565b7940000000000000000000000000000000000000000000000000008616151560006118ec888561269f565b60008181526006602052604090205490915069ffffffffffffffffffff16806119575760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016104e1565b4260308a901c64ffffffffff16116119b15760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742072656c6561736520626563617573652065787069726564000060448201526064016104e1565b6119bf89858a8a8a8a6120e1565b600082815260066020526040812080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690556119fd8a60181c90565b9050600060588b901c64ffffffffff16611a178c60d01c90565b611a219190612e2c565b905084611a99576000611a338c612a30565b9050611a3f8183612e2c565b91508060046000611a658f600064ffffffffff1660109190911b65ff0000000000161790565b65ffffffffffff1665ffffffffffff1681526020019081526020016000206000828254611a929190612dd9565b9091555050505b60ff808316600081815260208190526040902054611ac7926001600160a01b0390911691899185911461255d565b6040518b907ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad290600090a25050505050505050505050565b6001600160a01b0380831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580611b44575060ff8216155b15611b5457600092505050611b7c565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b6000611b8e838361269f565b60008181526006602052604090205490915069ffffffffffffffffffff1680611bf95760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016104e1565b42602882901c64ffffffffff1610611c535760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b000000000000000000000000000060448201526064016104e1565b64ffffffffff818116601086901b65ff0000000000161790605886901c1660d086901c611c809190612e2c565b65ffffffffffff821660009081526004602052604081208054909190611ca7908490612dd9565b90915550505060009182525060066020526040902080547fffffffffffffffffffffffffffffffffffffffffffff000000000000000000001690555050565b6001600160a01b03811660009081526002602052604090205464ffffffffff1615611d795760405162461bcd60e51b815260206004820152602360248201527f4164647220697320617574686f72697a656420666f7220616e6f74686572207060448201527f6f6f6c000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b3360008181526002602052604090205464ffffffffff1680611e035760405162461bcd60e51b815260206004820152602360248201527f546865207369676e657220646f6573206e6f742072656769737465722061207060448201527f6f6f6c000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b64ffffffffff81166000908152600360205260409020546001600160a01b03838116911614611e9a5760405162461bcd60e51b815260206004820152602160248201527f4e6565642074686520706f6f6c206f776e657220617320746865207369676e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104e1565b6001600160a01b0392909216600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001664ffffffffff9093169290921790915550565b6001600160a01b038416611f415760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f727465640000000000000000000000000060448201526064016104e1565b60008211611f915760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016104e1565b604080516001600160a01b038581166024830152306044830152606480830186905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905291516000928392908816916120219190612d51565b6000604051808303816000865af19150503d806000811461205e576040519150601f19603f3d011682016040523d82523d6000602084013e612063565b606091505b509150915081801561208d57508051158061208d57508080602001905181019061208d9190612ae0565b6120d95760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c65640000000000000000000000000060448201526064016104e1565b505050505050565b6001600160a01b0381166121375760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016104e1565b79080000000000000000000000000000000000000000000000000086161515600887901c61ffff1660c3141561230f57600081612194577f1954524f4e205369676e6564204d6573736167653a0a33320a000000000000006121b6565b7f1954524f4e205369676e6564204d6573736167653a0a35330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018990527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089901b166059820152606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa15801561229e573d6000803e3d6000fd5b505050602060405103516001600160a01b0316836001600160a01b0316146123085760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104e1565b50506120d9565b60008115612401576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000009061237a908a908a9060200191825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090931690820152603c810191909152605c01604051602081830303815290604052805190602001209050612496565b61240b8860201c90565b61ffff1660c3141561245c578660155260416020538760005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e5560005260406000209050612496565b5060148690526000878152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff861691810191909152606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156124e9573d6000803e3d6000fd5b505050602060405103516001600160a01b0316836001600160a01b0316146125535760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104e1565b5050505050505050565b604080516001600160a01b038581166024830152604480830186905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908816916125e79190612d51565b6000604051808303816000865af19150503d8060008114612624576040519150601f19603f3d011682016040523d82523d6000602084013e612629565b606091505b50915091508180156126535750805115806126535750808060200190518101906126539190612ae0565b6120d95760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c6564000000000000000000000000000000000060448201526064016104e1565b600082826040516020016126e292919091825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b60405160208183030381529060405280519060200120905092915050565b6001600160a01b0381166127565760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016104e1565b79080000000000000000000000000000000000000000000000000085161515600886901c61ffff1660c31415612903576000816127b3577f1954524f4e205369676e6564204d6573736167653a0a33320a000000000000006127d5565b7f1954524f4e205369676e6564204d6573736167653a0a33330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018890526059015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015612892573d6000803e3d6000fd5b505050602060405103516001600160a01b0316836001600160a01b0316146128fc5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104e1565b5050611325565b8015612944576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101879052600090605c0161280c565b6000868152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff87169084015260608301889052608083018790529160019060a0016020604051602081039080840390855afa1580156129c6573d6000803e3d6000fd5b505050602060405103516001600160a01b0316846001600160a01b0316146125535760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104e1565b60006103e8612a3f8360d01c90565b611b7c9190612df1565b80356001600160a01b0381168114612a6057600080fd5b919050565b803564ffffffffff81168114612a6057600080fd5b803560ff81168114612a6057600080fd5b600060208284031215612a9d57600080fd5b612aa682612a49565b9392505050565b60008060408385031215612ac057600080fd5b612ac983612a49565b9150612ad760208401612a49565b90509250929050565b600060208284031215612af257600080fd5b8151612aa681612f13565b600060208284031215612b0f57600080fd5b5035919050565b60008060408385031215612b2957600080fd5b82359150612ad760208401612a49565b600080600080600060a08688031215612b5157600080fd5b853594506020860135935060408601359250612b6f60608701612a7a565b9150612b7d60808701612a49565b90509295509295909350565b60008060008060008060c08789031215612ba257600080fd5b863595506020870135945060408701359350612bc060608801612a7a565b9250612bce60808801612a49565b9150612bdc60a08801612a49565b90509295509295509295565b60008060008060008060c08789031215612c0157600080fd5b863595506020870135945060408701359350612c1f60608801612a7a565b9250612c2d60808801612a49565b915060a0870135612c3d81612f13565b809150509295509295509295565b600080600080600060a08688031215612c6357600080fd5b853594506020860135935060408601359250612c8160608701612a7a565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff81168114612caf57600080fd5b809150509295509295909350565b60008060408385031215612cd057600080fd5b82359150612ad760208401612a65565b60008060408385031215612cf357600080fd5b82359150602083013565ffffffffffff81168114612d1057600080fd5b809150509250929050565b600060208284031215612d2d57600080fd5b612aa682612a65565b600060208284031215612d4857600080fd5b612aa682612a7a565b6000825160005b81811015612d725760208186018101518583015201612d58565b81811115612d81576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015612dcd5783516001600160a01b031683529284019291840191600101612da8565b50909695505050505050565b60008219821115612dec57612dec612e86565b500190565b600082612e27577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015612e3e57612e3e612e86565b500390565b600060ff821660ff841680821015612e5d57612e5d612e86565b90039392505050565b600060ff821660ff811415612e7d57612e7d612e86565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114612f2157600080fd5b5056fea164736f6c6343000806000a";

type MesonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Meson__factory extends ContractFactory {
  constructor(...args: MesonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Meson> {
    return super.deploy(supportedTokens, overrides || {}) as Promise<Meson>;
  }
  getDeployTransaction(
    supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(supportedTokens, overrides || {});
  }
  attach(address: string): Meson {
    return super.attach(address) as Meson;
  }
  connect(signer: Signer): Meson__factory {
    return super.connect(signer) as Meson__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonInterface {
    return new utils.Interface(_abi) as MesonInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Meson {
    return new Contract(address, _abi, signerOrProvider) as Meson;
  }
}
