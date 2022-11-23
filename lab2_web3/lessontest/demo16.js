const Web3 = require("web3");
const SecretNumber = require("../build/contracts/SecretNumber.json");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const address = "0xe65B5Fd93342A43ACeA7B00C29eBdaaa150A6b6d"; // public key
const privateKey = "791f139282c2ca57ed753e426b4bc4901a0477e072c6ea41bb102977a8a27c76"; // private key
const INFURA_LINK = "https://sepolia.infura.io/v3/27fb1e8df51b4adbb20293823c8869ec"; // wallet url (use sepolia)
const CONTRACT_ADDRESS = "0x3640292797C66c64d01c12C80457712C074d041D";

(async () => {
    const provider = new HDWalletProvider(privateKey, INFURA_LINK)
    const web3 = new Web3(provider)
    let secretNumber1 = new web3.eth.Contract(SecretNumber.abi,
        CONTRACT_ADDRESS)
    const result1 = await secretNumber1.methods.getData().call();
    console.log("第一次讀值是:", result1)
    const receipt = await secretNumber1.methods.setData(8765).send({from:address})
    console.log("收據回條是:", receipt)
    const result2 = await secretNumber1.methods.getData().call();
    console.log("第二次讀值是:", result2)

})().catch(e => console.log("oops", e))