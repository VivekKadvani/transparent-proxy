require('@nomicfoundation/hardhat-toolbox');
// require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {},
    sepolia: {
      url: [process.env.SEPOLIA_RPC_URL],
      accounts: [[process.env.ACCOUNT_PRIVATE_KEY]],
    },
    mumbai: {
      url: [process.env.MUMBAI_RPC_URL],
      accounts: [[process.env.ACCOUNT_PRIVATE_KEY]],
    },
  },
  etherscan: {
    // apiKey: [process.env.ETHERSCAN_API_KEY], // etherscan
    apiKey: [process.env.POLYGONSCAN_API_KEY], //polygon
  },
};
