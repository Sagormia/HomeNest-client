import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, reload, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    const userRegister = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const refreshUser = async () => {
        if (auth.currentUser) {
            await reload(auth.currentUser);
            setUser({ ...auth.currentUser });
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => unsubscribe();
    }, []);


    const authInfo = {
        userRegister,
        userLogin,
        googleLogin,
        user,
        setUser,
        refreshUser,
        loader,
        logOut,
    };
    return (
        <AuthContext value={authInfo} >{children}</AuthContext>
    );
};

export default AuthProvider;