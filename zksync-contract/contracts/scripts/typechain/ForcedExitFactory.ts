/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ForcedExit } from "./ForcedExit";

export class ForcedExitFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _master: string,
    _receiver: string,
    overrides?: Overrides
  ): Promise<ForcedExit> {
    return super.deploy(
      _master,
      _receiver,
      overrides || {}
    ) as Promise<ForcedExit>;
  }
  getDeployTransaction(
    _master: string,
    _receiver: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_master, _receiver, overrides || {});
  }
  attach(address: string): ForcedExit {
    return super.attach(address) as ForcedExit;
  }
  connect(signer: Signer): ForcedExitFactory {
    return super.connect(signer) as ForcedExitFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForcedExit {
    return new Contract(address, _abi, signerOrProvider) as ForcedExit;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_master",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "FundsReceived",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "enabled",
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
    inputs: [],
    name: "getMaster",
    outputs: [
      {
        internalType: "address",
        name: "master",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
    outputs: [
      {
        internalType: "address payable",
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
        internalType: "address payable",
        name: "_newReceiver",
        type: "address",
      },
    ],
    name: "setReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newMaster",
        type: "address",
      },
    ],
    name: "transferMastership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawPendingFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff60a01b1916600160a01b17905534801561002357600080fd5b506040516106713803806106718339810160408190526100429161011e565b8161004c8161007b565b5061005561009f565b600080546001600160a01b0319166001600160a01b039290921691909117905550610150565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b7f8e94fed44239eb2314ab7a406345e6c5a8f0ccedf3b600de3d004e672c33abf48054600190915580156100ff576040805162461bcd60e51b815260206004820152600260248201526118a160f11b604482015290519081900360640190fd5b50565b80516001600160a01b038116811461011957600080fd5b919050565b60008060408385031215610130578182fd5b61013983610102565b915061014760208401610102565b90509250929050565b6105128061015f6000396000f3fe6080604052600436106100555760003560e01c8063238dafe01461008e5780635a99719e146100b9578063718da7ee146100db5780637be9c682146100fd578063c3f596871461011d578063f7260d3e1461013d575b7fbcdc7071c1beb6dcf2744621e0b29a2f2432ee20812d9ca5e3d5e8f9308d93a33460405161008491906104be565b60405180910390a1005b34801561009a57600080fd5b506100a3610152565b6040516100b0919061041a565b60405180910390f35b3480156100c557600080fd5b506100ce610162565b6040516100b09190610406565b3480156100e757600080fd5b506100fb6100f63660046103e0565b610187565b005b34801561010957600080fd5b506100fb6101183660046103e0565b6101b2565b34801561012957600080fd5b506100fb6101383660046103e0565b610306565b34801561014957600080fd5b506100ce61035b565b600054600160a01b900460ff1681565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6101903361036a565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b7f8e94fed44239eb2314ab7a406345e6c5a8f0ccedf3b600de3d004e672c33abf454600181146101e157600080fd5b60027f8e94fed44239eb2314ab7a406345e6c5a8f0ccedf3b600de3d004e672c33abf4556000546001600160a01b03163314806102365750610221610162565b6001600160a01b0316336001600160a01b0316145b61025b5760405162461bcd60e51b815260040161025290610425565b60405180910390fd5b60004790506000836001600160a01b03168260405161027990610403565b60006040518083038185875af1925050503d80600081146102b6576040519150601f19603f3d011682016040523d82523d6000602084013e6102bb565b606091505b50509050806102dc5760405162461bcd60e51b815260040161025290610491565b505060017f8e94fed44239eb2314ab7a406345e6c5a8f0ccedf3b600de3d004e672c33abf4555050565b61030f3361036a565b6001600160a01b03811661034f576040805162461bcd60e51b81526020600482015260026024820152610c5960f21b604482015290519081900360640190fd5b610358816103bc565b50565b6000546001600160a01b031681565b610372610162565b6001600160a01b0316816001600160a01b031614610358576040805162461bcd60e51b8152602060048201526002602482015261316360f01b604482015290519081900360640190fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6000602082840312156103f1578081fd5b81356103fc816104c7565b9392505050565b90565b6001600160a01b0391909116815260200190565b901515815260200190565b60208082526046908201527f4f6e6c7920746865207265636569766572206f72206d61737465722063616e2060408201527f77697468647261772066756e64732066726f6d2074686520736d61727420636f6060820152651b9d1c9858dd60d21b608082015260a00190565b602080825260139082015272115512081dda5d1a191c985dc819985a5b1959606a1b604082015260600190565b90815260200190565b6001600160a01b038116811461035857600080fdfea2646970667358221220a4ea2b0c37765212abad14e391bad9870938d8628ecf6efd38670e5ddfc738de64736f6c63430007060033";
