import { ArgumentParser } from 'argparse';
import { Wallet } from 'ethers';
import { Deployer } from '../src.ts/deploy';
import { formatUnits, parseUnits } from 'ethers/lib/utils';
import * as fs from 'fs';
import * as path from 'path';
import { web3Provider } from './utils';
const { ethers } = require('ethers');

const provider = web3Provider();

async function main() {
    const parser = new ArgumentParser({
        version: '0.1.0',
        addHelp: true,
        description: 'Deploy contracts and publish them on Etherscan'
    });
    parser.addArgument('--deployerPrivateKey', { required: false, help: 'Wallet used to deploy contracts.' });
    parser.addArgument('--governor', { required: false, help: 'governor address' });

    parser.addArgument('--contract', {
        required: false,
        help: 'Contract name: Governance, ZkSync, Verifier or all by default.'
    });
    parser.addArgument('--gasPrice', { required: false, help: 'Gas price in GWei.' });
    parser.addArgument('--nonce', { required: false, help: 'nonce (requires --contract argument)' });
    const args = parser.parseArgs(process.argv.slice(2));

//     const wallet = args.deployerPrivateKey
//         ? new Wallet(args.deployerPrivateKey, provider)
//         : Wallet.fromMnemonic(
//               process.env.MNEMONIC ? process.env.MNEMONIC : ethTestConfig.mnemonic,
//               "m/44'/60'/0'/0/1"
//           ).connect(provider);

     const wallet = new Wallet("private_key",provider)
         console.log('Wallet address:', wallet.address);

//    const gasPrice =parseUnits('24', 'gwei');
//     const gasPrice = args.gasPrice ? parseUnits(args.gasPrice, 'gwei') : await provider.getGasPrice();
      let num=12;
    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);


//     console.log(`Using gas price: ${formatUnits(gasPrice, 'gwei')} gwei`);

    if (args.nonce) {
        if (args.contract == null) {
            console.error('Nonce should be specified with --contract argument');
            process.exit(1);
        }
        console.log(`Using nonce: ${args.nonce}`);
        args.nonce = parseInt(args.nonce);
    }

    const governorAddress = args.governor ? args.governor : wallet.address;
    console.log(`Deploying for governor: ${governorAddress}`);

    const deployer = new Deployer({ deployWallet: wallet, governorAddress, verbose: true });

    // We don't deploy it by default, since
    // the address of it wouldn't be able to be inserted into the solpp
    // for ZkSync smart contract

//     if (args.contract === 'TIA' || args.contract == null) {
//         await deployer.deployTIA({ gasPrice, nonce: args.nonce });
//     }

    if (args.contract === 'RegenesisMultisig') {
        await deployer.deployRegenesisMultisig({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'Create2Factory' || args.contract == null) {
        await deployer.deployCreate2Factory({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'AdditionalZkSync' || args.contract == null) {
        await deployer.deployAdditionalZkSync({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'ZkSync' || args.contract == null) {
        await deployer.deployZkSyncTarget({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'Verifier' || args.contract == null) {
        await deployer.deployVerifierTarget({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'Governance' || args.contract == null) {
        await deployer.deployGovernanceTarget({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'Proxies' || args.contract == null) {
        await deployer.deployProxiesAndGatekeeper({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'TokenGovernance' || args.contract == null) {
        await deployer.deployTokenGovernance({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'ZkSyncNFTFactory' || args.contract == null) {
        await deployer.deployNFTFactory({ gasPrice, nonce: args.nonce });
    }

    let gasPrice = await provider.getGasPrice();
    gasPrice = ethers.BigNumber.from(gasPrice);
    gasPrice = gasPrice.mul(num).div(10);

    if (args.contract === 'ForcedExit' || args.contract == null) {
        await deployer.deployForcedExit({ gasPrice, nonce: args.nonce });
    }
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Error:', err.message || err);
        process.exit(1);
    });
