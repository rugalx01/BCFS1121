import React, { useEffect } from 'react'

function Web3Info() {
    useEffect(()=>{
        console.log("web3的元件載入")
    })
    return (
        <div>
            <h1>Web3Info</h1>
            <p>detail will go in here...</p>
        </div>
    )
}

export default Web3Info