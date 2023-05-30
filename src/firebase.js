import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAU-VL8M6D4-Djx7mT13T8RKJFOLQE-BZo",
  authDomain: "parcial-kiuvo.firebaseapp.com",
  projectId: "parcial-kiuvo",
  storageBucket: "parcial-kiuvo.appspot.com",
  messagingSenderId: "1078681108137",
  appId: "1:1078681108137:web:100dad9763e620ade9f3b8",
  measurementId: "G-CTKBJKMQJ5"
};

app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export{db, auth};