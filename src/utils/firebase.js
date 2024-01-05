// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRNFEfMGH2biI_d2dcdVo-ivgczebeT30",
  authDomain: "netflix-gpt-7a58e.firebaseapp.com",
  projectId: "netflix-gpt-7a58e",
  storageBucket: "netflix-gpt-7a58e.appspot.com",
  messagingSenderId: "431055326296",
  appId: "1:431055326296:web:c5e939beb5fcda47dace2d",
  measurementId: "G-E73TTHMZDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
