/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonPoolsTest,
  MesonPoolsTestInterface,
} from "../MesonPoolsTest";

const _abi = [
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
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addTokenToSwapList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "deposit",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "hasLockedSwap",
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
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
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
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
    ],
    name: "registerAddress",
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
        internalType: "bytes32",
        name: "domainHash",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "domainHash",
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
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bdd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638e93243b11610081578063d23d1c761161005b578063d23d1c76146101f3578063e52d0404146102d6578063f7888aec1461033157600080fd5b80638e93243b1461019f57806394149c1a146101b2578063b3fb6564146101e057600080fd5b8063399f3ee5116100b2578063399f3ee514610166578063529eb49a14610179578063873e03b21461018c57600080fd5b806308fab167146100d95780631aba3a55146100ee5780632d6cd35a1461012e575b600080fd5b6100ec6100e73660046117bf565b610365565b005b6101146100fc36600461176a565b60066020526000908152604090205463ffffffff1681565b60405163ffffffff90911681526020015b60405180910390f35b61015661013c36600461180b565b60009081526008602052604090205463ffffffff16151590565b6040519015158152602001610125565b6100ec6101743660046118be565b6104d8565b6100ec61018736600461199b565b6106f2565b6100ec61019a36600461190a565b610b0a565b6100ec6101ad366004611a1c565b610c64565b6040517f8000003c000000000000000000000000000000000000000000000000000000008152602001610125565b6100ec6101ee3660046117bf565b610e89565b6100ec61020136600461176a565b73ffffffffffffffffffffffffffffffffffffffff8116600081815260016020818152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690931790925581517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b168183015282518082036014018152603490910183528051908201208084526003825282842080547fffffffffffffffffffffffff000000000000000000000000000000000000000016861790559383526004905290205550565b61030c6102e4366004611a1c565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610125565b61034461033f36600461178c565b610fef565b6040516fffffffffffffffffffffffffffffffff9091168152602001610125565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054829060ff166103fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064015b60405180910390fd5b3360008181526006602090815260408083205473ffffffffffffffffffffffffffffffffffffffff8816845260048352818420548085526005845282852063ffffffff90921680865291909352922054610467906fffffffffffffffffffffffffffffffff1686611053565b600082815260056020908152604080832063ffffffff87168452909152902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff929092169190911790556104d0868487611092565b505050505050565b60006104e5848484611246565b60008181526008602090815260409182902082518084019093525463ffffffff811680845264010000000090910465ffffffffffff1691830191909152919250908061058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f7377617020646f6573206e6f742065786973740000000000000000000000000060448201526064016103f2565b816020015165ffffffffffff164265ffffffffffff161161060a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b0000000000000060448201526064016103f2565b60008061061788886112bb565b600081815260056020908152604080832063ffffffff891684529091529020549193509150610658906fffffffffffffffffffffffffffffffff168361136d565b600091825260056020908152604080842063ffffffff96909616845294815284832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff939093169290921790915594815260089094525090912080547fffffffffffffffffffffffffffffffffffffffffffff0000000000000000000016905550505050565b60006106ff888888611246565b60408051600081526020810180835283905260ff851691810191909152606081018690526080810185905290915060019060a0016020604051602081039080840390855afa158015610755573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146107f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103f2565b6000806108008a8a6112bb565b915091506000826fffffffffffffffffffffffffffffffff1611610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016103f2565b60008381526008602052604090205463ffffffff16156108fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f6c6f636b696e67207377617020616c726561647920657869737473000000000060448201526064016103f2565b336000908152600660209081526040808320548484526005835281842063ffffffff9091168085529252909120546fffffffffffffffffffffffffffffffff848116911610156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f696e73756666696369656e742062616c616e636500000000000000000000000060448201526064016103f2565b600082815260056020908152604080832063ffffffff851684529091529020546109e59084906fffffffffffffffffffffffffffffffff16611ae2565b600083815260056020908152604080832063ffffffff86168085529083529281902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff959095169490941790935582518084019093529082528101610a606104b042611ac1565b65ffffffffffff908116909152600086815260086020908152604091829020845181549590920151909316640100000000027fffffffffffffffffffffffffffffffffffffffffffff0000000000000000000090941663ffffffff90911617929092179055517f4b9652d234ab744ed655916a0c1ddd3e9d02be9a04f7aee8b0bf1e8dfce0173a90610af59086815260200190565b60405180910390a15050505050505050505050565b6000610b17898989611246565b60008181526008602090815260409182902082518084018452905463ffffffff81168252640100000000900465ffffffffffff168183015291517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a901b169181019190915291925090610bac908390603401604051602081830303815290604052805190602001208a8a8989896113ac565b600080610bb98c8c6112bb565b600081815260036020908152604080832054898452600890925290912080547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169055919350915073ffffffffffffffffffffffffffffffffffffffff16610c22818a85611092565b6040518581527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a150505050505050505050505050565b3363ffffffff8216610cd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f43616e6e6f742075736520696e6465782030000000000000000000000000000060448201526064016103f2565b63ffffffff821660009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff1615610d65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e64657820616c72656164792072656769737465726564000000000000000060448201526064016103f2565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604090205463ffffffff1615610df8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4164647265737320616c7265616479207265676973746572656400000000000060448201526064016103f2565b63ffffffff9091166000818152600760209081526040808320805473ffffffffffffffffffffffffffffffffffffffff9096167fffffffffffffffffffffffff000000000000000000000000000000000000000090961686179055938252600690529190912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054829060ff16610f1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064016103f2565b3360008181526006602090815260408083205473ffffffffffffffffffffffffffffffffffffffff8816845260048352818420548085526005845282852063ffffffff90921680865291909352922054610f86906fffffffffffffffffffffffffffffffff168661136d565b600082815260056020908152604080832063ffffffff87168452909152902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff929092169190911790556104d08684876115f3565b73ffffffffffffffffffffffffffffffffffffffff811660009081526004602090815260408083205460068352818420549084526005835281842063ffffffff90911684529091529020546fffffffffffffffffffffffffffffffff165b92915050565b60006fffffffffffffffffffffffffffffffff83166110728385611ae2565b9150816fffffffffffffffffffffffffffffffff16111561104d57600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526fffffffffffffffffffffffffffffffff8516604480840191909152845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839287169161116d9190611a52565b6000604051808303816000865af19150503d80600081146111aa576040519150601f19603f3d011682016040523d82523d6000602084013e6111af565b606091505b50915091508180156111d95750805115806111d95750808060200190518101906111d991906117e9565b61123f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f7472616e73666572206661696c6564000000000000000000000000000000000060448201526064016103f2565b5050505050565b6000808484604051611259929190611a42565b6040519081900381207f1901000000000000000000000000000000000000000000000000000000000000602083015260228201859052604282018190529150606201604051602081830303815290604052805190602001209150509392505050565b6000808080806112cd86880188611824565b965050505093505092506040518060a0016040528060638152602001611b436063913980519060200120831461135f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f496e76616c69642073776170207265717565737420747970656861736800000060448201526064016103f2565b9093509150505b9250929050565b60006fffffffffffffffffffffffffffffffff831661138c8385611a8d565b9150816fffffffffffffffffffffffffffffffff16101561104d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8416611429576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016103f2565b60006040518060600160405280602b8152602001611ba6602b913980516020918201206040805192830191909152810189905260608101889052608001604051602081830303815290604052805190602001209050600086826040516020016114c49291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa15801561154a573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146115e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f696e76616c6964207369676e617475726500000000000000000000000000000060448201526064016103f2565b505050505050505050565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301523060248301526fffffffffffffffffffffffffffffffff831660448301528416906323b872dd90606401602060405180830381600087803b15801561167a57600080fd5b505af115801561168e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b291906117e9565b50505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116dc57600080fd5b919050565b60008083601f8401126116f357600080fd5b50813567ffffffffffffffff81111561170b57600080fd5b60208301915083602082850101111561136657600080fd5b80356fffffffffffffffffffffffffffffffff811681146116dc57600080fd5b803565ffffffffffff811681146116dc57600080fd5b803560ff811681146116dc57600080fd5b60006020828403121561177c57600080fd5b611785826116b8565b9392505050565b6000806040838503121561179f57600080fd5b6117a8836116b8565b91506117b6602084016116b8565b90509250929050565b600080604083850312156117d257600080fd5b6117db836116b8565b91506117b660208401611723565b6000602082840312156117fb57600080fd5b8151801515811461178557600080fd5b60006020828403121561181d57600080fd5b5035919050565b600080600080600080600060e0888a03121561183f57600080fd5b873596506020880135955061185660408901611723565b945061186460608901611743565b935061187260808901611743565b925060a08801357fffffffff00000000000000000000000000000000000000000000000000000000811681146118a757600080fd5b8092505060c0880135905092959891949750929550565b6000806000604084860312156118d357600080fd5b833567ffffffffffffffff8111156118ea57600080fd5b6118f6868287016116e1565b909790965060209590950135949350505050565b60008060008060008060008060e0898b03121561192657600080fd5b883567ffffffffffffffff81111561193d57600080fd5b6119498b828c016116e1565b9099509750506020890135955061196260408a016116b8565b945061197060608a016116b8565b93506080890135925060a0890135915061198c60c08a01611759565b90509295985092959890939650565b600080600080600080600060c0888a0312156119b657600080fd5b873567ffffffffffffffff8111156119cd57600080fd5b6119d98a828b016116e1565b909850965050602088013594506119f2604089016116b8565b93506060880135925060808801359150611a0e60a08901611759565b905092959891949750929550565b600060208284031215611a2e57600080fd5b813563ffffffff8116811461178557600080fd5b8183823760009101908152919050565b6000825160005b81811015611a735760208186018101518583015201611a59565b81811115611a82576000828501525b509190910192915050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115611ab857611ab8611b13565b01949350505050565b600065ffffffffffff808316818516808303821115611ab857611ab8611b13565b60006fffffffffffffffffffffffffffffffff83811690831681811015611b0b57611b0b611b13565b039392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfe537761705265717565737428627974657320696e546f6b656e2c75696e7431323820616d6f756e742c75696e743438206665652c75696e7434382065787069726554732c627974657334206f7574436861696e2c6279746573206f7574546f6b656e295377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a";

type MesonPoolsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPoolsTest__factory extends ContractFactory {
  constructor(...args: MesonPoolsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPoolsTest> {
    return super.deploy(overrides || {}) as Promise<MesonPoolsTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonPoolsTest {
    return super.attach(address) as MesonPoolsTest;
  }
  connect(signer: Signer): MesonPoolsTest__factory {
    return super.connect(signer) as MesonPoolsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsTestInterface {
    return new utils.Interface(_abi) as MesonPoolsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPoolsTest {
    return new Contract(address, _abi, signerOrProvider) as MesonPoolsTest;
  }
}
