
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
 msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

});

document.getElementById("msg").value = "";
}