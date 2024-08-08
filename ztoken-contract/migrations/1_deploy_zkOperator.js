var ZkBtcToken = artifacts.require('./ZkBtcToken.sol');
var ZkOperator = artifacts.require('./ZkOperator.sol');

module.exports = async (deployer) => {
  // minter,地址为zksync地址
  await deployer.deploy(ZkOperator,"0xf40EbC2724af3cbD9B83Bc96D718Cd0723bA8077");
};
