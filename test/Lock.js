const { expect } = require('chai');
const { ethers, upgrades } = require('hardhat');

describe('Contract Upgrade Tests', function () {
  let numContract;

  beforeEach(async function () {
    // Deploy the initial version of the contract
    const NUM1 = await ethers.getContractFactory('NUM1');
    numContract = await upgrades.deployProxy(NUM1, [10], {
      initializer: 'setNum',
    });
    await numContract.waitForDeployment();
    console.log(await numContract.getAddress());
  });

  it('should upgrade to NUM2 contract', async function () {
    // Perform the upgrade to NUM2 contract
    const NUM2 = await ethers.getContractFactory('NUM2');
    const upgradedContract = await upgrades.upgradeProxy(
      await numContract.getAddress(),
      NUM2,
    );

    // Perform assertions to check if the upgrade was successful
    expect(await upgradedContract.getAddress()).to.equal(
      await numContract.getAddress(),
    );
    expect(await upgradedContract.getNum()).to.equal(10);

    // Call the new function from NUM2 contract
    await upgradedContract.mulNUm();

    // Perform assertions to check the updated state
    expect(await upgradedContract.getNum()).to.equal(20);
  });
});
