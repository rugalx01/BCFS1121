// event 結構
// 這邊不會停止也會因為她會繼續監聽事件的發生
const Web3 = require("web3");

(async () => {

    //讀入 truffle 建立出來的 SecretNumber.json
    const SecretNumber = require("../build/contracts/SecretNumber.json");
    const provider = new Web3.providers.HttpProvider("http://localhost:9545");
    const web3 = new Web3(provider);
    // console.log("web3=", web3);
    const id = await web3.eth.net.getId();
    console.log("取得區塊鏈的id是", id);
    const deplyedNetwork = SecretNumber.networks[id];
    console.log("部署的位址是:", deplyedNetwork.address);

    const secretNumber1 = new web3.eth.Contract(
        SecretNumber.abi,
        deplyedNetwork.address
    )
    // 取得帳戶
    const addresses = await web3.eth.getAccounts();
    console.log("帳戶地址是:", addresses);
    // 取得transaction
    await secretNumber1.methods.
        setData(5566).
        send({ from: addresses[0] })
        .on("receipt", receipt => { console.log("取得收據", receipt) })
        // .on("confirmation", (number, receipt) => {
        .on("confirmation", (number) => {
            console.log("confirmation=", number)
            // console.log("receipt=", receipt)
            // console.log('the job is end force exit!!')
            // process.exit(1);
        })
        .on("error", (error, receipt) => {
            console.log("error as:", error)
        })


})().catch((e) => {
    console.log("Oops! Error", e)
})

