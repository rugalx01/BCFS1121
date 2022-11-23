// extand from demo13, modify nofiyEvent to on
const Web3 = require("web3");
(async () => {
    const EventGenerate = require("../build/contracts/EventGenerate.json")
    //const provider = new Web3.providers.HttpProvider("http://localhost:9545")
    const provider = new Web3.providers.WebsocketProvider("http://localhost:9545")
    const web3 = new Web3(provider)
    const id = await web3.eth.net.getId()
    const deployedNetwork = EventGenerate.networks[id];
    const eventGeneragte1 = new web3.eth.Contract(EventGenerate.abi, deployedNetwork.address)
    //console.log(eventGeneragte1)

    const addresses = await web3.eth.getAccounts();
    eventGeneragte1.events.NotifyEvent({ fromBlock: 0 }).on("data", data => console.log("data是", data.returnValues))
    //監聽後再去觸發事件，也是會直接疊加在後面的 (驗證非同步與即時監聽的結果)
    //const receipt1 = await eventGeneragte1.methods.notifyThisEvent("Hi, demo14").send({ from: addresses[0] })
    //const receipt2 = await eventGeneragte1.methods.notifyThisEvent("Hi2, demo14").send({ from: addresses[0] })

    //使用定時執行取作驗證
    setTimeout(() => { 
        eventGeneragte1.methods.notifyThisEvent("Hi, demo14").send({ from: addresses[0] })
    }, 3000)
    setTimeout(() => {
        eventGeneragte1.methods.notifyThisEvent("Hi2, demo14").send({ from: addresses[0] })
     }, 7000)
    
})().catch(e => console.log("oops", e))