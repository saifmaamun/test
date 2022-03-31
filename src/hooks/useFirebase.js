import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    // const serverUrl ="http://18.216.106.110:3001"
    const serverUrl ="http://localhost:3001"
    const [user, setUser] = useState({})
    const auth = getAuth()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const history = useHistory();

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider ();

    // google login
    const googleSignin = (history) => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user)
                history.push('/dashboard')
                const Email = result.user.email
                const Name = result.user.displayName
                saveUser(Email, Name, 'POST');
            })
            .finally(() => {
                
                setIsLoading(false)
            })
            
    }

    // facebook Login
    const facebookSignin = (history) => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user)
                const Email = result.user.email
                const Name = result.user.displayName
                saveUser(Email, Name, 'POST');
                console.log(result.user);
                history.push('/dashboard')
            })
}




//  user login

    const handleUserLogin = (email, password,history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                history.push('/dashboard')
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
    }

// set user to database
    const saveUser = (Email, Name, method) => {
        const user = { Email, Name};
        fetch(`${serverUrl}/users/create`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }






    return {
        googleSignin,
        auth,
        user,
        handleUserLogin,
        logOut,
        facebookSignin,
        error,
        serverUrl
    }
}

export default useFirebase;