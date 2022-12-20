import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpQOq5Wcoi5sV-JRWitbDULNZeZkMWlE0",
    authDomain: "wheres-waldo-jyu-1.firebaseapp.com",
    projectId: "wheres-waldo-jyu-1",
    storageBucket: "wheres-waldo-jyu-1.appspot.com",
    messagingSenderId: "543307886601",
    appId: "1:543307886601:web:a530f51053087a6da508d8",
    measurementId: "G-EF4TQS0D8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
