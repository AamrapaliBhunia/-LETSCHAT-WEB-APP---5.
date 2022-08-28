
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCTS6AOI0hWPfi-ePBpM-L7vK8ip5pzq6A",
    authDomain: "letschat-web-app-ab7a7.firebaseapp.com",
    databaseURL: "https://letschat-web-app-ab7a7-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-ab7a7",
    storageBucket: "letschat-web-app-ab7a7.appspot.com",
    messagingSenderId: "146274975777",
    appId: "1:146274975777:web:612b73a1aab7fc891de360"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome"+ user_name +"!";



function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose :"adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="index3.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row ="<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.ad)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", romm_name);
window.location ="index3.html";
}


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}