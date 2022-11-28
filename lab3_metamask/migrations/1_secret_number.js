const SecretNumber = artifacts.require("SecretNumber");
module.exports = function(_deployer) {
  _deployer.deploy(SecretNumber);
};