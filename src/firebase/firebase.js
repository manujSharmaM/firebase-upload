import firebase from "firebase/app";
import "firebase/storage";

// sdk setup
var firebaseConfig = {
  apiKey: "AIzaSyDWYTCnjChLA8aVAqfMq_DZUt8XRu6Z9Yo",
  authDomain: "creare-283314.firebaseapp.com",
  databaseURL: "https://creare-283314.firebaseio.com",
  projectId: "creare-283314",
  storageBucket: "creare-283314.appspot.com",
  messagingSenderId: "720309277014",
  appId: "1:720309277014:web:fda4d4f1c2f6cd212006f7",
  measurementId: "G-1NB549R6RB",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
