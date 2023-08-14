// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUBirWQQmrHGOHyX2l20XxdDb0v-noqx8",
    authDomain: "proyecto-e-comerce.firebaseapp.com",
    projectId: "proyecto-e-comerce",
    storageBucket: "proyecto-e-comerce.appspot.com",
    messagingSenderId: "885848356039",
    appId: "1:885848356039:web:74134436bc9414d759bae2",
    measurementId: "G-0PRC7PCSJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)