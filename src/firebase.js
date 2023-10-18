import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyApFvIrxoDQ30DmssTgU9E4BhNlSJlXL6o",
  authDomain: "slack-clone-5ccfb.firebaseapp.com",
  projectId: "slack-clone-5ccfb",
  storageBucket: "slack-clone-5ccfb.appspot.com",
  messagingSenderId: "35090440151",
  appId: "1:35090440151:web:93cf67bb7491f4ae9c7592"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

