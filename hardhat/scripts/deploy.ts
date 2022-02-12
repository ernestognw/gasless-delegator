import { ethers } from "hardhat";

const main = async () => {
  const GaslessToken = await ethers.getContractFactory("GaslessToken");
  const gaslessToken = await GaslessToken.deploy();

  await gaslessToken.deployed();

  console.log("GaslessToken deployed to:", gaslessToken.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
