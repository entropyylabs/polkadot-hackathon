import { generateAccount, SignatureType } from "@unique-nft/accounts";
import { getAccountFromMnemonic } from "@unique-nft/accounts";
import { mnemonicGenerate } from "@polkadot/util-crypto";

export const makeAccount = async () => {
  const mnemonicPhrase = mnemonicGenerate();
  const account = await getAccountFromMnemonic({
    mnemonic: mnemonicPhrase,
  });
  return account;
};
