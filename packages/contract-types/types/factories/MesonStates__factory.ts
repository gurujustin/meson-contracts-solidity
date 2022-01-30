/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonStates, MesonStatesInterface } from "../MesonStates";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104b5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806394149c1a1161005057806394149c1a146100c1578063e52d0404146100ef578063f7888aec1461014a57600080fd5b80631aba3a551461006c5780638e93243b146100ac575b600080fd5b61009261007a36600461042d565b60066020526000908152604090205463ffffffff1681565b60405163ffffffff90911681526020015b60405180910390f35b6100bf6100ba366004610482565b6101da565b005b6040517f8000003c0000000000000000000000000000000000000000000000000000000081526020016100a3565b6101256100fd366004610482565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a3565b6101b961015836600461044f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526004602090815260408083205460068352818420549084526005835281842063ffffffff90911684529091529020546fffffffffffffffffffffffffffffffff16919050565b6040516fffffffffffffffffffffffffffffffff90911681526020016100a3565b3363ffffffff821661024d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f43616e6e6f742075736520696e6465782030000000000000000000000000000060448201526064015b60405180910390fd5b63ffffffff821660009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff16156102e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610244565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604090205463ffffffff1615610373576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610244565b63ffffffff9091166000818152600760209081526040808320805473ffffffffffffffffffffffffffffffffffffffff9096167fffffffffffffffffffffffff000000000000000000000000000000000000000090961686179055938252600690529190912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000169091179055565b803573ffffffffffffffffffffffffffffffffffffffff8116811461042857600080fd5b919050565b60006020828403121561043f57600080fd5b61044882610404565b9392505050565b6000806040838503121561046257600080fd5b61046b83610404565b915061047960208401610404565b90509250929050565b60006020828403121561049457600080fd5b813563ffffffff8116811461044857600080fdfea164736f6c6343000806000a";

type MesonStatesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStates__factory extends ContractFactory {
  constructor(...args: MesonStatesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStates> {
    return super.deploy(overrides || {}) as Promise<MesonStates>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonStates {
    return super.attach(address) as MesonStates;
  }
  connect(signer: Signer): MesonStates__factory {
    return super.connect(signer) as MesonStates__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesInterface {
    return new utils.Interface(_abi) as MesonStatesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStates {
    return new Contract(address, _abi, signerOrProvider) as MesonStates;
  }
}
