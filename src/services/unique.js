import { Sdk } from "@unique-nft/sdk";
import { KeyringProvider } from "@unique-nft/accounts/keyring";

const baseUrl = "https://rest.unique.network/opal/v1";
const mnemonic =
  "bus ahead nation nice damp recall place dance guide media clap language";

// Creating an SDK client
function createSdk(account) {
  const options = {
    baseUrl,
    signer: account,
  };
  return new Sdk(options);
}

// Entrypoint
async function main() {
  const signer = await KeyringProvider.fromMnemonic(mnemonic);
  const address = signer.instance.address;

  const sdk = createSdk(signer);

  const collection = await createCollection(sdk, address);
  console.log("Сollection was create. ID: ", collection);
}

main();
