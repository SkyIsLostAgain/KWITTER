
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAp9P3czRzS3OdvAehUgQQWrYavEqcNdTY",
    authDomain: "kwitter-f55b2.firebaseapp.com",
    databaseURL: "https://kwitter-f55b2-default-rtdb.firebaseio.com",
    projectId: "kwitter-f55b2",
    storageBucket: "kwitter-f55b2.appspot.com",
    messagingSenderId: "330167258120",
    appId: "1:330167258120:web:454ed0c751de9d20eb55bd"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    username = document.getElementById("username").value;
firebase.database().ref("/").child(username).update({
    purpose : "adding user"
})
}