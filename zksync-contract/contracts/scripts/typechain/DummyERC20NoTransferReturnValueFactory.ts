/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DummyERC20NoTransferReturnValue } from "./DummyERC20NoTransferReturnValue";

export class DummyERC20NoTransferReturnValueFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DummyERC20NoTransferReturnValue> {
    return super.deploy(
      overrides || {}
    ) as Promise<DummyERC20NoTransferReturnValue>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyERC20NoTransferReturnValue {
    return super.attach(address) as DummyERC20NoTransferReturnValue;
  }
  connect(signer: Signer): DummyERC20NoTransferReturnValueFactory {
    return super.connect(signer) as DummyERC20NoTransferReturnValueFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyERC20NoTransferReturnValue {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DummyERC20NoTransferReturnValue;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060928061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a9059cbb14602d575b600080fd5b605660048036036040811015604157600080fd5b506001600160a01b0381351690602001356058565b005b505056fea26469706673582212207604083f821044156d769fe7069184286aa28f83edd70785b2a972dca660cb0164736f6c63430007060033";
