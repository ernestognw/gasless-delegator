require("dotenv").config();
const { AutotaskClient } = require("defender-autotask-client");
const { join } = require("path");

const main = async () => {
  const client = new AutotaskClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  });

  try {
    const { autotaskId } = await client.create({
      name: "Gasless Delegator",
      encodedZippedCode: await client.getEncodedZippedCodeFromFolder(
        join(__dirname, "../code")
      ),
      relayerId: process.env.RELAYER_ID,
      trigger: {
        type: "webhook",
      },
      paused: false,
    });

    console.log(
      `Autotask with id ${autotaskId} created correctly, get webhook URI at https://defender.openzeppelin.com/#/autotask/${autotaskId}`
    );
  } catch (err) {
    console.log(err);
  }
};

main().then(() => process.exit("success"));
