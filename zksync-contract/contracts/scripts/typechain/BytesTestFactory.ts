/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BytesTest } from "./BytesTest";

export class BytesTestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BytesTest> {
    return super.deploy(overrides || {}) as Promise<BytesTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BytesTest {
    return super.attach(address) as BytesTest;
  }
  connect(signer: Signer): BytesTestFactory {
    return super.connect(signer) as BytesTestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BytesTest {
    return new Contract(address, _abi, signerOrProvider) as BytesTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_len",
        type: "uint256",
      },
    ],
    name: "read",
    outputs: [
      {
        internalType: "uint256",
        name: "newOffset",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "x",
        type: "uint24",
      },
    ],
    name: "testUInt24",
    outputs: [
      {
        internalType: "uint24",
        name: "r",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610416806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631c2768391461003b5780635b5ddb941461007c575b600080fd5b61005d6004803603602081101561005157600080fd5b503562ffffff16610171565b6040805162ffffff909316835260208301919091528051918290030190f35b6100f26004803603606081101561009257600080fd5b8101906020810181356401000000008111156100ad57600080fd5b8201836020820111156100bf57600080fd5b803590602001918460018302840111640100000000831117156100e157600080fd5b919350915080359060200135610196565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561013557818101518382015260200161011d565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b600080600061017f846101ea565b905061018c816000610202565b9590945092505050565b600060606101dd86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525088925087915061021b9050565b9150915094509492505050565b60606101fc8262ffffff166003610236565b92915050565b60038101600061021284846102d5565b90509250929050565b6000606061022a858585610323565b93909201949293505050565b606060208260ff161115610275576040805162461bcd60e51b81526020600482015260016024820152605160f81b604482015290519081900360640190fd5b8160ff1667ffffffffffffffff8111801561028f57600080fd5b506040519080825280601f01601f1916602001820160405280156102ba576020820181803683370190505b5060ff6008602094850302169390931b918301919091525090565b6000808260030190508084511015610318576040805162461bcd60e51b81526020600482015260016024820152605560f81b604482015290519081900360640190fd5b929092015192915050565b606081830184511015610361576040805162461bcd60e51b81526020600482015260016024820152602d60f91b604482015290519081900360640190fd5b60008267ffffffffffffffff8111801561037a57600080fd5b506040519080825280601f01601f1916602001820160405280156103a5576020820181803683370190505b50905082156103d857602081018381016020860187015b818310156103d45780518352602092830192016103bc565b5050505b94935050505056fea26469706673582212206ad0779ba1d65eefd724f1309f973347314f7de51c30045baea6a4c4788d8bc964736f6c63430007060033";
