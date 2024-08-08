/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RevertReceiveAccount } from "./RevertReceiveAccount";

export class RevertReceiveAccountFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RevertReceiveAccount> {
    return super.deploy(overrides || {}) as Promise<RevertReceiveAccount>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RevertReceiveAccount {
    return super.attach(address) as RevertReceiveAccount;
  }
  connect(signer: Signer): RevertReceiveAccountFactory {
    return super.connect(signer) as RevertReceiveAccountFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevertReceiveAccount {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RevertReceiveAccount;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "revertReceive",
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
        internalType: "bool",
        name: "newValue",
        type: "bool",
      },
    ],
    name: "setRevertReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506000805460ff1916905560e0806100296000396000f3fe60806040526004361060295760003560e01c8063607e2cb2146040578063aa4593dc14606857603b565b36603b5760005460ff1615603957fe5b005b600080fd5b348015604b57600080fd5b50603960048036036020811015606057600080fd5b50351515608e565b348015607357600080fd5b50607a60a1565b604080519115158252519081900360200190f35b6000805460ff1916911515919091179055565b60005460ff168156fea2646970667358221220a11fa432da525591209828285244a44b719f43989524e0ccb3af1cb51704123964736f6c63430007060033";
