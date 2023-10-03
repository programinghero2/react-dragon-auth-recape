import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnXM6bh6CjziFu7ga3Y9xqQ13j0L-nLnQ",
  authDomain: "react-dragon-news-auth-8fc89.firebaseapp.com",
  projectId: "react-dragon-news-auth-8fc89",
  storageBucket: "react-dragon-news-auth-8fc89.appspot.com",
  messagingSenderId: "966245772630",
  appId: "1:966245772630:web:ce0991ed2d8153583dfaf7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
