const { developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deploymentsconst
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChains.includes(netowrk.name)) {
        log("local network detected! Deploying mocks...")
        // deploy a mock vrf cordinator
    }
}
