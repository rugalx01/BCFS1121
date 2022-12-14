import React, { useEffect,useState } from 'react'
import getMyWeb3 from '../getMyWeb3'
import SecretNumber from "../contracts/SecretNumber.json"

function Web3Info() {
    //const account = "Hi_My_account";
    const [account, setAccount] = useState("0x0");
    const [value, setValue] = useState(0);
    const [instance1, setInstance1] = useState(null);
    const [inputValue, setInputValue]=useState(1234);
    useEffect(()=>{ 
        const fetchWeb3 = async()=>{
            const web3 = await getMyWeb3();

            // 取得帳戶
            const accounts = await web3.eth.getAccounts();
            console.log("accounts=", accounts);
            setAccount(accounts);
            // 取得網路id [這會隨著連到不同的幣上面就會出現不同的id: Ether:0, goerli:5, sepolia:11155111]
            const networkId = await web3.eth.net.getId();
            // console.log("network id=",networkId);
            const deployedNetwork = SecretNumber.networks[networkId];
            // console.log("deployed network=", deployedNetwork);
            const instance1 = new web3.eth.Contract(
                SecretNumber.abi,
                deployedNetwork.address
            );
            setInstance1(instance1)
            // 直接交易
            // console.log(instance1);
            // const receipt = await instance1.methods.setData(2345).send({ from: accounts[0] })
            // console.log("receipt=", receipt)
            // 直接取得結果
            // const result = await instance1.methods.getData().call();
            // console.log("result=",result);
            // setValue(result)
        }
        fetchWeb3()
        console.log("web3的元件載入")
    })
    async function buttonClicked() {
        //透過按鈕取得結果
        console.log("按鈕按下了")
        const result = await instance1.methods.getData().call();
        console.log("result=", result);
        setValue(result)

    }
    async function saveDataToBlockChain() {
        //透過按鈕執行交易
        const receipt = await instance1.methods.setData(inputValue).send({ from: account[0] })
        console.log("receipt=", receipt)

    }
    const valueChangeHandler = event =>{
        setInputValue(event.target.value)
    }
    return (
        <div>
            <h1>Web3Info</h1>
            <p>連到的區塊鏈</p>
            <p>帳號是:{account}</p>
            <p>合約的值是{value}</p>
            <button onClick={buttonClicked}>從區塊鏈中取值</button>
            <br/>
            <input type="number" value={inputValue} onChange={valueChangeHandler}/>
            <button onClick={saveDataToBlockChain}>設值至區塊鏈</button>
        </div>
    )
}

export default Web3Info