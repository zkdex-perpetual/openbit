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

interface DummyFirstInterface extends ethers.utils.Interface {
  functions: {
    "getDummyIndex()": FunctionFragment;
    "getNoticePeriod()": FunctionFragment;
    "initialize(bytes)": FunctionFragment;
    "isReadyForUpgrade()": FunctionFragment;
    "upgrade(bytes)": FunctionFragment;
    "upgradeCanceled()": FunctionFragment;
    "upgradeFinishes()": FunctionFragment;
    "upgradeNoticePeriodStarted()": FunctionFragment;
    "upgradePreparationStarted()": FunctionFragment;
    "verifyPriorityOperation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getDummyIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNoticePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReadyForUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "upgradeCanceled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeFinishes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeNoticePeriodStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradePreparationStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verifyPriorityOperation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getDummyIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNoticePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isReadyForUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeCanceled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeFinishes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeNoticePeriodStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradePreparationStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyPriorityOperation",
    data: BytesLike
  ): Result;

  events: {};
}

export class DummyFirst extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DummyFirstInterface;

  functions: {
    getDummyIndex(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getDummyIndex()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getNoticePeriod(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getNoticePeriod()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isReadyForUpgrade(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isReadyForUpgrade()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradeCanceled(overrides?: Overrides): Promise<ContractTransaction>;

    "upgradeCanceled()"(overrides?: Overrides): Promise<ContractTransaction>;

    upgradeFinishes(overrides?: Overrides): Promise<ContractTransaction>;

    "upgradeFinishes()"(overrides?: Overrides): Promise<ContractTransaction>;

    upgradeNoticePeriodStarted(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgradeNoticePeriodStarted()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradePreparationStarted(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgradePreparationStarted()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    verifyPriorityOperation(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "verifyPriorityOperation()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getDummyIndex(overrides?: CallOverrides): Promise<BigNumber>;

  "getDummyIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

  getNoticePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  "getNoticePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    initializationParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(bytes)"(
    initializationParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isReadyForUpgrade(overrides?: CallOverrides): Promise<boolean>;

  "isReadyForUpgrade()"(overrides?: CallOverrides): Promise<boolean>;

  upgrade(
    upgradeParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgrade(bytes)"(
    upgradeParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradeCanceled(overrides?: Overrides): Promise<ContractTransaction>;

  "upgradeCanceled()"(overrides?: Overrides): Promise<ContractTransaction>;

  upgradeFinishes(overrides?: Overrides): Promise<ContractTransaction>;

  "upgradeFinishes()"(overrides?: Overrides): Promise<ContractTransaction>;

  upgradeNoticePeriodStarted(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgradeNoticePeriodStarted()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradePreparationStarted(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgradePreparationStarted()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  verifyPriorityOperation(overrides?: Overrides): Promise<ContractTransaction>;

  "verifyPriorityOperation()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getDummyIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "getDummyIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNoticePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "getNoticePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isReadyForUpgrade(overrides?: CallOverrides): Promise<boolean>;

    "isReadyForUpgrade()"(overrides?: CallOverrides): Promise<boolean>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeCanceled(overrides?: CallOverrides): Promise<void>;

    "upgradeCanceled()"(overrides?: CallOverrides): Promise<void>;

    upgradeFinishes(overrides?: CallOverrides): Promise<void>;

    "upgradeFinishes()"(overrides?: CallOverrides): Promise<void>;

    upgradeNoticePeriodStarted(overrides?: CallOverrides): Promise<void>;

    "upgradeNoticePeriodStarted()"(overrides?: CallOverrides): Promise<void>;

    upgradePreparationStarted(overrides?: CallOverrides): Promise<void>;

    "upgradePreparationStarted()"(overrides?: CallOverrides): Promise<void>;

    verifyPriorityOperation(overrides?: CallOverrides): Promise<void>;

    "verifyPriorityOperation()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getDummyIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "getDummyIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNoticePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "getNoticePeriod()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(bytes)"(
      initializationParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isReadyForUpgrade(overrides?: CallOverrides): Promise<BigNumber>;

    "isReadyForUpgrade()"(overrides?: CallOverrides): Promise<BigNumber>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeCanceled(overrides?: Overrides): Promise<BigNumber>;

    "upgradeCanceled()"(overrides?: Overrides): Promise<BigNumber>;

    upgradeFinishes(overrides?: Overrides): Promise<BigNumber>;

    "upgradeFinishes()"(overrides?: Overrides): Promise<BigNumber>;

    upgradeNoticePeriodStarted(overrides?: Overrides): Promise<BigNumber>;

    "upgradeNoticePeriodStarted()"(overrides?: Overrides): Promise<BigNumber>;

    upgradePreparationStarted(overrides?: Overrides): Promise<BigNumber>;

    "upgradePreparationStarted()"(overrides?: Overrides): Promise<BigNumber>;

    verifyPriorityOperation(overrides?: Overrides): Promise<BigNumber>;

    "verifyPriorityOperation()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getDummyIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDummyIndex()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNoticePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNoticePeriod()"(
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

    isReadyForUpgrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isReadyForUpgrade()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradeCanceled(overrides?: Overrides): Promise<PopulatedTransaction>;

    "upgradeCanceled()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    upgradeFinishes(overrides?: Overrides): Promise<PopulatedTransaction>;

    "upgradeFinishes()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    upgradeNoticePeriodStarted(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgradeNoticePeriodStarted()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradePreparationStarted(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgradePreparationStarted()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    verifyPriorityOperation(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "verifyPriorityOperation()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
