 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth'

  const fire = firebase.initializeApp({
    apiKey: "AIzaSyBpDeh-xMUItzjXjnTr9GGVeSrd1SJ2Dds",
    authDomain: "wteval.firebaseapp.com",
    projectId: "wteval",
    storageBucket: "wteval.appspot.com",
    messagingSenderId: "371048694394",
    appId: "1:371048694394:web:2378ad0ec21906467071c3",
    measurementId: "G-KX423JN3X2"
  })

  // Initialize Firebase
  export const auth = fire.auth();
  
  export default fire;