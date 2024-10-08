/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PendingBalanceWithdrawer } from "./PendingBalanceWithdrawer";

export class PendingBalanceWithdrawerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _zkSync: string,
    overrides?: Overrides
  ): Promise<PendingBalanceWithdrawer> {
    return super.deploy(
      _zkSync,
      overrides || {}
    ) as Promise<PendingBalanceWithdrawer>;
  }
  getDeployTransaction(
    _zkSync: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_zkSync, overrides || {});
  }
  attach(address: string): PendingBalanceWithdrawer {
    return super.attach(address) as PendingBalanceWithdrawer;
  }
  connect(signer: Signer): PendingBalanceWithdrawerFactory {
    return super.connect(signer) as PendingBalanceWithdrawerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PendingBalanceWithdrawer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PendingBalanceWithdrawer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_zkSync",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
        ],
        internalType: "struct PendingBalanceWithdrawer.RequestWithdrawFT[]",
        name: "_FTRequests",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
        ],
        internalType: "struct PendingBalanceWithdrawer.RequestWithdrawNFT[]",
        name: "_NFTRequests",
        type: "tuple[]",
      },
    ],
    name: "withdrawPendingBalances",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161042538038061042583398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c610392610093600039806052528061014452506103926000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637dfdb17814610030575b600080fd5b61004361003e366004610224565b610045565b005b60005b83811015610136577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d514da5086868481811061008b57fe5b905060600201604001358787858181106100a157fe5b6100b79260206060909202019081019150610201565b8888868181106100c357fe5b90506060020160200160208101906100db9190610201565b6001600160801b036040518563ffffffff1660e01b815260040161010193929190610307565b600060405180830381600088803b15801561011b57600080fd5b5087f19350505050801561012d575060015b50600101610048565b5060005b818110156101fa577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663505a757384848481811061017d57fe5b9050604002016020013585858581811061019357fe5b6101a992602060409092020190810191506102e3565b6040518363ffffffff1660e01b81526004016101c59190610333565b600060405180830381600088803b1580156101df57600080fd5b5087f1935050505080156101f1575060015b5060010161013a565b5050505050565b600060208284031215610212578081fd5b813561021d81610344565b9392505050565b60008060008060408587031215610239578283fd5b843567ffffffffffffffff80821115610250578485fd5b818701915087601f830112610263578485fd5b813581811115610271578586fd5b886020606083028501011115610285578586fd5b60209283019650945090860135908082111561029f578384fd5b818701915087601f8301126102b2578384fd5b8135818111156102c0578485fd5b8860206040830285010111156102d4578485fd5b95989497505060200194505050565b6000602082840312156102f4578081fd5b813563ffffffff8116811461021d578182fd5b6001600160a01b0393841681529190921660208201526001600160801b03909116604082015260600190565b63ffffffff91909116815260200190565b6001600160a01b038116811461035957600080fd5b5056fea2646970667358221220b79e1d87a374fd001cc171ecc4ab2e6d89a51b7399bf5eaa46d56be04c744e5864736f6c63430007060033";
