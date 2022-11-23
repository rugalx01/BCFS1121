const EtherTransfer = artifacts.require("EtherTransfer")
module.exports = function(_deployer) {
  _deployer.deploy(EtherTransfer)
};