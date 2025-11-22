import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDz7flSDB8e0qR8ircesW-w4ksOTBeRYM0",
  authDomain: "stuliev-51079.firebaseapp.com",
  projectId: "stuliev-51079",
  storageBucket: "stuliev-51079.firebasestorage.app",
  messagingSenderId: "522624409723",
  appId: "1:522624409723:web:335ab0ef4398b39fc582de"
};
// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(app)
