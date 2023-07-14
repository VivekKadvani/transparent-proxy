# Transperent Proxy

This project demonstrates a basic transperent proxy using hardhat.

## use this boilerplate

- first clone this repo
- run following command

```
cd SIMPLE PROXY
npm i
```

- set .env file

```
ACCOUNT_PRIVATE_KEY=''
ETHERSCAN_API_KEY=''
POLYGONSCAN_API_KEY=''
SEPOLIA_RPC_URL=''
MUMBAI_RPC_URL=''
```

## for verification

```
npx hardhat verify --network <networkName> <contractAdddress>
```

- using deploy.js

```
npx hardhat run scripts/deploy.js
```

we can deploy our main contract with having proxy pattern

- using deployProxy.js

```
npx hardhat run scripts/deployProxy.js
```

we can change logic of our contract i mean we can update our contract with new implementation.
make sure address must need to change.

## How to implement ?

- first add contract code
- than change name in deploy.js script
- than run deploy script and verify it using it's contract address
- as of now our transperent proxy is created.

## when we need to upgrade our contract:

- add code to contract foler
- change name in deployProxy.js
- run deployProxy.js
- again run verify command with same address
- and it will be updataed

## Note

- etherscan not support proxy pattern

## .env variable
