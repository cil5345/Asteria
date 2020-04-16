import firebase from 'firebase';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADtPIiXsVSi1WP2hJxLUJP-dqCGuDTqbo",
    authDomain: "asteria-4f48d.firebaseapp.com",
    databaseURL: "https://asteria-4f48d.firebaseio.com",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth;
  export const db = firebase.database();