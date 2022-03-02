## Gasless Delegator UI ✨

An simple UI to provide a gasless redelegation for users on a token contract by using the `delegateBySig(delegatee, nonce, expiry, v, r, s)` function of the Open Zeppelin [ERC20Votes.sol](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Votes).

It uses an (EIP712 Typed Structured Data)[https://eips.ethereum.org/EIPS/eip-712] message to be signed by the user without paying for its actual execution.

### Getting Started ⚙️

1. Copy `.env.example` to `.env` file and fill with the information required (it requires you to first deploy your ERC20Votes token and create an Autotask to relay signed messages to the network)
2. Run `yarn dev` and open the running interface on your browser
3. Connect your wallet, paste a new valid address to redelegate and execute
4. Enjoy your new delegate 🥳
