// notifyEvent only on the websocket
// 啟動之後會及時監聽，只要有新的事件發生的時候都會馬上顯示出來
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
    const addreses = await web3.eth.getAccounts();
    eventGeneragte1.events.NotifyEvent({ fromBlock: 0 }, function (error, event) {
        //console.log("error", error)
        console.log("event:", event.blockNumber, "\nid:", event.id, "\nvalues:", event.returnValues)
    })
})().catch(e => console.log("oops", e))