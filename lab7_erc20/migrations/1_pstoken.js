const PSToken = artifacts.require("PSToken");
module.exports = async function(deployer) {
    deployer.deploy(PSToken);
}
