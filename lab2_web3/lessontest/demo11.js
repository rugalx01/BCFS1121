const Web3 = require("web3");
(async () => {
    const EventGenerate = require("../build/contracts/EventGenerate.json")
    const provider = new Web3.providers.HttpProvider("http://localhost:9545")
    const web3 = new Web3(provider)
    const id = await web3.eth.net.getId();
    const deployedNetwork = EventGenerate.networks[id];
    const eventGenerate1 = new web3.eth.Contract(EventGenerate.abi, deployedNetwork.address)
    //console.log("EventGenerate instance=", eventGenerate1)
    console.log("address=",deployedNetwork.address)
    const addresses = await web3.eth.getAccounts();
    const receipt = await eventGenerate1.methods.notifyThisEvent("HAHA")
        .send({ from: addresses[0] })
    console.log("目前的block number是", receipt.blockNumber)
    //回推最後5筆 (如果查詢的 blockNumber 大於目前交易次數只會查到空字串)
    const result = await eventGenerate1.getPastEvents("NotifyEvent", { fromBlock: receipt.blockNumber-5 })
    console.log("一次取得多筆一點的event", result)

})().catch(e => { console.log("oops, error=", e) })