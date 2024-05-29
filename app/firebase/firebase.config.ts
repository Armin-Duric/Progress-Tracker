import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_NEXT_API_KEY,
  authDomain: process.env.FIREBASE_NEXT_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_NEXT_PROJECT_ID,
  storageBucket: process.env.FIREBASE_NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_NEXT_MESSAGE_ID,
  appId: process.env.FIREBASE_NEXT_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export { auth, app };
