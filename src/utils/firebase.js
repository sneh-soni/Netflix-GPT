// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzXhWDeWyXQniZmkzKJbibMQIk7oEGWSI",
  authDomain: "netflixgpt-2e3ce.firebaseapp.com",
  projectId: "netflixgpt-2e3ce",
  storageBucket: "netflixgpt-2e3ce.appspot.com",
  messagingSenderId: "116951646237",
  appId: "1:116951646237:web:86e57e1d11cb217a63c6f4",
  measurementId: "G-DF7BC68HZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
