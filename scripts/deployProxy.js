const { upgrades, ethers } = require('hardhat');
//transperent proxy
async function main() {
  const NUM2 = await ethers.getContractFactory('NUM2');
  console.log('Upgrading num 1');
  await upgrades.upgradeProxy(
    '0x982b7811E22068263ca6CD8DdFE8cCC8d1BaDc50',
    NUM2,
  );

  console.log('upgraded....');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
