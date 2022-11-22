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
    secretNumber1.methods.setData(55664).send({ from: addresses[0] }, (error, hash) => {
        console.log("error code是:", error)
        console.log("hash是:", hash)
        secretNumber1.methods.getData().call((error, result) => {
            console.log("透過callback函數的值是:", result)
        })
    });
    
})().catch((e) => {
    console.log("Oops! Error", e)
 })

