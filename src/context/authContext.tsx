import { useState, useEffect } from "react";
import * as React from "react";
import { auth } from "../components/base";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

export const AuthContext = React.createContext<FirebaseUser | null>(null);

// export function useAuth() {
//   return useContext(AuthContext);
// }
export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);

  // function register(email: string, password: string) {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setCurrentUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  // const value = {
  //   currentUser,
  //   register,
  // };

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
