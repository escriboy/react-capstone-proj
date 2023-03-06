import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGEbdKN4h5CxesLKGVoylbqsUzIGlo7o4",
  authDomain: "crwn-clothing-db-3d2e9.firebaseapp.com",
  projectId: "crwn-clothing-db-3d2e9",
  storageBucket: "crwn-clothing-db-3d2e9.appspot.com",
  messagingSenderId: "375995438230",
  appId: "1:375995438230:web:be50992c8c78c40efc5eb7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
