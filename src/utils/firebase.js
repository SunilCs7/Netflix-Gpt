// https://netflixai-d46f6.web.app

import { getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHK5IEsB6KED1lfH6msYkZYi2K3DZC2ew",
  authDomain: "netflixai-d46f6.firebaseapp.com",
  projectId: "netflixai-d46f6",
  storageBucket: "netflixai-d46f6.firebasestorage.app",
  messagingSenderId: "774635274207",
  appId: "1:774635274207:web:e88335cc405632502c8e6a",
  measurementId: "G-CWTN6DWTJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
