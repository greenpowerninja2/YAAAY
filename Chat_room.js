
var firebaseConfig = {
    apiKey: "AIzaSyBWAn-YF9tWQxdFk7sfG_A8Np50M41pvXw",
    authDomain: "projectplzwork-a43c1.firebaseapp.com",
    databaseURL: "https://projectplzwork-a43c1-default-rtdb.firebaseio.com",
    projectId: "projectplzwork-a43c1",
    storageBucket: "projectplzwork-a43c1.appspot.com",
    messagingSenderId: "404036150912",
    appId: "1:404036150912:web:fa8fd820ca02ab1625a865"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem("user_name");

function addRoom()
{
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "chatpage.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatpage.html";
}