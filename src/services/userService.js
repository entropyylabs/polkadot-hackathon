import { firestore } from "./firebase";
import { makeAccount } from "../services/createAccount";
import { collection, setDoc, doc } from "firebase/firestore";

export const createUserDocument = async (user) => {
  if (!user) return;

  let account;
  makeAccount().then((account) => {
    account = account;

    const userRef = collection(firestore, "Users");
    const snapshot = doc(firestore, "Users", user.uid);

    if (!snapshot.exists) {
      const { email } = user;

      try {
        setDoc(doc(firestore, "Users", user.uid), {
          email,
          createdAt: new Date(),
          account: account,
        });
      } catch (error) {
        console.log("Error :: creating user", error);
      }
    }
  });

  console.log(account, ": this is account");
};
