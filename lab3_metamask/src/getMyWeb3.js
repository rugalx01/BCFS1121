import Web3 from "web3";

const getMyWeb3 = () =>
    new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {

            // 判斷瀏覽器上面的對應不同的情況
            if (typeof window.ethereum !== "undefined") {
                console.log("meta mask is installed");
                if (window.ethereum) {
                    const web3 = new Web3(window.ethereum);
                    try {
                        await web3.eth.requestAccounts();
                        resolve(web3);
                    } catch (error) {
                        reject(error);
                    }
                }
            }
            else if (window.web3) { //legacy dapp browser
                console.log("injected web3 detected.");
                const web3 = window.web3;
                resolve(web3);
            }
            else {
                // guess a local ganache 8545
                console.log("no web3 instance, using local web3 server")
                const provider = new Web3.providers.HttpProvider(
                    "http://127.0.0.1:8545"
                );
                const web3 = new Web3(provider);
                resolve(web3);
            }

        })

    })

export default getMyWeb3;