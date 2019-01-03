// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });

function login(e){  
   

    var config = {
        apiKey: "AIzaSyAW5O9xH1OA-A1zOxsaW8nnp4eeNAWU26E",
        authDomain: "registration-14b14.firebaseapp.com",
        databaseURL: "https://registration-14b14.firebaseio.com",
        projectId: "registration-14b14",
        storageBucket: "registration-14b14.appspot.com",
        messagingSenderId: "954270630916"
      };
      firebase.initializeApp(config);  
    var schoolName = document.getElementById("schoolname").value;
    var schoolCode = document.getElementById("schoolcode").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var mobilenumber = document.getElementById("mobilenumber").value;
    var landlinenumber = document.getElementById("landlinenumber").value;
    var Alternatenumber = document.getElementById("Alternatenumber").value;
    var Syllabus = document.getElementById("Syllabus").value;
    var classes = document.getElementById("classes").value;
    
    var database = firebase.database();


    var ref = database.ref("registration");
    var data = {
        schoolName:schoolName,
        schoolCode:schoolCode,
        address:address,
        city:city,
        mobilenumber:mobilenumber,
        landlinenumber:landlinenumber,
        Alternatenumber:Alternatenumber,
        Syllabus:Syllabus,
        classes:classes,
        
    }

    ref.push(data);
    alert(data)
    // event.preventDefault();
      console.log(data)
}

