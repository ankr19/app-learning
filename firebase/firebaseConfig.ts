import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV6jcIeGCJpCM13gM1-wbOKr5Hwsuu9b4",
  authDomain: "projects-62e1f.firebaseapp.com",
  projectId: "projects-62e1f",
  storageBucket: "projects-62e1f.firebasestorage.app",
  messagingSenderId: "850772018773",
  appId: "1:850772018773:web:d0f49323341e13ef17b6dc",
  measurementId: "G-Q0ZJ4C19T1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
