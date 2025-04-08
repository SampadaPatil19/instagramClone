import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGmi5FBrltRhs10kyegVziO8eepXYKAsA",
  authDomain: "stealer-c7764.firebaseapp.com",
  projectId: "stealer-c7764",
  storageBucket: "stealer-c7764.appspot.com",
  messagingSenderId: "557908748505",
  appId: "1:557908748505:web:63555c129d90bf36be76c8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };