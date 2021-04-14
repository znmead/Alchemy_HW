require('dotenv').config();

const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
// console.log(JSON.stringify(contract.abi));

const contractAddress = "0x27D1879D7BE8459d3110d2bd7ca86dFBD38E05b3";
const helloWorldContract = new web3.eth.Contract(contract.abi, contractAddress);

async function main() {
    const message = await helloWorldContract.methods.message().call();
    console.log("The message is: " + message);
  }
  main();
