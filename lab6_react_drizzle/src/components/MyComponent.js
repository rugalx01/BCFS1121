import React, { Component } from 'react'

// 使用事件通知顯示到畫面之上
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;
export default class MyComponent extends Component {
    render() {
        console.log("props=", this.props)
        return (
            <div>
                {/* 這邊是事件通知的加載、每當有值變動的時候就會看到 */}
                <ToastContainer/>

                MyComponent, 區塊鏈可以在此互動
                <h2>取得帳戶餘額</h2>
                <h3>
                    <AccountData
                        drizzle={this.props.drizzle}
                        drizzleState={this.props.drizzleState}
                        accountIndex={0}
                        units={"ether"}
                        precision={6}
                    />
                </h3>
                <h2>取得合約資料</h2>
                <h3>
                    <ContractData
                        contract = "Storage"
                        drizzle={this.props.drizzle}
                        drizzleState={this.props.drizzleState}
                        method="getData"
                    />
                </h3>
                <h2>設定合約資料</h2>
                <h3>
                    <ContractForm
                        drizzle={this.props.drizzle}
                        drizzleState={this.props.drizzleState}
                        contract = "Storage"
                        method="setData"
                        labels={["new values"]}
                    />
                </h3>
            </div>
        )
    }
}