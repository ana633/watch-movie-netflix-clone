// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXDq0o1xvavPIZH_NzGNLTmMK7nld1054",
  authDomain: "react-netflix-clone-90b20.firebaseapp.com",
  projectId: "react-netflix-clone-90b20",
  storageBucket: "react-netflix-clone-90b20.appspot.com",
  messagingSenderId: "693985843364",
  appId: "1:693985843364:web:cb847685145f4807b36e31",
  measurementId: "G-0R1X3LYDCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);