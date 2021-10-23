import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAy4mgZQHi5-ynSEgeoWDOGln2mNSvKDn0",
    authDomain: "crwn-db-d8d99.firebaseapp.com",
    projectId: "crwn-db-d8d99",
    storageBucket: "crwn-db-d8d99.appspot.com",
    messagingSenderId: "779347137774",
    appId: "1:779347137774:web:18ca35aff26ac271f94fff",
    measurementId: "G-3RP8DEYBCE"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    console.log(firestore.doc('users/14dddee'))

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;