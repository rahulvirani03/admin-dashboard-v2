import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKaZVZK5bn8BxKcFeHG5JXaLpapbt0VD0",
  authDomain: "startup-70c1e.firebaseapp.com",
  projectId: "startup-70c1e",
  storageBucket: "startup-70c1e.appspot.com",
  messagingSenderId: "998781865762",
  appId: "1:998781865762:web:964d92e7ca5a97f6035f7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {auth,app}
