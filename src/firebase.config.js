
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDKZTWPUwCNBmQcfETHWWlWgwc-psb0A8k",
  authDomain: "shoptify-73b6e.firebaseapp.com",
  projectId: "shoptify-73b6e",
  storageBucket: "shoptify-73b6e.appspot.com",
  messagingSenderId: "171751330128",
  appId: "1:171751330128:web:048c8d3a631c76de361c55"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app