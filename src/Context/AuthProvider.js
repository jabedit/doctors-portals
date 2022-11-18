import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebases/firebase.config'
console.log(app)


export  const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState('')

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing')
            setUser(currentUser)
        })
        return ()=> unsubscribe()
    },[])
    const authInfo ={
        createUser,
        signIn,
        logOut,
        user,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;