
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWXGMvet75F6dQONvP5J2w-5zTJunRKAs",
  authDomain: "crwn-clothing-db-dead9.firebaseapp.com",
  projectId: "crwn-clothing-db-dead9",
  storageBucket: "crwn-clothing-db-dead9.appspot.com",
  messagingSenderId: "277261475968",
  appId: "1:277261475968:web:3c04fb79dc5f7c49870665"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// signinwithredirect
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// db initialization 
export const db = getFirestore();

export const createUserDocumentFromAuth = async ( 
  userAuth, 
  additionalInformation = {} 
  ) => {
  if( !userAuth ) return;

  // doc(database, database collection name, unique identification)
  const userDocRef = doc(db, 'users', userAuth.uid);

  // getting data from db
  const userSnapshot = await getDoc(userDocRef);

  // userDocRef.exist() - checking if data are exist in db

  if( !userSnapshot.exists() ){
  // if user data does not exist
  // create/set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{ 
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch(err){
        console.log('error creating the user', err.message);
    }
  }

  // if user data exist
  return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}