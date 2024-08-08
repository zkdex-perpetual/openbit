var poly = artifacts.require('./Poly.sol');

module.exports = async (deployer) => {
  // minter
  await deployer.deploy(poly);
};
