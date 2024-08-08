import { Command } from 'commander';
import { BigNumber, Wallet, ethers } from 'ethers';
import { Deployer } from '../src.ts/deploy';
import * as fs from 'fs';
import * as path from 'path';
import { web3Provider } from './utils';

// const testConfigPath = path.join(process.env.ZKSYNC_HOME as string, `etc/test_config/constant`);
// const ethTestConfig = JSON.parse(fs.readFileSync(`${testConfigPath}/eth.json`, { encoding: 'utf-8' }));
const deployer = new Deployer({ deployWallet: ethers.Wallet.createRandom() });
const provider = web3Provider();

// const governorWallet = new Wallet("0xad2aa7e7465f7e84c456f041acc3a1945959dc312997208cb412f1a9a6b8bd71", provider); // 0x96ea21f1914985AF9C0586C673018e4d3C984e53
const governorWallet = new Wallet("0x5743c69afe6239e73225d587fe3282ff31d4e5d7a651b5d9a755202729351902", provider); // 0x608e696EfA2DE25615ed35BD015499C0878CbaEd

// const governorWallet = Wallet.fromMnemonic(
//     process.env.MNEMONIC ? process.env.MNEMONIC : ethTestConfig.mnemonic,
//     "m/44'/60'/0'/0/1"
// ).connect(provider);

async function governanceAddToken(address: string) {
    console.log('Adding new ERC20 token to network: ', address);

    const tx = await deployer
        .tokenGovernanceContract(governorWallet)
        .addToken(address, { gasLimit: BigNumber.from('1000000') });
    console.log('tx hash: ', tx.hash);
    const receipt = await tx.wait();

    if (receipt.status) {
        console.log('tx success');
    } else {
        throw new Error(`failed add token to the governance`);
    }
}

async function main() {
    const program = new Command();

    program.version('0.1.0').name('governance-add-erc20').description('add erc20 token to the governance');

    program
        .command('add <address>')
        .description('Adds a new token with a given address')
        .action(async (address: string) => {
            await governanceAddToken(address);
        });

    program
        .command('add-multi-current-network <network>')
        .description('Adds a multiple tokens for current network')
        .action(async (network: string) => {
            const tokens = JSON.parse(
                fs.readFileSync(`${process.env.ZKSYNC_HOME}/etc/tokens/${network}.json`, {
                    encoding: 'utf-8'
                })
            );

            for (const token of tokens) {
                await governanceAddToken(token.address);
            }
        });

    await program.parseAsync(process.argv);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Error:', err.message || err);
        process.exit(1);
    });
