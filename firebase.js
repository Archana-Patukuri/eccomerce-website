import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCeP0VCbana2ZbGFQFfgTNBJHWejsNDU-4",
    authDomain: "fir-d8860.firebaseapp.com",
    projectId: "fir-d8860",
    storageBucket: "fir-d8860.appspot.com",
    messagingSenderId: "229004783797",
    appId: "1:229004783797:web:75a8cc0646dd87d1ad0efc",
    measurementId: "G-XEF2G63CGN"
  });

  const auth=firebase.auth();

  export {auth};