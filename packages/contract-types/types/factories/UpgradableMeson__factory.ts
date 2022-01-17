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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expireTs",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inToken",
        type: "address",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "recipient",
        type: "bytes",
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
    inputs: [],
    name: "getCoinType",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_supportedTokens",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockingSwaps",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "until",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
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
    ],
    name: "postSwap",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "domainHash",
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
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "requestSwap",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requests",
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
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "expireTs",
        type: "uint64",
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
    name: "supportedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "totalDemandFor",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x3060601b608052610120604052605260a081815290612cc360c039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206065553480156100db57600080fd5b5060805160601c612bb461010f600039600081816105f501528181610635015281816108af01526108ef0152612bb46000f3fe60806040526004361061012a5760003560e01c80639d866985116100ab578063d541beb31161006f578063d541beb314610417578063eb69e45014610437578063ec9b5b3a14610457578063f3fef3a314610477578063f7888aec14610497578063f7d18c5a146104cf57600080fd5b80639d86698514610331578063a224cee714610392578063a8f81b1a146103b2578063bcc20ff6146103e8578063d2ef73981461040857600080fd5b8063552c0120116100f2578063552c0120146101d757806361565d25146101f757806368c4ac261461022d5780636bb39ae01461026d57806394149c1a1461030f57600080fd5b80631548fdce1461012f5780633659cfe6146101515780633b11d5ac1461017157806347e7ef24146101a45780634f1ef286146101c4575b600080fd5b34801561013b57600080fd5b5061014f61014a366004612652565b6104ef565b005b34801561015d57600080fd5b5061014f61016c3660046124bd565b6105ea565b34801561017d57600080fd5b5061019161018c366004612809565b6106aa565b6040519081526020015b60405180910390f35b3480156101b057600080fd5b5061014f6101bf366004612558565b6107fa565b61014f6101d236600461250b565b6108a4565b3480156101e357600080fd5b5061014f6101f236600461278c565b610955565b34801561020357600080fd5b506101916102123660046124bd565b6001600160a01b03166000908152606a602052604090205490565b34801561023957600080fd5b5061025d6102483660046124bd565b60666020526000908152604090205460ff1681565b604051901515815260200161019b565b34801561027957600080fd5b506102ce610288366004612652565b606d60205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169390911691906001600160401b031685565b604080516001600160a01b0396871681529486166020860152929094169183019190915260608201526001600160401b03909116608082015260a00161019b565b34801561031b57600080fd5b50604051632000000f60e21b815260200161019b565b34801561033d57600080fd5b506102ce61034c366004612652565b606c60205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169390911691906001600160401b031685565b34801561039e57600080fd5b5061014f6103ad366004612582565b610b11565b3480156103be57600080fd5b506101916103cd3660046124bd565b6001600160a01b03166000908152606b602052604090205490565b3480156103f457600080fd5b5061019161040336600461284d565b610bc8565b34801561041457600080fd5b50005b34801561042357600080fd5b5061014f610432366004612652565b610df1565b34801561044357600080fd5b5061014f6104523660046126b1565b611052565b34801561046357600080fd5b5061014f610472366004612652565b6112c9565b34801561048357600080fd5b5061014f610492366004612558565b61148f565b3480156104a357600080fd5b506101916104b23660046124d8565b606760209081526000928352604080842090915290825290205481565b3480156104db57600080fd5b5061014f6104ea36600461266b565b6114e0565b6000818152606c602052604090206003015481906105285760405162461bcd60e51b815260040161051f906129df565b60405180910390fd5b6000828152606c60205260409020600101546001600160a01b0316156105905760405162461bcd60e51b815260206004820152601f60248201527f7377617020626f6e64656420746f20616e6f746865722070726f766964657200604482015260640161051f565b6000828152606c602090815260409182902060010180546001600160a01b03191633179055815184815291517f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd69281900390910190a15050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106335760405162461bcd60e51b815260040161051f9061291c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610665611792565b6001600160a01b03161461068b5760405162461bcd60e51b815260040161051f90612993565b604080516000808252602082019092526106a7918391906117c0565b50565b6001600160a01b038116600090815260666020526040812054829060ff166106e45760405162461bcd60e51b815260040161051f90612968565b60008060006106f3878761190b565b92509250925060006107023390565b6040805160a0810182526001600160a01b038084168252600060208084018281528d8416858701908152606086018a81526001600160401b03808d16608089019081528e8752606c90955297909420955186549086166001600160a01b03199182161787559151600187018054918716918416919091179055516002860180549190951691161790925551600383015551600490910180549190921667ffffffffffffffff1990911617905590506107bb878284611b71565b6040518481527fa67aeefca6ffac499b56c6e714636f7ade5d82fde82aef50665ad3e88be5cb4b9060200160405180910390a150919695505050505050565b6001600160a01b038216600090815260666020526040902054829060ff166108345760405162461bcd60e51b815260040161051f90612968565b6001600160a01b0383166000908152606760209081526040808320338085529252909120546108639084611bf9565b6001600160a01b038086166000908152606760209081526040808320938616835292905220556108938484611c1a565b61089e848285611b71565b50505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108ed5760405162461bcd60e51b815260040161051f9061291c565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661091f611792565b6001600160a01b0316146109455760405162461bcd60e51b815260040161051f90612993565b610951828260016117c0565b5050565b6000868152606c602052604090206003015486906109855760405162461bcd60e51b815260040161051f906129df565b6000878152606c6020908152604091829020825160a08101845281546001600160a01b039081168083526001840154821683860152600284015490911694820194909452600382015460608201526004909101546001600160401b031660808201528851918901919091206065549192610a04928b92918a8a8a611c5d565b604080820151602080840151606085015160008d8152606c90935293822080546001600160a01b0319908116825560018201805482169055600282018054909116905560038101929092556004909101805467ffffffffffffffff1916905590918515610ac6576001600160a01b03808416600090815260676020908152604080832093861683529290522054610a9b9082611bf9565b6001600160a01b03808516600090815260676020908152604080832093871683529290522055610ad1565b610ad1838383611e04565b6040518b81527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a15050505050505050505050565b606e5460ff1615610b7b5760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b606482015260840161051f565b606e805460ff1916600117905560005b815181101561095157610bb6828281518110610ba957610ba9612ac3565b6020026020010151611f3a565b80610bc081612a92565b915050610b8b565b6001600160a01b038516600090815260666020526040812054869060ff16610c025760405162461bcd60e51b815260040161051f90612968565b6000806000610c118b8b61190b565b60408051600081526020810180835285905260ff8b1691810191909152606081018c9052608081018b9052929550909350915060019060a0016020604051602081039080840390855afa158015610c6c573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610cca5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b604482015260640161051f565b6040805160a0810182526001600160a01b038b811682523360208084018281528f8416858701908152606086018881526001600160401b038a81166080890190815260008d8152606c90965298909420965187546001600160a01b031990811691881691909117885592516001880180548516918816919091179055905160028701805490931695169490941790559151600384015592516004909201805467ffffffffffffffff191692909116919091179055610d898b8b84611b71565b604080518581526001600160401b03851660208201529081018390526001600160a01b038c1660608201527ff3c3b2928ca3aaa9c73469b9a28d8a4ebaa18b9698b443162ee5d8c77fe05d6c9060800160405180910390a150919a9950505050505050505050565b6000818152606c60205260409020600301548190610e215760405162461bcd60e51b815260040161051f906129df565b6000828152606c602052604090206004015482906001600160401b03428116911610610e825760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b604482015260640161051f565b6000606c60008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600382015481526020016004820160009054906101000a90046001600160401b03166001600160401b03166001600160401b0316815250509050600081604001519050600082600001519050600083606001519050606c6000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b0302191690556002820160006101000a8154906001600160a01b03021916905560038201600090556004820160006101000a8154906001600160401b0302191690555050611016838383611e04565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b6000878152606d60208181526040808420815160a08101835281546001600160a01b0390811682526001830154811682860152600283015416928101929092526003810154606083018190526004909101546001600160401b03166080830152938b9052919052906110fc5760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b604482015260640161051f565b806060015186111561116d5760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b606482015260840161051f565b6040516bffffffffffffffffffffffff19606089901b1660208201526111b690899060340160405160208183030381529060405280519060200120878460000151888888611c5d565b604081015160208201516060830151881015611232576001600160a01b03808316600090815260676020908152604080832093851683529290522054606084015161120b9190611206908b611fba565b611bf9565b6001600160a01b038084166000908152606760209081526040808320938616835292905220555b60008a8152606d6020526040812080546001600160a01b031990811682556001820180548216905560028201805490911690556003810191909155600401805467ffffffffffffffff1916905561128a828a8a611e04565b6040518a81527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a150505050505050505050565b6000818152606d602052604090206003015461131d5760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b604482015260640161051f565b6000818152606d6020908152604091829020825160a08101845281546001600160a01b0390811682526001830154811693820193909352600282015490921692820192909252600382015460608201526004909101546001600160401b039081166080830181905242909116116113d65760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b00000000000000604482015260640161051f565b60408082015160608301516020808501516001600160a01b038085166000908152606784528681209183168152925293902054919290916114179083611bf9565b6001600160a01b03938416600090815260676020908152604080832094909616825292835284812091909155948552606d905250822080546001600160a01b03199081168255600182018054821690556002820180549091169055600381019290925550600401805467ffffffffffffffff19169055565b6001600160a01b038216600090815260666020526040902054829060ff166114c95760405162461bcd60e51b815260040161051f90612968565b336114d48484611fd5565b61089e8182868661204c565b6001600160a01b038116600090815260666020526040902054819060ff1661151a5760405162461bcd60e51b815260040161051f90612968565b6000831161156a5760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f604482015260640161051f565b6000858152606d6020526040902060030154156115c95760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c7265616479206578697374730000000000604482015260640161051f565b6001600160a01b0382166000908152606760209081526040808320338085529252909120548411156116345760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b604482015260640161051f565b6001600160a01b03808416600090815260676020908152604080832093851683529290522054611665908590612a4f565b6001600160a01b0380851660008181526067602090815260408083208786168085529083529281902095909555845160a081018652938a1684528301529181019190915260608101859052608081016116c06104b042612a37565b6001600160401b039081169091526000888152606d6020908152604091829020845181546001600160a01b03199081166001600160a01b0392831617835586840151600184018054831691841691909117905586850151600284018054909216908316179055606086015160038301556080909501516004909101805467ffffffffffffffff191691909416179092558051898152928416918301919091527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a1505050505050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b60006117ca611792565b90506117d58461210e565b6000835111806117e25750815b156117f3576117f184846121b3565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1661190457805460ff191660011781556040516001600160a01b038316602482015261187290869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b1790526121b3565b50805460ff19168155611883611792565b6001600160a01b0316826001600160a01b0316146118fb5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b606482015260840161051f565b6119048561229e565b5050505050565b60008060008060008061191d886122de565b6040516bffffffffffffffffffffffff1960608c901b1660208201529295509093509150829060340160405160208183030381529060405280519060200120146119a25760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b604482015260640161051f565b60008111611a005760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b606482015260840161051f565b42611a16610e106001600160401b038316612a37565b846001600160401b031611611a645760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b604482015260640161051f565b611a79611c206001600160401b038316612a37565b846001600160401b031610611ac65760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b604482015260640161051f565b6000611b0f8a80516020918201206065546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b6000818152606c602052604090206003015490915015611b615760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b604482015260640161051f565b9650929450925050509250925092565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015611bc157600080fd5b505af1158015611bd5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089e9190612635565b600082611c068382612a37565b9150811015611c1457600080fd5b92915050565b6001600160a01b0382166000908152606a6020526040902054611c3d9082611bf9565b6001600160a01b039092166000908152606a602052604090209190915550565b6001600160a01b038416611cb35760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d70747920616464726573730000604482015260640161051f565b60006040518060600160405280602b8152602001612b7d602b91398051602091820120604080519283019190915281018990526060810188905260800160405160208183030381529060405280519060200120905060008682604051602001611d3392919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015611d9b573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614611df95760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b604482015260640161051f565b505050505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691611e9091906128cd565b6000604051808303816000865af19150503d8060008114611ecd576040519150601f19603f3d011682016040523d82523d6000602084013e611ed2565b606091505b5091509150818015611efc575080511580611efc575080806020019051810190611efc9190612635565b6119045760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015260640161051f565b6001600160a01b0381166000818152606660209081526040808320805460ff19166001908117909155815160808101835284815280840185815281840186815260608381018181529888526069875294909620825181559051928101929092559351600282015593518051919492611904926003850192909101906123c1565b600082611fc78382612a4f565b9150811115611c1457600080fd5b6001600160a01b0382166000908152606a60205260409020548111156120295760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b604482015260640161051f565b6001600160a01b0382166000908152606a6020526040902054611c3d9082611fba565b6001600160a01b038083166000908152606760209081526040808320938716835292905220548111156120ad5760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b604482015260640161051f565b6001600160a01b038083166000908152606760209081526040808320938716835292905220546120dd9082611fba565b6001600160a01b0380841660009081526067602090815260408083209388168352929052205561089e828583611e04565b803b6121725760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161051f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6122125760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161051f565b600080846001600160a01b03168460405161222d91906128cd565b600060405180830381855af49150503d8060008114612268576040519150601f19603f3d011682016040523d82523d6000602084013e61226d565b606091505b50915091506122958282604051806060016040528060278152602001612b5660279139612381565b95945050505050565b6122a78161210e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6000806000806000806000878060200190518101906122fd9190612714565b50509350935093509350604051806080016040528060588152602001612afe605891398051906020012084146123755760405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420737761702072657175657374207479706568617368000000604482015260640161051f565b97919650945092505050565b606083156123905750816123ba565b8251156123a05782518084602001fd5b8160405162461bcd60e51b815260040161051f91906128e9565b9392505050565b8280548282559060005260206000209081019282156123fc579160200282015b828111156123fc5782518255916020019190600101906123e1565b5061240892915061240c565b5090565b5b80821115612408576000815560010161240d565b80356001600160a01b038116811461243857600080fd5b919050565b600082601f83011261244e57600080fd5b81356001600160401b0381111561246757612467612ad9565b61247a601f8201601f1916602001612a07565b81815284602083860101111561248f57600080fd5b816020850160208301376000918101602001919091529392505050565b803560ff8116811461243857600080fd5b6000602082840312156124cf57600080fd5b6123ba82612421565b600080604083850312156124eb57600080fd5b6124f483612421565b915061250260208401612421565b90509250929050565b6000806040838503121561251e57600080fd5b61252783612421565b915060208301356001600160401b0381111561254257600080fd5b61254e8582860161243d565b9150509250929050565b6000806040838503121561256b57600080fd5b61257483612421565b946020939093013593505050565b6000602080838503121561259557600080fd5b82356001600160401b03808211156125ac57600080fd5b818501915085601f8301126125c057600080fd5b8135818111156125d2576125d2612ad9565b8060051b91506125e3848301612a07565b8181528481019084860184860187018a10156125fe57600080fd5b600095505b838610156126285761261481612421565b835260019590950194918601918601612603565b5098975050505050505050565b60006020828403121561264757600080fd5b81516123ba81612aef565b60006020828403121561266457600080fd5b5035919050565b6000806000806080858703121561268157600080fd5b8435935061269160208601612421565b9250604085013591506126a660608601612421565b905092959194509250565b600080600080600080600060e0888a0312156126cc57600080fd5b873596506126dc60208901612421565b955060408801359450606088013593506080880135925060a0880135915061270660c089016124ac565b905092959891949750929550565b60008060008060008060c0878903121561272d57600080fd5b86519550602087015194506040870151935060608701516001600160401b038116811461275957600080fd5b60808801519093506001600160e01b03198116811461277757600080fd5b8092505060a087015190509295509295509295565b60008060008060008060c087890312156127a557600080fd5b8635955060208701356001600160401b038111156127c257600080fd5b6127ce89828a0161243d565b95505060408701359350606087013592506127eb608088016124ac565b915060a08701356127fb81612aef565b809150509295509295509295565b6000806040838503121561281c57600080fd5b82356001600160401b0381111561283257600080fd5b61283e8582860161243d565b92505061250260208401612421565b60008060008060008060c0878903121561286657600080fd5b86356001600160401b0381111561287c57600080fd5b61288889828a0161243d565b96505061289760208801612421565b94506128a560408801612421565b935060608701359250608087013591506128c160a088016124ac565b90509295509295509295565b600082516128df818460208701612a66565b9190910192915050565b6020815260008251806020840152612908816040850160208701612a66565b601f01601f19169190910160400192915050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252600e908201526d1cddd85c081b9bdd08199bdd5b9960921b604082015260600190565b604051601f8201601f191681016001600160401b0381118282101715612a2f57612a2f612ad9565b604052919050565b60008219821115612a4a57612a4a612aad565b500190565b600082821015612a6157612a61612aad565b500390565b60005b83811015612a81578181015183820152602001612a69565b8381111561089e5750506000910152565b6000600019821415612aa657612aa6612aad565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146106a757600080fdfe537761705265717565737428627974657320696e546f6b656e2c75696e7432353620616d6f756e742c75696e7436342065787069726554732c627974657334206f7574436861696e2c6279746573206f7574546f6b656e29416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

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
