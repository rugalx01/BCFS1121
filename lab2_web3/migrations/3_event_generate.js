const EventGenerate = artifacts.require("EventGenerate")
module.exports = function (_deployer) {
  _deployer.deploy(EventGenerate)
};