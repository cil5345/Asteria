import firebase from 'firebase';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADtPIiXsVSi1WP2hJxLUJP-dqCGuDTqbo",
    authDomain: "asteria-4f48d.firebaseapp.com",
    databaseURL: "https://asteria-4f48d.firebaseio.com",
    projectId: "asteria-4f48d",
    storageBucket: "asteria-4f48d.appspot.com",
    messagingSenderId: "292050647789",
    appId: "1:292050647789:web:cf0c4dd60c483296472ae4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth;
  export const db = firebase.database();