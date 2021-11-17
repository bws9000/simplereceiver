/* eslint-disable prettier/prettier */
/* eslint-disable node/no-missing-import */
/* eslint-disable no-unused-vars */

import { expect } from "chai";
import { ethers } from "hardhat";
import { SimpleToken } from "../typechain/SimpleToken";
import { TokenReceiver } from "../typechain/TokenReceiver";

// const provider = ethers.provider;
let simpleToken: SimpleToken;
let tokenReceiver: TokenReceiver;

describe("tests", function () {
  it("Deply SimpleToken Contract", async function () {
    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    simpleToken = await SimpleToken.deploy();
    await simpleToken.deployed();
    expect(simpleToken.address);
  });

  it("Deply TokenReceiver Contract", async function () {
    const TokenReceiver = await ethers.getContractFactory("TokenReceiver");
    tokenReceiver = await TokenReceiver.deploy(simpleToken.address);
    await tokenReceiver.deployed();
    expect(tokenReceiver.address);
  });

  it("Do Stuff FAIL * ", async function () {
    await tokenReceiver.doStuff();
  });

  it("Approve Allowence for TokenReceiver ", async function () {
    await simpleToken.approve(tokenReceiver.address, 1000);
  });

  it("Do Stuff", async function () {
    await tokenReceiver.doStuff();
  });

  it("Check Balance of TokenReceiver is equal to 1000", async function () {
    const result = await simpleToken.balanceOf(tokenReceiver.address);
    expect(result).equal(1000);
  });
});
