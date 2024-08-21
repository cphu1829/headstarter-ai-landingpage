// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApnedBXnjK32lXpV1DbiqDRm-8Bv0NDio",
  authDomain: "interviewprepwaitlist.firebaseapp.com",
  projectId: "interviewprepwaitlist",
  storageBucket: "interviewprepwaitlist.appspot.com",
  messagingSenderId: "26256227649",
  appId: "1:26256227649:web:5e47fc346090ed2a4535c0",
  measurementId: "G-3BN5ZSXZLK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);


export {
  app, firestore
}