import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAth4DDkEc8j98kj6XNZUiL4ueUT3cuSmQ",
  authDomain: "auth-react-8df32.firebaseapp.com",
  projectId: "auth-react-8df32",
  storageBucket: "auth-react-8df32.appspot.com",
  messagingSenderId: "694653769181",
  appId: "1:694653769181:web:09add3a5842a6758889234",
});

export const auth = app.auth();
export default app;
