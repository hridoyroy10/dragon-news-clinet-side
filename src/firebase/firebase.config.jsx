// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYINVGTToqyvlpE_g4b0TczF2VSMqiE_k",
    authDomain: "draogon-news.firebaseapp.com",
    projectId: "draogon-news",
    storageBucket: "draogon-news.appspot.com",
    messagingSenderId: "498331914907",
    appId: "1:498331914907:web:5b6309a95718b1ceb0ec3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;