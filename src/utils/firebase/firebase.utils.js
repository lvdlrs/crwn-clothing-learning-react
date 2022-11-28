
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWXGMvet75F6dQONvP5J2w-5zTJunRKAs",
  authDomain: "crwn-clothing-db-dead9.firebaseapp.com",
  projectId: "crwn-clothing-db-dead9",
  storageBucket: "crwn-clothing-db-dead9.appspot.com",
  messagingSenderId: "277261475968",
  appId: "1:277261475968:web:3c04fb79dc5f7c49870665"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);