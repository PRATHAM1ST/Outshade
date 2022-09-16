// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXjQ-0UsLOLMyBzcpZIqfB9J9lVo3AQJg",
  authDomain: "outshade-e9d35.firebaseapp.com",
  projectId: "outshade-e9d35",
  storageBucket: "outshade-e9d35.appspot.com",
  messagingSenderId: "610359330672",
  appId: "1:610359330672:web:2bbafe2ddb2453fd44f1b5",
  measurementId: "G-RS9DEFZCR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cool');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

getCities(db).then(e=>{
  console.log(e)
})