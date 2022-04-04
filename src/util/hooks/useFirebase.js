import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google SignIn
    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const redirect = location.state?.from ? location.state?.from : '/';
                navigate(redirect);
                setUser(result.user)
                console.log(result.user);
            }).catch((error) => {
                console.log(error);
            });
    }

    // reset password
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    // SignIn with email & password
    const registerWithEmailPassword = (email, password, location, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                // send name to firebase after creation
                const redirect = location.state?.from ? location.state?.from : '/';
                navigate(redirect);

                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    // logout
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });
    }

    // ovserver
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

        return () => unsubscribe;
    }, [])
    return {
        signInWithGoogle,
        user,
        registerWithEmailPassword,
        resetPassword,
        logout,
    }
};

export default useFirebase;