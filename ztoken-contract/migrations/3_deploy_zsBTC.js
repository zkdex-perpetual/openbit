var ZkBtcToken = artifacts.require('./ZkBtcToken.sol');

module.exports = async (deployer) => {
  // minter
  await deployer.deploy(ZkBtcToken,"ZkOperator addr","name", "symbol", decimal);
};
