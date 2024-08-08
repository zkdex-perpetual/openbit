const { ethers } = require('ethers');

// 你的私钥
//const privateKey = '492b635448ed62fadff561360405b2bece991f90c2983b3d8ac2deb07e81678f';

// 以私钥创建 Signer 对象
const privateKey = process.env.privateKey
const signer = new ethers.Wallet(privateKey);

// 合约地址
//const contractAddress = '0x7d4D58d0B2CE87a7CE734bA69Fd1c81283FB6570';



const contractAddress = process.env.CONTRACTS_LISTING_GOVERNANCE
//const contractAddress = '0x7d4D58d0B2CE87a7CE734bA69Fd1c81283FB6570';

const url=process.env.url

// 合约方法签名
const methodSignature = 'addToken(address)';

// 合约 ABI 编码
const contractAbiCoder = new ethers.utils.AbiCoder();
//const tokenAddressToAdd = '0x32710dbf10cd1c75ffaea371b28fd07b32f037d5';  // 替换成你要添加的 ERC20 代币地址

const tokenAddressToAdd = process.env.token;
console.log(tokenAddressToAdd);


async function sendTransaction() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(url); // 用您的以太坊节点URL替换
        const wallet = new ethers.Wallet(privateKey, provider);

        const contract = new ethers.Contract(contractAddress, ['function addToken(address)'], wallet);

        // 使用不带返回类型的正确函数签名
        const tx = await contract['addToken(address)'](tokenAddressToAdd, { gasLimit: 6000000 });
        const receipt = await tx.wait();

        if (receipt.status === 0) {
            console.error('交易失败。日志:', receipt.logs);
        } else {
            console.log('交易成功。收据:', receipt);
        }
    } catch (error) {
        console.error('发送交易时出错:', error.message);
        console.error(error);
    }
}

// 调用 addToken 方法
sendTransaction();
