import { useState, useEffect } from "react";
import * as React from "react";
import { auth } from "./base";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

export const AuthContext = React.createContext<FirebaseUser | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setCurrentUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
