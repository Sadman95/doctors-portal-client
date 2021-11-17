import initAuthentication from "../pages/LogIn/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  signOut,
  getIdToken
} from "firebase/auth";
import axios from 'axios'
import { useHistory } from "react-router";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const history = useHistory();

  const auth = getAuth();

  /* Create New User / Register User */
  const registerUser = (name, email, password, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        saveNewUser(email, name);
        updateUser(name);
        history.replace('/');
        console.log(result.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
    setAuthError("");
  };

  /* Sign In With Email & Password */
  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        history.push('/');
        setLoading(false);
      });
      setAuthError('');
  };

  /* Google Sign In */
  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveOldUser(user.email, user.displayName);
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  /* Facebook sign in */
  const signInWithFacebook = () =>{
        setLoading(true);
        const fbProvider = new FacebookAuthProvider();
        signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        saveOldUser(user.email, user.displayName);
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* Observer for current user */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => localStorage.setItem('idToken', idToken))
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  /* Update Current User */
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  /* Password reset email */
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  /* Sign Out */
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setLoading(false);
      });
  };


  /* save new user */
  const saveNewUser = (email, displayName)=> {
    const user = {email, displayName};
    axios.post('http://localhost:4000/users', user)
    .then(res => console.log(res))
  }


  /* update or insert old user */
  const saveOldUser = (email, displayName) =>{
    const user = {email, displayName};
    axios.put('http://localhost:4000/users', user)
    .then(res => console.log(res))
  }

  /* check a user is admin or not */
  useEffect(() =>{
    fetch(`http://localhost:4000/users/admin/${user.email}`)
    .then(res => res.json())
    .then(data => {
      if(data.admin === true){
        setAdmin(true);
      }
    })
  }, [user?.email])

  return {
    user,
    authError,
    loading,
    admin,
    registerUser,
    signInUser,
    updateUser,
    signInWithGoogle,
    signInWithFacebook,
    resetPassword,
    logOut,
  };
};

export default useFirebase;
