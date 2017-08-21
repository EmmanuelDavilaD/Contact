//listen for form submit

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYs4GWwbND5y5EHaOQdx7jIitaHtor8aY",
    authDomain: "contact-form-caa58.firebaseapp.com",
    databaseURL: "https://contact-form-caa58.firebaseio.com",
    projectId: "contact-form-caa58",
    storageBucket: "contact-form-caa58.appspot.com",
    messagingSenderId: "13362078557"
  };
  firebase.initializeApp(config);


  //references messages collection
  var messageRef = firebase.database().ref('message');



document.getElementById('contact-form').addEventListener('submit', submitForm);


//submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    //save message
    saveMessage(name, company, email, phone, message);

    

}

// function to get form values

function getInputVal(id){
   return document.getElementById(id).value; 
}

// save message to firebase

function saveMessage(name, company, email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}