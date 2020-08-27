const IpfsHashContract = artifacts.require("ipfsHashContract");

module.exports = function(deployer) {
  deployer.deploy(IpfsHashContract);
}