/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EIP1271 } from "./EIP1271";

export class EIP1271Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EIP1271> {
    return super.deploy(overrides || {}) as Promise<EIP1271>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EIP1271 {
    return super.attach(address) as EIP1271;
  }
  connect(signer: Signer): EIP1271Factory {
    return super.connect(signer) as EIP1271Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP1271 {
    return new Contract(address, _abi, signerOrProvider) as EIP1271;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061013e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631626ba7e14610030575b600080fd5b6100dd6004803603604081101561004657600080fd5b8135919081019060408101602082013564010000000081111561006857600080fd5b82018360208201111561007a57600080fd5b8035906020019184600183028401116401000000008311171561009c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506100fa945050505050565b604080516001600160e01b03199092168252519081900360200190f35b6320c13b0b60e01b9291505056fea26469706673582212203e2fa11a421e7fb1ba17b06748db7496a4250482addc62778d76684214c9136f64736f6c63430007060033";
