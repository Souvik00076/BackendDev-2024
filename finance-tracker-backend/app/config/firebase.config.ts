// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFmBJxUOuRofs5BY-Ps8SKeyJVwP7nXuQ",
  authDomain: "backend-dev-2024.firebaseapp.com",
  projectId: "backend-dev-2024",
  storageBucket: "backend-dev-2024.appspot.com",
  messagingSenderId: "862049363344",
  appId: "1:862049363344:web:eacee3d90e0bca1e95ff15",
  measurementId: "G-HY8XBQ5P49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
