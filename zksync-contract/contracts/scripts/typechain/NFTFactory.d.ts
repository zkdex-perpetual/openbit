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

interface NFTFactoryInterface extends ethers.utils.Interface {
  functions: {
    "mintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mintNFTFromZkSync",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "mintNFTFromZkSync",
    data: BytesLike
  ): Result;

  events: {
    "MintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MintNFTFromZkSync"): EventFragment;
}

export class NFTFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NFTFactoryInterface;

  functions: {
    mintNFTFromZkSync(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)"(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  mintNFTFromZkSync(
    creator: string,
    recipient: string,
    creatorAccountId: BigNumberish,
    serialId: BigNumberish,
    contentHash: BytesLike,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)"(
    creator: string,
    recipient: string,
    creatorAccountId: BigNumberish,
    serialId: BigNumberish,
    contentHash: BytesLike,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    mintNFTFromZkSync(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)"(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    MintNFTFromZkSync(
      creator: string | null,
      recipient: string | null,
      creatorAccountId: null,
      serialId: null,
      contentHash: null,
      tokenId: null
    ): EventFilter;
  };

  estimateGas: {
    mintNFTFromZkSync(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)"(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mintNFTFromZkSync(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintNFTFromZkSync(address,address,uint32,uint32,bytes32,uint256)"(
      creator: string,
      recipient: string,
      creatorAccountId: BigNumberish,
      serialId: BigNumberish,
      contentHash: BytesLike,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
