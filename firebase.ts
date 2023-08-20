// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdZxWDnZggaKI7BMDgsy66ThEcJ9JbHEg",
    authDomain: "netflix-clone-ff682.firebaseapp.com",
    projectId: "netflix-clone-ff682",
    storageBucket: "netflix-clone-ff682.appspot.com",
    messagingSenderId: "279078845519",
    appId: "1:279078845519:web:c2c371f2ef9241700c3e3a"
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }