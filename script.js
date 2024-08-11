document.addEventListener('DOMContentLoaded', function() {

    //Form Selection
    const form = document.getElementById("registration-form");

    const feedbackDiv =document.getElementById("form-feedback");

     //Form Submission and Event Prevention

     form.addEventListener('submit', function(event){
        event.preventDefault();

        //Input Retrieval and Trimming

     const username = document.getElementById('username').value.trim();
     const email= document.getElementById('email').value.trim();
     const password= document.getElementById('password').value.trim();

     let isValid = true;
     let messages = [];
     
   //   Username Validation
     if(username.length < 3){

      isValid = false;
      messages.push("Username must be at least be 3 characters long.");
     }

     // Email Validation

     if(!email.includes("@") || !email.includes(".")){

      isValid = false;
      messages.push('Please enter a valid a valid email address, containing "." and "@" .');
     }

     //Password Validation

     if(password.length < 8){

      isValid = false;
      messages.push("Password must be at least 8 characters long.");
     }

     //Feedback Display Logic

     if(isValid) {

      feedbackDiv.style.display = 'block';
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.textContent = "Registration successful!";

     }else{
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = messages.join('<br>');
     }
     


   
     });


     

})