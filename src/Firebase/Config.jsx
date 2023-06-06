import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDE3YE5pIaLSAGhNcUM7PlnyiSjYh0lInU",
    authDomain: "shop-bbe4f.firebaseapp.com",
    projectId: "shop-bbe4f",
    storageBucket: "shop-bbe4f.appspot.com",
    messagingSenderId: "555039683267",
    appId: "1:555039683267:web:666cb6681c6e7ecc8ba876",
    measurementId: "G-8RFN362P8T"
  };

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;
