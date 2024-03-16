var firebaseConfig = {
    apiKey: "AIzaSyBXafQIZ6nJ2i5naOxKU-44rJO0iygA-TE",
    authDomain: "kwitter-7094b.firebaseapp.com",
    databaseURL: "https://kwitter-7094b-default-rtdb.firebaseio.com",
    projectId: "kwitter-7094b",
    storageBucket: "kwitter-7094b.appspot.com",
    messagingSenderId: "265017369964",
    appId: "1:265017369964:web:7c4097551c04549b0cbf49"
  };


firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



