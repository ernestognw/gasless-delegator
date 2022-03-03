// Workaround to build type errors until https://github.com/Developer-DAO/web3-ui/pull/314 gets merged

const replace = require("replace-in-file");
const { join } = require("path");

const options = {
  files: join(__dirname, "../node_modules/@web3-ui/**/*.ts"),
  from: /@ethersproject\/providers\/src.ts\/json-rpc-provider/g,
  to: "@ethersproject/providers",
};

replace.sync(options);
