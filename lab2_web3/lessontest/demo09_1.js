// 帳戶對帳戶之間的互傳
const Web3 = require("web3");
(async () => {
    console.log("demo8開始執行")
    const EtherTransfer = require("../build/contracts/EtherTransfer.json");
    const provider = new Web3.providers.HttpProvider("http://localhost:9545");
    const web3 = new Web3(provider);
    const addresses = await web3.eth.getAccounts();
    // 真的呼叫sendEther, 因為改了狀態
    const v3 = web3.utils.toWei('10', 'ether')
    console.log("要傳送的值是", v3)
    await web3.eth.sendTransaction({
        from: addresses[1],
        to: addresses[0],
        value: v3
    })

})().catch(e => {
    console.log("發生錯誤!!", e)
})