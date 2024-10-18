import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { envs } from "../constants/envs";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: envs.VITE_API_KEY,
    authDomain: envs.VITE_AUTH_DOMAIN,
    projectId: envs.VITE_PROJECT_ID,
    storageBucket: envs.VITE_STORAGE_BUCKET,
    messagingSenderId: envs.VITE_MESSAGING_SENDER_ID,
    appId: envs.VITE_APP_ID,
    measurementId: envs.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
