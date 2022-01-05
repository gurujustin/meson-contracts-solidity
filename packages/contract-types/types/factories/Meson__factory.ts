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
        name: "_supportedTokens",
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
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
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
    name: "SwapRequested",
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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "inToken",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256",
      },
    ],
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
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
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
        internalType: "uint256",
        name: "metaAmount",
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
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
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
  "0x6101006040526052608081815290620026b760a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120600055348015620000d657600080fd5b506040516200270938038062002709833981016040819052620000f9916200025a565b60005b81518110156200014857620001338282815181106200011f576200011f6200035d565b60200260200101516200015060201b60201c565b806200013f8162000333565b915050620000fc565b505062000389565b6001600160a01b0381166000818152600160208181526040808420805460ff19168417905580516080810182528481528083018581528183018681526060838101818152988852600380875294909720835181559151958201959095559351600285015594518051949594620001cf93928501929190910190620001d6565b5050505050565b82805482825590600052602060002090810192821562000214579160200282015b8281111562000214578251825591602001919060010190620001f7565b506200022292915062000226565b5090565b5b8082111562000222576000815560010162000227565b80516001600160a01b03811681146200025557600080fd5b919050565b600060208083850312156200026e57600080fd5b82516001600160401b03808211156200028657600080fd5b818501915085601f8301126200029b57600080fd5b815181811115620002b057620002b062000373565b8060051b604051601f19603f83011681018181108582111715620002d857620002d862000373565b604052828152858101935084860182860187018a1015620002f857600080fd5b600095505b83861015620003265762000311816200023d565b855260019590950194938601938601620002fd565b5098975050505050505050565b60006000198214156200035657634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61231e80620003996000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80639d866985116100a2578063c685960111610071578063c68596011461036a578063d541beb314610381578063ec9b5b3a14610394578063f3fef3a3146103a7578063f7888aec146103ba57600080fd5b80639d86698514610298578063a8f81b1a1461031b578063bcc20ff614610344578063c43a73dc1461035757600080fd5b80634e1389ed116100e95780634e1389ed1461017c57806361565d251461018f57806368c4ac26146101b85780636bb39ae0146101eb57806394149c1a1461028357600080fd5b80631548fdce1461011b5780633b11d5ac146101305780633ce758b51461015657806347e7ef2414610169575b600080fd5b61012e610129366004611fec565b6103e5565b005b61014361013e3660046120f9565b6104e0565b6040519081526020015b60405180910390f35b61012e610164366004612005565b61062f565b61012e610177366004611fa0565b610762565b61012e61018a366004612044565b61080c565b61014361019d366004611ea2565b6001600160a01b031660009081526004602052604090205490565b6101db6101c6366004611ea2565b60016020526000908152604090205460ff1681565b604051901515815260200161014d565b6102406101f9366004611fec565b6008602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b0394851695938516949283169391929091169086565b604080516001600160a01b0397881681529587166020870152938616938501939093526060840191909152909216608082015260a081019190915260c00161014d565b604051632000000f60e21b815260200161014d565b6102e46102a6366004611fec565b600660205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169391929091169085565b604080516001600160a01b03968716815294861660208601528401929092529092166060820152608081019190915260a00161014d565b610143610329366004611ea2565b6001600160a01b031660009081526005602052604090205490565b61014361035236600461213e565b610a40565b61012e61036536600461213e565b610ca5565b61012e610378366004611ef7565b50505050505050565b61012e61038f366004611fec565b6110ec565b61012e6103a2366004611fec565b61130a565b61012e6103b5366004611fa0565b6114ca565b6101436103c8366004611ec4565b600760209081526000928352604080842090915290825290205481565b600081815260066020526040902060040154819061041e5760405162461bcd60e51b815260040161041590612225565b60405180910390fd5b6000828152600660205260409020600101546001600160a01b0316156104865760405162461bcd60e51b815260206004820152601f60248201527f7377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610415565b60008281526006602090815260409182902060010180546001600160a01b03191633179055815184815291517f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd69281900390910190a15050565b6001600160a01b038116600090815260016020526040812054829060ff1661051a5760405162461bcd60e51b8152600401610415906121fa565b6000806000610529878761151b565b92509250925060006105383390565b6040805160a0810182526001600160a01b038084168252600060208084018281528486018a81528e851660608701908152608087018b81528d8652600690945296909320945185549085166001600160a01b03199182161786559051600186018054918616918316919091179055915160028501559351600384018054919093169116179055905160049091015590506105d387828461171a565b60408051858152602081018590529081018390526001600160a01b03881660608201527fd817149ecf4b0c804e02ea3bd246f04db64ee3ea2ef0e16f78b6dd0a60cf58299060800160405180910390a150919695505050505050565b600084815260066020526040902060040154849061065f5760405162461bcd60e51b815260040161041590612225565b600085815260066020908152604091829020825160a08101845281546001600160a01b039081168083526001840154821694830194909452600283015494820194909452600382015490931660608401526004015460808301526106c79087908787876117a2565b6080810151606082015160208084015160008a815260069092526040822080546001600160a01b031990811682556001820180548216905560028201849055600382018054909116905560040191909155610723828285611972565b6040518981527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d2062906020015b60405180910390a1505050505050505050565b6001600160a01b038216600090815260016020526040902054829060ff1661079c5760405162461bcd60e51b8152600401610415906121fa565b6001600160a01b0383166000908152600760209081526040808320338085529252909120546107cb9084611aaf565b6001600160a01b038086166000908152600760209081526040808320938616835292905220556107fb8484611ad0565b61080684828561171a565b50505050565b6000858152600860208181526040808420815160c08101835281546001600160a01b039081168252600183015481168286015260028301548116938201939093526003820154606082018190526004830154909316608082015260059091015460a0820152938990529190526108ba5760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b6044820152606401610415565b806060015185111561092b5760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b6064820152608401610415565b61093c8682600001518686866117a2565b60408101516020820151608083015160608401518810156109bd576001600160a01b0380841660009081526007602090815260408083209386168352929052205460608501516109969190610991908b611b13565b611aaf565b6001600160a01b038085166000908152600760209081526040808320938716835292905220555b600089815260086020526040812080546001600160a01b03199081168255600182018054821690556002820180548216905560038201839055600482018054909116905560050155610a1083828a611972565b6040518981527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200161074f565b6001600160a01b038516600090815260016020526040812054869060ff16610a7a5760405162461bcd60e51b8152600401610415906121fa565b6000806000610a898b8b61151b565b60408051600081526020810180835285905260ff8b1691810191909152606081018c9052608081018b9052929550909350915060019060a0016020604051602081039080840390855afa158015610ae4573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610b425760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610415565b60003390506040518060a001604052808b6001600160a01b03168152602001826001600160a01b031681526020018481526020018c6001600160a01b03168152602001838152506006600086815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160040155905050610c458b8b8461171a565b60408051858152602081018590529081018390526001600160a01b038c1660608201527ff60f3861c423568d0aae6a3a3bc9d4b41c40ab0cb0267599d9d35122e4f320e89060800160405180910390a150919a9950505050505050505050565b6001600160a01b038516600090815260016020526040902054859060ff16610cdf5760405162461bcd60e51b8152600401610415906121fa565b6000806000610ced8a611b2e565b92509250925060008311610d435760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610415565b6040516001600160601b031960608b901b16602082015282906034016040516020818303038152906040528051906020012014610db95760405162461bcd60e51b81526020600482015260146024820152730e8ded6cadc40c8decae640dcdee840dac2e8c6d60631b6044820152606401610415565b6040516001600160601b031960608a901b16602082015281906034016040516020818303038152906040528051906020012014610e385760405162461bcd60e51b815260206004820152601860248201527f726563697069656e7420646f6573206e6f74206d6174636800000000000000006044820152606401610415565b6001600160a01b038916600090815260076020908152604080832033808552925290912054841115610ea35760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b6044820152606401610415565b6000610eae8c611bd4565b60008181526008602052604090206003015490915015610f105760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c72656164792065786973747300000000006044820152606401610415565b6001600160a01b03808c16600090815260076020908152604080832093861683529290522054610f41908690612265565b6001600160a01b03808d166000908152600760209081526040808320938716835292905281812092909255805160c081019290925260e082019081905282905260ff881661010082015261012081018a90526101408101899052429080600161016082016020604051602081039080840390855afa158015610fc7573d6000803e3d6000fd5b505050602060405103516001600160a01b03168152602001846001600160a01b031681526020018d6001600160a01b031681526020018781526020018c6001600160a01b031681526020016104b083611020919061224d565b9052600083815260086020908152604091829020835181546001600160a01b03199081166001600160a01b0392831617835585840151600184018054831691841691909117905585850151600284018054831691841691909117905560608601516003840155608086015160048401805490921690831617905560a0909401516005909101558151858152928616908301527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a150505050505050505050505050565b600081815260066020526040902060040154819061111c5760405162461bcd60e51b815260040161041590612225565b600082815260066020526040902060020154829042116111715760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b6044820152606401610415565b6000600660008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282015481526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600482015481525050905060008160600151905060008260000151905060008360800151905060066000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b03021916905560028201600090556003820160006101000a8154906001600160a01b030219169055600482016000905550506112ce838383611972565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b60008181526008602052604090206003015461135e5760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b6044820152606401610415565b600081815260086020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015483169381019390935260038101546060840152600481015490911660808301526005015460a0820181905242116114135760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b000000000000006044820152606401610415565b60408082015160608301516020808501516001600160a01b038085166000908152600784528681209183168152925293902054919290916114549083611aaf565b6001600160a01b039384166000908152600760209081526040808320949096168252928352848120919091559485526008905250822080546001600160a01b0319908116825560018201805482169055600282018054821690556003820184905560048201805490911690556005019190915550565b6001600160a01b038216600090815260016020526040902054829060ff166115045760405162461bcd60e51b8152600401610415906121fa565b3361150f8484611c17565b61080681828686611c8e565b60008060008060008061152d88611d50565b6040516001600160601b031960608c901b1660208201529295509093509150829060340160405160208183030381529060405280519060200120146115ad5760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b6044820152606401610415565b6000811161160b5760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b6064820152608401610415565b42611618610e108261224d565b841161165d5760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b6044820152606401610415565b611669611c208261224d565b84106116ad5760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b6044820152606401610415565b60006116b88a611bd4565b6000818152600660205260409020600401549091501561170a5760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b6044820152606401610415565b9650929450925050509250925092565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b15801561176a57600080fd5b505af115801561177e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108069190611fca565b6001600160a01b0384166117f85760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610415565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091611868917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b60405160208183030381529060405280519060200120905060008054826040516020016118ac92919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015611914573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b0316146103785760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610415565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b179052915160009283928716916119fe91906121bf565b6000604051808303816000865af19150503d8060008114611a3b576040519150601f19603f3d011682016040523d82523d6000602084013e611a40565b606091505b5091509150818015611a6a575080511580611a6a575080806020019051810190611a6a9190611fca565b611aa85760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610415565b5050505050565b600082611abc838261224d565b9150811015611aca57600080fd5b92915050565b6001600160a01b038216600090815260046020526040902054611af39082611aaf565b6001600160a01b0390921660009081526004602052604090209190915550565b600082611b208382612265565b9150811115611aca57600080fd5b600080600080600080600087806020019051810190611b4d919061208d565b96509650509550505093506040518060a00160405280606981526020016122a960699139805190602001208414611bc65760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964207377617020726571756573742074797065686173680000006044820152606401610415565b919790965090945092505050565b80516020918201206000546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b6001600160a01b038216600090815260046020526040902054811115611c6b5760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610415565b6001600160a01b038216600090815260046020526040902054611af39082611b13565b6001600160a01b03808316600090815260076020908152604080832093871683529290522054811115611cef5760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b6044820152606401610415565b6001600160a01b03808316600090815260076020908152604080832093871683529290522054611d1f9082611b13565b6001600160a01b03808416600090815260076020908152604080832093881683529290522055610806828583611972565b600080600080600080600087806020019051810190611d6f919061208d565b50505093509350935093506040518060a00160405280606981526020016122a960699139805190602001208414611bc65760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964207377617020726571756573742074797065686173680000006044820152606401610415565b80356001600160a01b0381168114611dff57600080fd5b919050565b600082601f830112611e1557600080fd5b813567ffffffffffffffff80821115611e3057611e30612292565b604051601f8301601f19908116603f01168101908282118183101715611e5857611e58612292565b81604052838152866020858801011115611e7157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff81168114611dff57600080fd5b600060208284031215611eb457600080fd5b611ebd82611de8565b9392505050565b60008060408385031215611ed757600080fd5b611ee083611de8565b9150611eee60208401611de8565b90509250929050565b600080600080600080600060e0888a031215611f1257600080fd5b611f1b88611de8565b9650602088013567ffffffffffffffff80821115611f3857600080fd5b611f448b838c01611e04565b975060408a0135965060608a0135915080821115611f6157600080fd5b50611f6e8a828b01611e04565b945050611f7d60808901611de8565b9250611f8b60a08901611de8565b915060c0880135905092959891949750929550565b60008060408385031215611fb357600080fd5b611fbc83611de8565b946020939093013593505050565b600060208284031215611fdc57600080fd5b81518015158114611ebd57600080fd5b600060208284031215611ffe57600080fd5b5035919050565b6000806000806080858703121561201b57600080fd5b84359350602085013592506040850135915061203960608601611e91565b905092959194509250565b600080600080600060a0868803121561205c57600080fd5b8535945060208601359350604086013592506060860135915061208160808701611e91565b90509295509295909350565b600080600080600080600060e0888a0312156120a857600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b811681146120db57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b6000806040838503121561210c57600080fd5b823567ffffffffffffffff81111561212357600080fd5b61212f85828601611e04565b925050611eee60208401611de8565b60008060008060008060c0878903121561215757600080fd5b863567ffffffffffffffff81111561216e57600080fd5b61217a89828a01611e04565b96505061218960208801611de8565b945061219760408801611de8565b935060608701359250608087013591506121b360a08801611e91565b90509295509295509295565b6000825160005b818110156121e057602081860181015185830152016121c6565b818111156121ef576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b6020808252600e908201526d1cddd85c081b9bdd08199bdd5b9960921b604082015260600190565b600082198211156122605761226061227c565b500190565b6000828210156122775761227761227c565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

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
    _supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Meson> {
    return super.deploy(_supportedTokens, overrides || {}) as Promise<Meson>;
  }
  getDeployTransaction(
    _supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_supportedTokens, overrides || {});
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