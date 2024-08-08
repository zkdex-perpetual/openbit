const { ethers } = require('ethers');

// 以私钥创建 Signer 对象
const privateKey = process.env.privateKey;
const signer = new ethers.Wallet(privateKey);

// 合约地址
const contractAddress = process.env.CONTRACTS_GOVERNANCE_ADDR;  // 替换成您的合约地址

// 合约方法签名
const methodSignature = 'setValidator(address,bool)';

// 合约 ABI 编码
const contractAbiCoder = new ethers.utils.AbiCoder();

const url=process.env.url

// 要设置的参数
const validatorAddress = process.env.VALIDATOR_ADDRESS;  // 替换成您要设置的验证者地址
const isActive = true;  // 替换成您要设置的活动状态，可以根据需求更改


async function sendTransaction() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(url);
        const wallet = new ethers.Wallet(privateKey, provider);

        const contract = new ethers.Contract(contractAddress, ['function setValidator(address,bool)'], wallet);

        // 使用不带返回类型的正确函数签名
        const tx = await contract['setValidator(address,bool)'](validatorAddress, isActive, { gasLimit: 2000000 });
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

// 调用 setValidator 方法
sendTransaction();
