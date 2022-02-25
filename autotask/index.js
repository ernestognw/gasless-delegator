const { ethers } = require("ethers");
const {
  DefenderRelayProvider,
  DefenderRelaySigner,
} = require("defender-relay-client/lib/ethers");

const tokenAddress = "<<YOUR_TOKEN_ADDRESS>>";
const GaslessContractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

exports.handler = async function (event) {
  const provider = new DefenderRelayProvider(event);
  const signer = new DefenderRelaySigner(event, provider, { speed: "fast" });

  const GSLSTokenContract = new ethers.Contract(
    tokenAddress,
    GaslessContractABI,
    signer
  );

  const {
    request: {
      body: { delegatee, nonce, expiry, signature },
    },
  } = event;

  const { v, r, s } = ethers.utils.splitSignature(signature);

  const tx = await GSLSTokenContract.delegateBySig(
    delegatee,
    nonce,
    expiry,
    v,
    r,
    s
  );
  return tx.wait();
};
