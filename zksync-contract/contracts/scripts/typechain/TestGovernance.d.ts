/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestGovernanceInterface extends ethers.utils.Interface {
  functions: {
    "addToken(address)": FunctionFragment;
    "changeGovernor(address)": FunctionFragment;
    "changeTokenGovernance(address)": FunctionFragment;
    "defaultFactory()": FunctionFragment;
    "getNFTFactory(uint32,address)": FunctionFragment;
    "initialize(bytes)": FunctionFragment;
    "isValidTokenId(uint16)": FunctionFragment;
    "networkGovernor()": FunctionFragment;
    "nftFactories(uint32,address)": FunctionFragment;
    "pausedTokens(uint16)": FunctionFragment;
    "publicPackRegisterNFTFactoryMsg(uint32,address,address)": FunctionFragment;
    "registerNFTFactoryCreator(uint32,address,bytes)": FunctionFragment;
    "requireActiveValidator(address)": FunctionFragment;
    "requireGovernor(address)": FunctionFragment;
    "setDefaultNFTFactory(address)": FunctionFragment;
    "setTokenPaused(address,bool)": FunctionFragment;
    "setValidator(address,bool)": FunctionFragment;
    "tokenAddresses(uint16)": FunctionFragment;
    "tokenGovernance()": FunctionFragment;
    "tokenIds(address)": FunctionFragment;
    "totalTokens()": FunctionFragment;
    "upgrade(bytes)": FunctionFragment;
    "validateTokenAddress(address)": FunctionFragment;
    "validators(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "changeGovernor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeTokenGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTFactory",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "networkGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nftFactories",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pausedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "publicPackRegisterNFTFactoryMsg",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerNFTFactoryCreator",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requireActiveValidator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "requireGovernor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultNFTFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenPaused",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidator",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenIds", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "validateTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "validators", values: [string]): string;

  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeTokenGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "networkGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftFactories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pausedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicPackRegisterNFTFactoryMsg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerNFTFactoryCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireActiveValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultNFTFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validators", data: BytesLike): Result;

  events: {
    "NFTFactoryRegisteredCreator(uint32,address,address)": EventFragment;
    "NewGovernor(address)": EventFragment;
    "NewToken(address,uint16)": EventFragment;
    "NewTokenGovernance(address)": EventFragment;
    "SetDefaultNFTFactory(address)": EventFragment;
    "TokenPausedUpdate(address,bool)": EventFragment;
    "ValidatorStatusUpdate(address,bool)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "NFTFactoryRegisteredCreator"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewGovernor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTokenGovernance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetDefaultNFTFactory"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenPausedUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorStatusUpdate"): EventFragment;
}

export class TestGovernance extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestGovernanceInterface;

  functions: {
    addToken(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changeGovernor(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeGovernor(address)"(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changeTokenGovernance(
      _newTokenGovernance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeTokenGovernance(address)"(
      _newTokenGovernance: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    defaultFactory(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "defaultFactory()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getNFTFactory(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getNFTFactory(uint32,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isValidTokenId(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isValidTokenId(uint16)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    networkGovernor(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "networkGovernor()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    nftFactories(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "nftFactories(uint32,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    pausedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "pausedTokens(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    publicPackRegisterNFTFactoryMsg(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "publicPackRegisterNFTFactoryMsg(uint32,address,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    registerNFTFactoryCreator(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerNFTFactoryCreator(uint32,address,bytes)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    requireActiveValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "requireActiveValidator(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    requireGovernor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "requireGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    setDefaultNFTFactory(
      _factory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDefaultNFTFactory(address)"(
      _factory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTokenPaused(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTokenPaused(address,bool)"(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setValidator(
      _validator: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setValidator(address,bool)"(
      _validator: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "tokenAddresses(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    tokenGovernance(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "tokenGovernance()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    tokenIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "tokenIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    totalTokens(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "totalTokens()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    validateTokenAddress(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "validateTokenAddress(address)"(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    validators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "validators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  addToken(_token: string, overrides?: Overrides): Promise<ContractTransaction>;

  "addToken(address)"(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changeGovernor(
    _newGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeGovernor(address)"(
    _newGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changeTokenGovernance(
    _newTokenGovernance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeTokenGovernance(address)"(
    _newTokenGovernance: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  defaultFactory(overrides?: CallOverrides): Promise<string>;

  "defaultFactory()"(overrides?: CallOverrides): Promise<string>;

  getNFTFactory(
    _creatorAccountId: BigNumberish,
    _creatorAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getNFTFactory(uint32,address)"(
    _creatorAccountId: BigNumberish,
    _creatorAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    initializationParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(bytes)"(
    initializationParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isValidTokenId(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidTokenId(uint16)"(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  networkGovernor(overrides?: CallOverrides): Promise<string>;

  "networkGovernor()"(overrides?: CallOverrides): Promise<string>;

  nftFactories(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "nftFactories(uint32,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  pausedTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "pausedTokens(uint16)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  publicPackRegisterNFTFactoryMsg(
    _creatorAccountId: BigNumberish,
    _creatorAddress: string,
    _factoryAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "publicPackRegisterNFTFactoryMsg(uint32,address,address)"(
    _creatorAccountId: BigNumberish,
    _creatorAddress: string,
    _factoryAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  registerNFTFactoryCreator(
    _creatorAccountId: BigNumberish,
    _creatorAddress: string,
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerNFTFactoryCreator(uint32,address,bytes)"(
    _creatorAccountId: BigNumberish,
    _creatorAddress: string,
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  requireActiveValidator(
    _address: string,
    overrides?: CallOverrides
  ): Promise<void>;

  "requireActiveValidator(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<void>;

  requireGovernor(_address: string, overrides?: CallOverrides): Promise<void>;

  "requireGovernor(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<void>;

  setDefaultNFTFactory(
    _factory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDefaultNFTFactory(address)"(
    _factory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTokenPaused(
    _tokenAddr: string,
    _tokenPaused: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTokenPaused(address,bool)"(
    _tokenAddr: string,
    _tokenPaused: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setValidator(
    _validator: string,
    _active: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setValidator(address,bool)"(
    _validator: string,
    _active: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenAddresses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "tokenAddresses(uint16)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenGovernance(overrides?: CallOverrides): Promise<string>;

  "tokenGovernance()"(overrides?: CallOverrides): Promise<string>;

  tokenIds(arg0: string, overrides?: CallOverrides): Promise<number>;

  "tokenIds(address)"(arg0: string, overrides?: CallOverrides): Promise<number>;

  totalTokens(overrides?: CallOverrides): Promise<number>;

  "totalTokens()"(overrides?: CallOverrides): Promise<number>;

  upgrade(
    upgradeParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgrade(bytes)"(
    upgradeParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  validateTokenAddress(
    _tokenAddr: string,
    overrides?: CallOverrides
  ): Promise<number>;

  "validateTokenAddress(address)"(
    _tokenAddr: string,
    overrides?: CallOverrides
  ): Promise<number>;

  validators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "validators(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "addToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeGovernor(
      _newGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeGovernor(address)"(
      _newGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeTokenGovernance(
      _newTokenGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeTokenGovernance(address)"(
      _newTokenGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    defaultFactory(overrides?: CallOverrides): Promise<string>;

    "defaultFactory()"(overrides?: CallOverrides): Promise<string>;

    getNFTFactory(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getNFTFactory(uint32,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isValidTokenId(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidTokenId(uint16)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    networkGovernor(overrides?: CallOverrides): Promise<string>;

    "networkGovernor()"(overrides?: CallOverrides): Promise<string>;

    nftFactories(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "nftFactories(uint32,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    pausedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "pausedTokens(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    publicPackRegisterNFTFactoryMsg(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "publicPackRegisterNFTFactoryMsg(uint32,address,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    registerNFTFactoryCreator(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerNFTFactoryCreator(uint32,address,bytes)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    requireActiveValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "requireActiveValidator(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    requireGovernor(_address: string, overrides?: CallOverrides): Promise<void>;

    "requireGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultNFTFactory(
      _factory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDefaultNFTFactory(address)"(
      _factory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenPaused(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTokenPaused(address,bool)"(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidator(
      _validator: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setValidator(address,bool)"(
      _validator: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokenAddresses(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenGovernance(overrides?: CallOverrides): Promise<string>;

    "tokenGovernance()"(overrides?: CallOverrides): Promise<string>;

    tokenIds(arg0: string, overrides?: CallOverrides): Promise<number>;

    "tokenIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    totalTokens(overrides?: CallOverrides): Promise<number>;

    "totalTokens()"(overrides?: CallOverrides): Promise<number>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateTokenAddress(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "validateTokenAddress(address)"(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<number>;

    validators(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "validators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    NFTFactoryRegisteredCreator(
      creatorAccountId: BigNumberish | null,
      creatorAddress: string | null,
      factoryAddress: null
    ): EventFilter;

    NewGovernor(newGovernor: null): EventFilter;

    NewToken(token: string | null, tokenId: BigNumberish | null): EventFilter;

    NewTokenGovernance(newTokenGovernance: null): EventFilter;

    SetDefaultNFTFactory(factory: string | null): EventFilter;

    TokenPausedUpdate(token: string | null, paused: null): EventFilter;

    ValidatorStatusUpdate(
      validatorAddress: string | null,
      isActive: null
    ): EventFilter;
  };

  estimateGas: {
    addToken(_token: string, overrides?: Overrides): Promise<BigNumber>;

    "addToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changeGovernor(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeGovernor(address)"(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changeTokenGovernance(
      _newTokenGovernance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeTokenGovernance(address)"(
      _newTokenGovernance: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    defaultFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNFTFactory(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNFTFactory(uint32,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isValidTokenId(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidTokenId(uint16)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    networkGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    "networkGovernor()"(overrides?: CallOverrides): Promise<BigNumber>;

    nftFactories(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "nftFactories(uint32,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pausedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pausedTokens(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    publicPackRegisterNFTFactoryMsg(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "publicPackRegisterNFTFactoryMsg(uint32,address,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerNFTFactoryCreator(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerNFTFactoryCreator(uint32,address,bytes)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    requireActiveValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requireActiveValidator(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requireGovernor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requireGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDefaultNFTFactory(
      _factory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDefaultNFTFactory(address)"(
      _factory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTokenPaused(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTokenPaused(address,bool)"(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setValidator(
      _validator: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setValidator(address,bool)"(
      _validator: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenAddresses(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenGovernance()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "totalTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    validateTokenAddress(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateTokenAddress(address)"(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validators(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "validators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToken(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changeGovernor(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeGovernor(address)"(
      _newGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changeTokenGovernance(
      _newTokenGovernance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeTokenGovernance(address)"(
      _newTokenGovernance: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    defaultFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "defaultFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTFactory(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNFTFactory(uint32,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isValidTokenId(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidTokenId(uint16)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    networkGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "networkGovernor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftFactories(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nftFactories(uint32,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pausedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pausedTokens(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publicPackRegisterNFTFactoryMsg(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "publicPackRegisterNFTFactoryMsg(uint32,address,address)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _factoryAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerNFTFactoryCreator(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerNFTFactoryCreator(uint32,address,bytes)"(
      _creatorAccountId: BigNumberish,
      _creatorAddress: string,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    requireActiveValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requireActiveValidator(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requireGovernor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requireGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDefaultNFTFactory(
      _factory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDefaultNFTFactory(address)"(
      _factory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTokenPaused(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTokenPaused(address,bool)"(
      _tokenAddr: string,
      _tokenPaused: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setValidator(
      _validator: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setValidator(address,bool)"(
      _validator: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenAddresses(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenGovernance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenIds(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalTokens()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    validateTokenAddress(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validateTokenAddress(address)"(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validators(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validators(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
