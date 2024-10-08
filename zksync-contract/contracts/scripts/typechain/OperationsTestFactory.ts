/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OperationsTest } from "./OperationsTest";

export class OperationsTestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OperationsTest> {
    return super.deploy(overrides || {}) as Promise<OperationsTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OperationsTest {
    return super.attach(address) as OperationsTest;
  }
  connect(signer: Signer): OperationsTestFactory {
    return super.connect(signer) as OperationsTestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OperationsTest {
    return new Contract(address, _abi, signerOrProvider) as OperationsTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "accountId",
            type: "uint32",
          },
          {
            internalType: "bytes20",
            name: "pubKeyHash",
            type: "bytes20",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
        ],
        internalType: "struct Operations.ChangePubKey",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_pubdata",
        type: "bytes",
      },
    ],
    name: "testChangePubkeyPubdata",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "accountId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "chainId",
            type: "uint32",
          },
        ],
        internalType: "struct Operations.Deposit",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_priorityQueueData",
        type: "bytes",
      },
    ],
    name: "testDepositPriorityQueue",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "accountId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "chainId",
            type: "uint32",
          },
        ],
        internalType: "struct Operations.Deposit",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_pubdata",
        type: "bytes",
      },
    ],
    name: "testDepositPubdata",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
        ],
        internalType: "struct Operations.ForcedExit",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_pubdata",
        type: "bytes",
      },
    ],
    name: "testForcedExitPubdata",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "accountId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "nftCreatorAccountId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "nftCreatorAddress",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "nftSerialId",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "nftContentHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Operations.FullExit",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_priorityQueueData",
        type: "bytes",
      },
    ],
    name: "testFullExitPriorityQueue",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "accountId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "uint32",
            name: "nftCreatorAccountId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "nftCreatorAddress",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "nftSerialId",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "nftContentHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Operations.FullExit",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_pubdata",
        type: "bytes",
      },
    ],
    name: "testFullExitPubdata",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "chainId",
            type: "uint32",
          },
        ],
        internalType: "struct Operations.PartialExit",
        name: "_example",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_pubdata",
        type: "bytes",
      },
    ],
    name: "testWithdrawPubdata",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110a2806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80632d691a811161005b5780632d691a81146100bd5780633d22416b146100d0578063a471bd7f146100e3578063b06f35a2146100f65761007d565b80631fe2de2314610082578063250ef7c71461009757806327027b27146100aa575b600080fd5b610095610090366004610bb7565b610109565b005b6100956100a5366004610af8565b610151565b6100956100b8366004610ce3565b61023b565b6100956100cb366004610c5e565b610319565b6100956100de366004610bb7565b6103c3565b6100956100f1366004610ce3565b610475565b610095610104366004610dc8565b610480565b6000610114836104c6565b9050818051906020012081805190602001201461014c5760405162461bcd60e51b815260040161014390610f88565b60405180910390fd5b505050565b600061015c82610508565b8051845191925063ffffffff91821691161461018a5760405162461bcd60e51b815260040161014390610f4e565b80602001516bffffffffffffffffffffffff191683602001516bffffffffffffffffffffffff1916146101cf5760405162461bcd60e51b815260040161014390610fc2565b80604001516001600160a01b031683604001516001600160a01b0316146102085760405162461bcd60e51b815260040161014390610fa5565b806060015163ffffffff16836060015163ffffffff161461014c5760405162461bcd60e51b815260040161014390610f6b565b600061024682610578565b8051845191925063ffffffff9182169116146102745760405162461bcd60e51b815260040161014390610f4e565b80602001516001600160a01b031683602001516001600160a01b0316146102ad5760405162461bcd60e51b815260040161014390610fa5565b806040015163ffffffff16836040015163ffffffff16146102e05760405162461bcd60e51b81526004016101439061104f565b80606001516001600160801b031683606001516001600160801b03161461014c5760405162461bcd60e51b815260040161014390611017565b600061032482610660565b905080604001516001600160a01b031683604001516001600160a01b03161461035f5760405162461bcd60e51b815260040161014390610ffa565b8051835163ffffffff90811691161461038a5760405162461bcd60e51b81526004016101439061104f565b80602001516001600160801b031683602001516001600160801b03161461014c5760405162461bcd60e51b815260040161014390611017565b60006103ce826106bb565b9050806020015163ffffffff16836020015163ffffffff16146104035760405162461bcd60e51b81526004016101439061104f565b80604001516001600160801b031683604001516001600160801b03161461043c5760405162461bcd60e51b815260040161014390611017565b80606001516001600160a01b031683606001516001600160a01b03161461014c5760405162461bcd60e51b815260040161014390610fa5565b60006101148361075b565b600061048b82610786565b905080604001516001600160a01b031683604001516001600160a01b03161461035f5760405162461bcd60e51b815260040161014390610fa5565b606060016020808401516040808601516060870151608088015192516104f29695600095949101610e55565b6040516020818303038152906040529050919050565b610510610983565b600161051c83826107cb565b63ffffffff168352905061053083826107e4565b6001600160601b0319166020840152905061054b83826107f4565b6001600160a01b03166040840152905061056583826107cb565b63ffffffff166060840152509092915050565b6105806109aa565b600161058c83826107cb565b63ffffffff16835290506105a083826107f4565b6001600160a01b0316602084015290506105ba83826107cb565b63ffffffff16604084015290506105d18382610804565b6001600160801b0316606084015290506105eb83826107cb565b63ffffffff166080840152905061060283826107f4565b6001600160a01b031660a0840152905061061c83826107cb565b63ffffffff1660c084015290506106338382610814565b60e084015290506069811461065a5760405162461bcd60e51b815260040161014390611034565b50919050565b6106686109ee565b600961067483826107cb565b63ffffffff16835290506106888382610804565b6001600160801b0316602084015260020190506106a583826107f4565b6001600160a01b03166040840152509092915050565b6106c3610a0e565b60016106cf83826107cb565b63ffffffff16835290506106e383826107cb565b63ffffffff16602084015290506106fa8382610804565b6001600160801b03166040840152905061071483826107f4565b6001600160a01b03166060840152905061072e83826107cb565b63ffffffff16608084015290506031811461065a5760405162461bcd60e51b815260040161014390610fdf565b60606006825160208085015160408087015190516104f2959493600091829182918291829101610eb9565b61078e610983565b600561079a83826107cb565b63ffffffff16835290506107ae8382610804565b6001600160801b03166020840152600201905061054b83826107f4565b6004810160006107db8484610824565b90509250929050565b6014810160006107db8484610872565b6014810160006107db84846108ba565b6010810160006107db84846108fd565b6020810160006107db8484610940565b6000808260040190508084511015610867576040805162461bcd60e51b81526020600482015260016024820152602b60f91b604482015290519081900360640190fd5b929092015192915050565b600081601401835110156108b1576040805162461bcd60e51b81526020600482015260016024820152605360f81b604482015290519081900360640190fd5b50016020015190565b6000808260140190508084511015610867576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b6000808260100190508084511015610867576040805162461bcd60e51b81526020600482015260016024820152605760f81b604482015290519081900360640190fd5b6000808260200190508084511015610867576040805162461bcd60e51b81526020600482015260016024820152605960f81b604482015290519081900360640190fd5b60408051608081018252600080825260208201819052918101829052606081019190915290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b604080516060810182526000808252602082018190529181019190915290565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b80356001600160a01b0381168114610a5357600080fd5b919050565b600082601f830112610a68578081fd5b813567ffffffffffffffff80821115610a7d57fe5b604051601f8301601f191681016020018281118282101715610a9b57fe5b604052828152848301602001861015610ab2578384fd5b82602086016020830137918201602001929092529392505050565b80356001600160801b0381168114610a5357600080fd5b803563ffffffff81168114610a5357600080fd5b60008082840360a0811215610b0b578283fd5b6080811215610b18578283fd5b506040516080810167ffffffffffffffff8282108183111715610b3757fe5b81604052610b4486610ae4565b8352602086013591506001600160601b031982168214610b62578485fd5b816020840152610b7460408701610a3c565b6040840152610b8560608701610ae4565b606084015291935060808501359180831115610b9f578384fd5b5050610bad85828601610a58565b9150509250929050565b60008082840360c0811215610bca578283fd5b60a0811215610bd7578283fd5b5060405160a0810167ffffffffffffffff8282108183111715610bf657fe5b81604052610c0386610ae4565b8352610c1160208701610ae4565b6020840152610c2260408701610acd565b6040840152610c3360608701610a3c565b6060840152610c4460808701610ae4565b608084015291935060a08501359180831115610b9f578384fd5b6000808284036080811215610c71578283fd5b6060811215610c7e578283fd5b506040516060810167ffffffffffffffff8282108183111715610c9d57fe5b81604052610caa86610ae4565b8352610cb860208701610acd565b6020840152610cc960408701610a3c565b604084015291935060608501359180831115610b9f578384fd5b600080828403610120811215610cf7578283fd5b61010080821215610d06578384fd5b604051915080820167ffffffffffffffff8382108183111715610d2557fe5b81604052610d3287610ae4565b8452610d4060208801610a3c565b6020850152610d5160408801610ae4565b6040850152610d6260608801610acd565b6060850152610d7360808801610ae4565b6080850152610d8460a08801610a3c565b60a0850152610d9560c08801610ae4565b60c085015260e087013560e085015283955082870135935080841115610db9578485fd5b505050610bad85828601610a58565b60008082840360a0811215610ddb578283fd5b6080811215610de8578283fd5b506040516080810167ffffffffffffffff8282108183111715610e0757fe5b81604052610e1486610ae4565b8352610e2260208701610acd565b6020840152610b7460408701610a3c565b60601b6001600160601b0319169052565b60e01b6001600160e01b0319169052565b60f89690961b6001600160f81b03191686526001600160e01b0319948516600187015260e093841b8516600587015260809290921b6001600160801b031916600986015260601b6001600160601b0319166019850152901b16602d82015260310190565b6001600160f81b031960f88b901b1681526001600160e01b031960e08a811b821660018401526001600160601b031960608b901b16600584015288811b821660198401526001600160801b0319608089901b16601d84015286901b16602d8201526000610f296031830186610e33565b610f366045830185610e44565b50604981019190915260690198975050505050505050565b60208082526003908201526261636360e81b604082015260600190565b6020808252600390820152626e6e6360e81b604082015260600190565b6020808252600390820152621c1c5960ea1b604082015260600190565b60208082526003908201526237bbb760e91b604082015260600190565b6020808252600390820152620e0d6d60eb1b604082015260600190565b6020808252600190820152602760f91b604082015260600190565b60208082526003908201526274726760e81b604082015260600190565b60208082526003908201526230b6b760e91b604082015260600190565b6020808252600190820152604f60f81b604082015260600190565b602080825260039082015262746f6b60e81b60408201526060019056fea26469706673582212202712f1e773498305ecb3b15340d1d8072d936a325e69940b108540645fbbb22364736f6c63430007060033";
