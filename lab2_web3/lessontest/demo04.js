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
    const receipt = await secretNumber1.methods.setData(5566).send({from:addresses[0]});
    console.log("收據是:", receipt)
    
    const result = await secretNumber1.methods.getData().call();
    console.log("result=",result);
    
})().catch((e) => {
    console.log("Oops! Error", e)
 })

