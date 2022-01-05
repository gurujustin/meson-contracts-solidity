/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonSwapInterface extends utils.Interface {
  functions: {
    "bondSwap(bytes32)": FunctionFragment;
    "cancelSwap(bytes32)": FunctionFragment;
    "executeSwap(bytes32,bytes32,bytes32,uint8)": FunctionFragment;
    "getCoinType()": FunctionFragment;
    "postSwap(bytes,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "requestSwap(bytes,address)": FunctionFragment;
    "requests(bytes32)": FunctionFragment;
    "supportedTokens(address)": FunctionFragment;
    "totalDemandFor(address)": FunctionFragment;
    "totalSupplyFor(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bondSwap", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "cancelSwap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwap",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "postSwap",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestSwap",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "requests", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDemandFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyFor",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "bondSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "postSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDemandFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyFor",
    data: BytesLike
  ): Result;

  events: {
    "SwapBonded(bytes32)": EventFragment;
    "SwapCancelled(bytes32)": EventFragment;
    "SwapExecuted(bytes32)": EventFragment;
    "SwapPosted(bytes32,uint256,uint256,address)": EventFragment;
    "SwapRequested(bytes32,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapBonded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapPosted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapRequested"): EventFragment;
}

export type SwapBondedEvent = TypedEvent<[string], { swapId: string }>;

export type SwapBondedEventFilter = TypedEventFilter<SwapBondedEvent>;

export type SwapCancelledEvent = TypedEvent<[string], { swapId: string }>;

export type SwapCancelledEventFilter = TypedEventFilter<SwapCancelledEvent>;

export type SwapExecutedEvent = TypedEvent<[string], { swapId: string }>;

export type SwapExecutedEventFilter = TypedEventFilter<SwapExecutedEvent>;

export type SwapPostedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  { swapId: string; expireTs: BigNumber; amount: BigNumber; inToken: string }
>;

export type SwapPostedEventFilter = TypedEventFilter<SwapPostedEvent>;

export type SwapRequestedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  { swapId: string; expireTs: BigNumber; amount: BigNumber; inToken: string }
>;

export type SwapRequestedEventFilter = TypedEventFilter<SwapRequestedEvent>;

export interface MesonSwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonSwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bondSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCoinType(overrides?: CallOverrides): Promise<[string]>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestSwap(
      encodedSwap: BytesLike,
      inToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        expireTs: BigNumber;
        inToken: string;
        amount: BigNumber;
      }
    >;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  bondSwap(
    swapId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelSwap(
    swapId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeSwap(
    swapId: BytesLike,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCoinType(overrides?: CallOverrides): Promise<string>;

  postSwap(
    encodedSwap: BytesLike,
    inToken: string,
    initiator: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestSwap(
    encodedSwap: BytesLike,
    inToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requests(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string, BigNumber] & {
      initiator: string;
      provider: string;
      expireTs: BigNumber;
      inToken: string;
      amount: BigNumber;
    }
  >;

  supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  totalDemandFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    bondSwap(swapId: BytesLike, overrides?: CallOverrides): Promise<void>;

    cancelSwap(swapId: BytesLike, overrides?: CallOverrides): Promise<void>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCoinType(overrides?: CallOverrides): Promise<string>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    requestSwap(
      encodedSwap: BytesLike,
      inToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        expireTs: BigNumber;
        inToken: string;
        amount: BigNumber;
      }
    >;

    supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "SwapBonded(bytes32)"(swapId?: null): SwapBondedEventFilter;
    SwapBonded(swapId?: null): SwapBondedEventFilter;

    "SwapCancelled(bytes32)"(swapId?: null): SwapCancelledEventFilter;
    SwapCancelled(swapId?: null): SwapCancelledEventFilter;

    "SwapExecuted(bytes32)"(swapId?: null): SwapExecutedEventFilter;
    SwapExecuted(swapId?: null): SwapExecutedEventFilter;

    "SwapPosted(bytes32,uint256,uint256,address)"(
      swapId?: null,
      expireTs?: null,
      amount?: null,
      inToken?: null
    ): SwapPostedEventFilter;
    SwapPosted(
      swapId?: null,
      expireTs?: null,
      amount?: null,
      inToken?: null
    ): SwapPostedEventFilter;

    "SwapRequested(bytes32,uint256,uint256,address)"(
      swapId?: null,
      expireTs?: null,
      amount?: null,
      inToken?: null
    ): SwapRequestedEventFilter;
    SwapRequested(
      swapId?: null,
      expireTs?: null,
      amount?: null,
      inToken?: null
    ): SwapRequestedEventFilter;
  };

  estimateGas: {
    bondSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestSwap(
      encodedSwap: BytesLike,
      inToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requests(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bondSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestSwap(
      encodedSwap: BytesLike,
      inToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}