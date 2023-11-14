//YOUR FIREBASE LINKS

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
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
    }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data["name"];
         message = message_data['message'];
         like = message_data['like'];

         namewithtag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";

         messagewithtag = "<h4 class='messageh4'>" + message +"</h4>";

         likebutton = "<button class='btn btn-warning' id="+ firebase_message_id +" value="+ like +" onclick='updateLike(this.id)'>";

         spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"<span></button><hr>";

         row = namewithtag + messagewithtag + likebutton + spanwithtag;

         document.getElementById("output").innerHTML += row;

         


//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button - "+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      }); }
