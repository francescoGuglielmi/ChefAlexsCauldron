// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3rfy-SiCNg6Ldd4YIcuhDg2o096D_22M",
  authDomain: "chef-alex-s-cauldron.firebaseapp.com",
  projectId: "chef-alex-s-cauldron",
  storageBucket: "chef-alex-s-cauldron.firebasestorage.app",
  messagingSenderId: "661144036334",
  appId: "1:661144036334:web:114afbd4c333c39b4124ff",
  measurementId: "G-633JSNSJET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
