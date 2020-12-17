import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnL6e4KRlaT6Y2RSv8goKhe7KyQPzu4xI",
    authDomain: "facebook-clone-7c98a.firebaseapp.com",
    databaseURL: "https://facebook-clone-7c98a.firebaseio.com",
    projectId: "facebook-clone-7c98a",
    storageBucket: "facebook-clone-7c98a.appspot.com",
    messagingSenderId: "948968748020",
    appId: "1:948968748020:web:7cae7b547fab7fc07c3fa1",
    measurementId: "G-MJFNY1S9NP",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
