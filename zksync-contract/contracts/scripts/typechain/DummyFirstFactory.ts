/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DummyFirst } from "./DummyFirst";

export class DummyFirstFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DummyFirst> {
    return super.deploy(overrides || {}) as Promise<DummyFirst>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyFirst {
    return super.attach(address) as DummyFirst;
  }
  connect(signer: Signer): DummyFirstFactory {
    return super.connect(signer) as DummyFirstFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyFirst {
    return new Contract(address, _abi, signerOrProvider) as DummyFirst;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getDummyIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getNoticePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initializationParameters",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isReadyForUpgrade",
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
        internalType: "bytes",
        name: "upgradeParameters",
        type: "bytes",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeCanceled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeFinishes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeNoticePeriodStarted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradePreparationStarted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyPriorityOperation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102bc806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806378b91e701161006657806378b91e7014610137578063871b8ff1146101375780638773334c146101af578063b269b9ae14610137578063ecbc2c3c146101cb5761009e565b80630f8d1dbe146100a357806325394645146100ad5780632a3174f41461011d5780633b154b7314610137578063439fab911461013f575b600080fd5b6100ab6101d3565b005b6100ab600480360360208110156100c357600080fd5b8101906020810181356401000000008111156100de57600080fd5b8201836020820111156100f057600080fd5b8035906020019184600183028401116401000000008311171561011257600080fd5b5090925090506101f9565b6101256101fd565b60408051918252519081900360200190f35b6100ab610202565b6100ab6004803603602081101561015557600080fd5b81019060208101813564010000000081111561017057600080fd5b82018360208201111561018257600080fd5b803590602001918460018302840111640100000000831117156101a457600080fd5b509092509050610204565b6101b7610244565b604080519115158252519081900360200190f35b610125610271565b6000805467ffffffffffffffff8082166001011667ffffffffffffffff19909116179055565b5050565b600490565b565b60008282600081811061021357fe5b919091013560f81c9150600090508383600181811061022e57fe5b600194909455509091013560f81c600255505050565b600061024e610271565b67ffffffffffffffff16610260610276565b67ffffffffffffffff161015905090565b600190565b60005467ffffffffffffffff169056fea26469706673582212202b3109737e0b5dc88efb20025a14c728c02ab8f3920c0732cda5e0d2a5750d7964736f6c63430007060033";
