import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const history = useHistory();

    const googleProvider = new GoogleAuthProvider();

    // google login
    const googleSignin = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user)
                history.push('/dashboard')
                // saveUser(result.user.email, result.user.displayName, 'POST');
            })
            .finally(() => {
                
                setIsLoading(false)
            })
            
    }


//  user login


    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
    };



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            // setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])


// logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    console.log('clicked')
    }








    return {
        googleSignin,
        auth,
        user,
        handleUserLogin,
        logOut
    }
}

export default useFirebase;