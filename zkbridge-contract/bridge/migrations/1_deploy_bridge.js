var bridge = artifacts.require('./Bridge.sol');

module.exports = async (deployer) => {
  // minter
  await deployer.deploy(bridge);
};
