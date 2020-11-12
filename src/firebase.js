import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAep-ifKErEVWRhUNXMaMxa47YIaRM8EsI",
  authDomain: "whatsappclone-99e2b.firebaseapp.com",
  databaseURL: "https://whatsappclone-99e2b.firebaseio.com",
  projectId: "whatsappclone-99e2b",
  storageBucket: "whatsappclone-99e2b.appspot.com",
  messagingSenderId: "98740513148",
  appId: "1:98740513148:web:2f3f6ba922e48a43611cf9"
};

// Initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// DB
const db = firebaseApp.firestore();
// Authentication handler
const auth = firebase.auth();
// Googles authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;