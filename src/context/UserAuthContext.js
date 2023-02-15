import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { createUserDocument } from "../services/userService";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  async function signUp(email, password) {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserDocument(user);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </userAuthContext.Provider>
  );
}

// Hook to use userAuthContext
export function useUserAuth() {
  return useContext(userAuthContext);
}
