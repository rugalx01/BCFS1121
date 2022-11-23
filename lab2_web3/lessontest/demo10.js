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
    //console.log(receipt.events)
    // console.log(receipt.events.NotifyEvent)
    console.log(receipt.events.NotifyEvent.returnValues)

})().catch(e => { console.log("oops, error=", e) })