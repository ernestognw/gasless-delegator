const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_ADDRESS;
const chainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID);
const autotaskWebhookUri = process.env.NEXT_PUBLIC_AUTOTASK_WEBHOOK_URI;

export { tokenAddress, chainId, autotaskWebhookUri };
