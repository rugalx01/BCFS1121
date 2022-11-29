import React, { Component } from 'react'
import Web3 from "web3";
import GMR from "../sol/GMR.json"

export default class Web3Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: "0x0000000000000",
            balance: 0,
            contractAddress: "0x0",
            managerAddress: "0x0"
        }
    }
    async componentDidMount() {
        await this.loadInfo();
        await this.loadContract();
    }
    async loadContract() {
        console.log(this.web3)
        const netId =  await this.web3.eth.net.getId();
        const s1 = new this.web3.eth.Contract(
            GMR.abi,
            GMR.networks[netId].address
        )
        
        this.setState({contractAddress:s1._address})
        const manager_address = await s1.methods.manager().call();
        this.setState({managerAddress:manager_address})
    }
    async loadInfo() {
        this.web3 = new Web3(window.ethereum);
        const accounts = await this.web3.eth.requestAccounts();
        console.log("帳號是:", accounts);
        this.setState({ account: accounts[0] })
        const balance = await this.web3.eth.getBalance(accounts[0]);
        this.setState({balance:balance});
    }
    render() {
        return (
            <div>
                <h1>Web3Demo</h1>
                <h2>連結的帳號是={this.state.account}</h2>
                <h2>餘額是={this.state.balance}</h2>
                <h2>合約地址={this.state.contractAddress}</h2>
                <h2>管理員地址={this.state.managerAddress}</h2>
            </div>
        )
    }
}