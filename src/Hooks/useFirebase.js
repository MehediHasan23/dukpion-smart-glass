import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin , setAdmin] = useState(false)
  const auth = getAuth();

  //login user
  const loginProcess = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // register with email & pass
  const registerProcess = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        saveUser(email, name, "POST");
        console.log(user);
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //set user name
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  //name
  const handleName = (e) => {
    setName(e.target.value);
  };
  //email
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  //password
  const handelPass = (e) => {
    setPassword(e.target.value);
  };

  // sign out
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //save user on database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  //make admin for client

  //admin state
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    loginProcess,
    registerProcess,
    handleName,
    handelEmail,
    handelPass,
    user,
    name,
    error,
    setError,
    setUser,
    logOut,
    loading,
    admin
  };
};

export default useFirebase;





/* const [user, setUser] = useState({});
 // const [error, setError] = useState("");
 const [loading, setLoading] = useState(true);
 const auth = getAuth();

 //register
 const registerUser = (email, password, name) => {
   setLoading(true);
   createUserWithEmailAndPassword(auth, email, password)
     .then((result) => {
       const user = result.user;
       console.log(user);
       // setError("");
       setUserName(name);
     })
     .catch((error) => {
       // setError(error.message);
     })
     .finally(() => setLoading(false));
 };

 //login user
 const loginUser = (email, password) => {
   setLoading(true);

   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
     })
     .finally(() => setLoading(false));
 };

 //observe user state
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       setUser(user);
       const uid = user.uid;
     } else {
       setUser({});
     }
     setLoading(false);
   });
   return () => unsubscribe;
 }, []);

 //set user name
 const setUserName = () => {
   updateProfile(auth.currentUser, {
     displayName: name,
   }).then((result) => {});
 };
 //logout

 const logOut = () => {
   setLoading(true);
   signOut(auth)
     .then(() => {})
     .catch((error) => {})
     .finally(() => setLoading(false));
 };

 return {
   loading,
   user,
   // error,
   registerUser,
   logOut,
   loginUser,
 }; */

//

/* const [user, setUser] = useState({});
const [error, setError] = useState("");
const [loading, setLoading] = useState(true);
const [admin, setAdmin] = useState(false);
const auth = getAuth();

//email registration
const emailRegistration = (email, password, name, history) => {
  setLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setError("");
      const newUser = { email, displayName: name };
      setUser(newUser);

      //added/save new user in mongo server
      saveUser(email, name, "POST");

      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {})
        .catch((error) => {});
      history.replace("/home");
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setLoading(false));
};

// login with email
const emailLogIn = (email, password, location, history) => {
  setLoading(true);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location.state.from || "/";
      history.replace(destination);

      setError("");
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setLoading(false));
};

// user login state
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser({});
    }
    setLoading(false);
  });
  return () => unsubscribe;
}, []);

//admin state
useEffect(() => {
  fetch(`http://localhost:5000/users/${user.email}`)
    .then((res) => res.json())
    .then((data) => setAdmin(data.admin));
}, [user.email]);

//logout
const logOut = () => {
  setLoading(true);

  signOut(auth)
    .then(() => {})
    .catch((error) => {})
    .finally(() => setLoading(false));
};

const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch("http://localhost:5000/users", {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then();
};

return {
  user,
  admin,
  emailRegistration,
  logOut,
  emailLogIn,
  loading,
  error,
}; */
