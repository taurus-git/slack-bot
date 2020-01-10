import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUK3Wl29b8B1SsT9PitGTgjxVewJTDF5o",
    authDomain: "hyperion-workers-9b8ec.firebaseapp.com",
    databaseURL: "https://hyperion-workers-9b8ec.firebaseio.com",
    projectId: "hyperion-workers-9b8ec",
    storageBucket: "hyperion-workers-9b8ec.appspot.com",
    messagingSenderId: "389040425663",
    appId: "1:389040425663:web:9a67239d8ea82f23ae540a",
    measurementId: "G-WF2XFXE74Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

export const database = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();