// 結構說明沒有使用顯示到畫面上
import React, { Component } from 'react'
import {drizzleConnect} from '@drizzle/react-plugin'
const mapStateToProps = (state)=>({state});

export class InfoContainer extends Component {

    render() {

        console.log(this.props)
        return <div>InfoContainer</div>

    }
}
export default drizzleConnect(InfoContainer, mapStateToProps);