const Web3 = require("web3");
// [truffle develop] use truffle 9545 to get blocknumber
const providerTruffle = new Web3.providers.HttpProvider("http://localhost:9545");
// [ganache]         use ganache 8545 to get blocknumber
const providerGanache = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
// [ganache-ui(run in tool)]         use ganache gui 7545 to get blocknumber
// can show message in ganache-ui log
const providerGanacheUi = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
// public provider in 6545 port, but need account can be use

// start to get the blocknumber
const web3 = new Web3(providerGanacheUi);
//此方式會因為非同的關係看不到內容
const result = web3.eth.getBlockNumber()
console.log(result)

// 正常作法才能取到數值
web3.eth.getBlockNumber().then(number=>console.log("取得block的number是", number))