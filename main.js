
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgTyO3-BGwHHCNde-jyHKYirjd2At7hVM",
    authDomain: "contactform-b86e3.firebaseapp.com",
    databaseURL: "https://contactform-b86e3.firebaseio.com",
    projectId: "contactform-b86e3",
    storageBucket: "contactform-b86e3.appspot.com",
    messagingSenderId: "211904190522",
    appId: "1:211904190522:web:15a6ee8eda90e928d57d03",
    measurementId: "G-16WBXMFJMR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference message collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  console.log("clicked");
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }