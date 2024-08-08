# OpenBit

## Introduction

OpenBit is an industry-first cross-chain liquidity infrastructure for the Bitcoin ecosystem. It serves as a vital cross-chain DeFi infrastructure within the Bitcoin ecosystem. Specifically, for Bitcoin assets, where liquidity and usage beyond long-term holding are key challenges, OpenBit enables seamless bridging and swapping of diverse Bitcoin assets across chains. This facilitates their trading, investment, and integration into other ecosystems, thereby enhancing liquidity. For Bitcoin layer 2 solutions, OpenBit can bridge their assets across chains, further boosting liquidity. Additionally, for Bitcoin sidechains, Ethereum, and other chains, which lack association with the Bitcoin ecosystem and miss out on Bitcoin’s growth opportunities, OpenBit acts as a gateway, converting Bitcoin assets into compatible assets for their chains.

## Overview

- **Cross-chain Stable Swap**
  - Cross-chain exchange of stablecoins and various forms of tokenized Bitcoin, extending the low slippage, high efficiency trading mechanism of Curve to the Bitcoin ecosystem.
  
- **Cross-chain Concentrated Liquidity AMM**
  - Cross-chain AMM swap, including Concentrated Liquidity and Multiple Fee Tiers.
  
- **De-TEE Network**
  - The De-TEE network in our system functions as a universal cross-chain bridge. It securely generates and stores the private keys of the Bitcoin deposit address and private keys of the Bridge Contract, and it runs the key control program and transaction verification program within its enclave. The programs run inside the TEE are open-sourced and everyone can verify their runtime integrity against the remote attestation. Different from other TEE-based solutions, in our De-TEE network, each TEE node contains TEEs from multiple TEE hardware manufacturers, effectively avoiding the additional centralized trust assumption introduced by a single TEE vendor. Furthermore, we also introduce Active Validators to ensure the validity of external data feed in the TEE environment.

## User's Guidance

### Deposit

To earn rewards from OpenBit, you need to deposit your assets from Layer1 to OpenBit. Click connect wallet, select the wallet you want to connect and click confirm. Enter the amount when you can see your balance. If this is your first deposit on OpenBit, don’t forget to give us the permission to use your token. Click deposit and sign the transaction, your assets will be on OpenBit soon.

### Swap

When your balance is available on OpenBit, you can interact with any product. First is the stable swap. Stable swap on OpenBit allows you to trade BTC for other BTC pegged assets at a 1:1 ratio. In addition to stable swap, you can also make a limit order or take others' orders from the order market. Select the token, enter the amount, and set the expiration date. To take another order, you can search the order ID or filter the conditions to find your target order and click take to submit the transaction.

### Liquidity

To add liquidity on OpenBit, enter the amount that you want to add, choose add by proportional or custom add, and set your slippage. Click add to submit and sign this transaction. To remove liquidity, choose the percentage to remove or custom remove. With percentage to remove, OpenBit will calculate the receive amount, and with custom remove, you can remove by the amount that you entered. Click remove, sign the order, and success!

### Withdraw

To withdraw assets from OpenBit, click the deposit & withdraw button, choose the withdraw tab and select funds. There are 2 steps to withdraw your funds. First, withdraw your funds to pending balance; in this step, your funds will be withdrawn to the smart contract which was deployed by OpenBit. When you have funds available on your pending balance, you can click withdraw to wallet. If the pending balance is zero, you will not be able to withdraw it. Check the withdraw address, submit the order. 

OpenBit has more functions waiting to be launched, please stay tuned.

# Project Overview

This repository contains three core components of our system: `zksync-contract`, `zkbridge-contract`, and `ztoken-contract`. These contracts are essential for managing our Layer 2 (L2) operations, facilitating cross-chain transactions, and handling token equivalents on the OpenBit network.

## Table of Contents

- [zksync-contract](#zksync-contract)
- [zkbridge-contract](#zkbridge-contract)
- [ztoken-contract](#ztoken-contract)

## zksync-contract

The `zksync-contract` is the main contract for our Layer 2 (L2) operations. It maintains the state of all L2 users, providing the necessary infrastructure for efficient and secure L2 transactions.

### Features
- Records all user states on L2.
- Supports efficient and low-cost transactions.
- Ensures security and integrity of user data.

### Usage
Deploy the `zksync-contract` on your preferred blockchain network to enable L2 functionalities for your users.

### Code
You can find the source code [here](path_to_zksync_contract).

## zkbridge-contract

The `zkbridge-contract` is our bridge contract deployed on various chains. It facilitates the deposit of funds from users into the L2 environment.

### Features
- Acts as a bridge between different blockchain networks and our L2 solution.
- Manages user deposits securely and efficiently.
- Supports multiple blockchain networks.

### Usage
Deploy the `zkbridge-contract` on the respective blockchain networks to allow users to deposit funds into our L2 environment.

### Code
You can find the source code [here](path_to_zkbridge_contract).

## ztoken-contract

The `ztoken-contract` is used within the OpenBit network to represent equivalent tokens from different chains. These tokens circulate exclusively within the OpenBit network and do not leave it.

### Features
- Represents equivalent tokens from various chains.
- Circulates within the OpenBit network.
- Does not allow tokens to flow out of the OpenBit network.

### Usage
Deploy the `ztoken-contract` on the OpenBit network to manage and circulate equivalent tokens within the network.

### Code
You can find the source code [here](path_to_ztoken_contract).

