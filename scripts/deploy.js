const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("Hello World");

    // Start deployment, returning a promist that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });