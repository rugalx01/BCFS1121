const Web3 = require("web3");

(async () => {
    console.log("demo8開始執行")
    const EtherTransfer = require("../build/contracts/EtherTransfer.json");
    const provider = new Web3.providers.HttpProvider("http://localhost:9545");
    const web3 = new Web3(provider);
    // 連接到鏈
    //console.log(web3);
    const id = await web3.eth.net.getId();
    const deployedNetwork = EtherTransfer.networks[id];
    console.log("address=", deployedNetwork.address)
    // 找到鏈上的部署好的合約
    const transfer1 = new web3.eth.Contract(EtherTransfer.abi,
        deployedNetwork.address)
    //console.log("transfer1", transfer1)
    // 找到該鏈上的帳戶
    const addresses = await web3.eth.getAccounts();
    // 使用工具來進行數值的初始化 避免0太多敲錯，以下都是 1個 Ether
    const v1 = '1000000000000000000'
    const v2 = web3.utils.toBN(v1) // to big number
    const v3 = web3.utils.toWei('1','ether') // to wei [數值, 幣值代號]  幣別可參考 https://etherscan.io/unitconverter
    console.log(`v1 type=${typeof v1}, v2 type=${typeof v2} , v3 type=${typeof v3}`)
    // 真的呼叫sendEther, 因為改了狀態
    await transfer1.methods.sendEther().send({
        from: addresses[0],
        value: v3
    })
    // status是public的屬性, 所以可以直接call()
    console.log("status傳回是", await transfer1.methods.status().call())
})().catch(e => {
    console.log("發生錯誤!!", e)
})