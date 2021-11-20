import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJFmBxMn0kYqkzip94PxpQzKobqcg2e3o",
    authDomain: "amanportfolio-153b5.firebaseapp.com",
    projectId: "amanportfolio-153b5",
    storageBucket: "amanportfolio-153b5.appspot.com",
    messagingSenderId: "988589413004",
    appId: "1:988589413004:web:ceb7cc7860183ae35c61a9",
    measurementId: "G-54W3BVF9EG"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider();

// export {auth,provider}
export default db;