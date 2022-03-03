## Gasless Token (ERC20 Votes) ✨

A simplified ERC20 Vote token that allow people to claim 150 tokens.

⚠️⚠️ WARNING: This is NOT suitable for production as it doesn't validate elegibility for an airdrop. ⚠️⚠️

### Deploy ⚙️

1. Copy `.env.example` to `.env` file and fill with the information required (you can ignore INFURA_PROJECT_ID if you're providing a custom chain in `hardhat.config.ts`)
2. Configure the network of your preference in `hardhat.config.ts`, it goerli already configured as a default
3. Fund the deployer account
4. Run `yarn deploy --network <your-network>`
5. Run `yarn verify --network <your-network>` so you can claim your tokens using Etherscan UI
