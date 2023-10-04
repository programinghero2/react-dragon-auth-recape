import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password) => {
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
       return signOut(auth)
    }
    useEffect(() => {
       const unSubsCribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser) 
            setLoading(false)
        })
        return () => {
            unSubsCribe()
        }
    },[])
    const userInfo = {
        user,
        createUser,
        userLogin,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;