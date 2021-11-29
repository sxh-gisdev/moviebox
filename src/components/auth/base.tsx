import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3UUlt5YYyk49DPUviuYosy1TKfCquNOs",
  authDomain: "moviebox-6d099.firebaseapp.com",
  projectId: "moviebox-6d099",
  storageBucket: "moviebox-6d099.appspot.com",
  messagingSenderId: "740168594707",
  appId: "1:740168594707:web:649275ca59280372f716e6",
  measurementId: "G-DT4VM2KX16",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
