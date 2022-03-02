## Gasless Delegator Autotask ✨

Creates an autotask to handle user signed `delegateBySigTransactions` and submits them through an Open Zeppelin's Defender Relayer

## How to deploy the Autotask ⚙️

1. Deploy an ERC20 with the `delegateBySig(delegatee, nonce, expiry, v, r, s)` function, such as the Open Zeppelin [ERC20Votes.sol](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Votes)
2. Go to `code/index.js` and replace `<<YOUR_TOKEN_ADDRESS>>` with your token address.
3. Create an account and sign in to [Open Zeppelin Defender](https://defender.openzeppelin.com/)
4. Create a Relayer at the `Relay` tab for the same network where you deployed your token and fund it with any amount you'd like to provide to subsidize user redelegations
5. Create a copy of `.env.example` in a `.env` file and fill with your Defender Team API Keys and your relayer id
6. Execute `yarn create:autotask`

## FAQ ❓

- **What if I already deployed my autotask without changing the token address?** R: You can always edit the autotask code in the Defender UI, or delete the badly created one and create another one using the script
- **Where can I find my relayerId?** R: It's part of the Defender's relayer UI URL, e.g. in `https://defender.openzeppelin.com/#/relay/6c42206d-773d-47c3-a822-51d352c0d996/settings`, the id is `6c42206d-773d-47c3-a822-51d352c0d996`
