import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe7VgX6iK4sGs7gfnvhzIYlL0G3AZWddo",
  authDomain: "whats-app-c8ba7.firebaseapp.com",
  projectId: "whats-app-c8ba7",
  storageBucket: "whats-app-c8ba7.appspot.com",
  messagingSenderId: "1072377590197",
  appId: "1:1072377590197:web:510560bb952b39bbdd69fc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
