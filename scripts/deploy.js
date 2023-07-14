const { upgrades, ethers } = require('hardhat');

async function main() {
  const NUM1 = await ethers.getContractFactory('NUM1');
  console.log('Deploying num 1');
  const num1 = await upgrades.deployProxy(NUM1, [10], {
    initializer: 'setNum',
  });
  await num1.waitForDeployment();
  console.log('Num1 deployed successfully');
  // console.log(Number(await num1.getNum()));
  // await num1.setNum(5);
  // console.log(Number(await num1.getNum()));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
