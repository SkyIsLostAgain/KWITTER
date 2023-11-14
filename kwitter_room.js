//ADD YOUR FIREBASE LINKS HERE

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

    username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + username + "!";

    function addRoom(){
      roomname = document.getElementById("roomname").value;

      firebase.database().ref("/").child(roomname).update({
            purpose : "adding room name"
      });

            localStorage.setItem("roomname", roomname);
            window.location = "kwitter_page.html";


    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


      //Start code

      console.log("Room_name - " + Room_names);
      row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;


 

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname"); 
      window.location = "index.html";
}

