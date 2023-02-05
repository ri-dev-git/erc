require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config()
// const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `${process.env.POLYGON_ALCHMEY_API}`,
      //accounts: [process.env.privateKey]
    },
    matic: {
      url: `${process.env.POLYGON_ALCHMEY_API}`,
      //accounts: [process.env.privateKey]
    },
    goerli: {
      url: `${process.env.ALCHEMY_API_URL}`,
      accounts:PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
    }
  },
  solidity: {
    compilers: [
      {
          version: "0.8.7",
      },
      {
          version: "0.8.9",
      },
  ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};