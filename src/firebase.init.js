// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnTFILnOMZj01LY5WYyYsk8C2cTQNishk",
    authDomain: "volunteer-ade77.firebaseapp.com",
    projectId: "volunteer-ade77",
    storageBucket: "volunteer-ade77.appspot.com",
    messagingSenderId: "659481279792",
    appId: "1:659481279792:web:dde5318c2a08219b489cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;