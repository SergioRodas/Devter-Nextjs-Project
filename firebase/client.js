import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3xON4T0gKK7plH3AEohU1pZ-oQGHkSBo",
  authDomain: "devter-7b0ad.firebaseapp.com",
  projectId: "devter-7b0ad",
  storageBucket: "devter-7b0ad.appspot.com",
  messagingSenderId: "1014477099779",
  appId: "1:1014477099779:web:e974b8b76fb440ac644f36",
  measurementId: "G-00HMN0VBNT",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
};
