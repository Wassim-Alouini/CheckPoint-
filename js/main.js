document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault()
    submit()
  }
)

var firebaseConfig = {
    apiKey: "AIzaSyBzWlykqjM_N9l5F7HbrxrguBFNIov_o10",
    authDomain: "submit-form-bd806.firebaseapp.com",
    databaseURL: "https://submit-form-bd806.firebaseio.com",
    projectId: "submit-form-bd806",
    storageBucket: "",
    messagingSenderId: "872946452517",
    appId: "1:872946452517:web:5623acee8c09a3a9"
  };

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let ref = database.ref("forms")

function submit(){

let data = {
  name : document.getElementById("Name").value ,
  mail : document.getElementById("Email").value ,
  pn : document.getElementById("Phone-number").value ,
  school : document.getElementById("Unischool").value ,
  course : document.getElementById("courses").value
}
ref.push(data);
}
