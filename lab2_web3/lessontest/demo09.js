const Web3 = require("web3");
(async () => {
    console.log("demo8開始執行")
    const EtherTransfer = require("../build/contracts/EtherTransfer.json");
    const provider = new Web3.providers.HttpProvider("http://localhost:9545");
    const web3 = new Web3(provider);
    // 連接到鏈
    const id = await web3.eth.net.getId();
    const deployedNetwork = EtherTransfer.networks[id];
    console.log("address=", deployedNetwork.address)
    // 找到鏈上的部署好的合約
    const transfer1 = new web3.eth.Contract(EtherTransfer.abi,
        deployedNetwork.address)
    // 找到該鏈上的帳戶
    const addresses = await web3.eth.getAccounts();
    // 真的呼叫sendEther, 因為改了狀態
    const v3 = web3.utils.toWei('1','ether')
    console.log("要傳送的值是",v3)

    // 實際開始交易
    await web3.eth.sendTransaction({
        from: addresses[0],
        to:transfer1.options.address,
        value: v3
    })
    //這邊因為沒有直接呼叫到合約內的 sendEther 所以狀態會是透過 callback的function 來做改變
    const statusResult = await transfer1.methods.status().call();
    console.log("status result=",statusResult);

})().catch(e => {
    console.log("發生錯誤!!", e)
})