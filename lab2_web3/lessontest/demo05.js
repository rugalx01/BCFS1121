// then 的槽狀結構
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
    
    // 非同步處理 範例 stasrt
    // 取得transaction (非同步不等待)
    // secretNumber1.methods.
    //     setData(5567).
    //     send({ from: addresses[0] }).
    //     then(receipt => { console.log("收據是:=", receipt) });
    
    //這邊的 result 永遠都會因為上一動作是非同步抓取到前一次的數值
    // const result = await secretNumber1.methods.getData().call();
    // console.log("result=",result);
    // 非同步處理 範例 end

    // 非同步處理範例(槽狀程式結構) stasrt，但是程式會區分成很多層不易閱讀，但是能確保result一定是在完成之後才會取得正確的
    secretNumber1.methods.
        setData(5565).
        send({ from: addresses[0] }).
        then(receipt => {
            console.log("設值的收據=", receipt)
            secretNumber1.methods.getData().call().then(result=>{
                console.log("取值的結果=", result);
            });
        })
    // 非同步處理範例(槽狀程式結構) end
    
})().catch((e) => {
    console.log("Oops! Error", e)
 })

