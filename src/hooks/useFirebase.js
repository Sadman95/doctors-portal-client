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
} from "firebase/auth";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  /* Create New User / Register User */
  const registerUser = (name, email, password, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
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
        setUser(result.user);
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
        setUser(result.user);
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

  return {
    user,
    authError,
    loading,
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
