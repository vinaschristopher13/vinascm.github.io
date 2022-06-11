function validation(){
  var fname = document.getElementById("fname").value;
  var email= document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var regName = /^[a-zA-Z]+$/;

  if (fname == "") {
      alert("Please Enter your Name!");
      return (false);
    }
    if(!regName.test(fname)){
      alert("The name can only contain letters");
     return (false);
  }
    if (email == "") {
      alert("Please Enter your E-mail!");
      return (false);
    }
    if (message == "") {
      alert("Please Enter your Message!");
      return (false);
    }
    
  window.alert("Your Message is Submitted Successfully!");
  window.alert("Thank you!");
  return (true);
}
validation();

  

