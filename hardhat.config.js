require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      allowUnlimitedContractSize: true,
  
  }
  
  }
  ,
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      
    }
  }}