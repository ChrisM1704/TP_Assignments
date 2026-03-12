function validateFname(){
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    // check if first name field is empty
    if (fname == ""){
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
         return false;
    }

      else if (fname != ""){
    if (!fname.match(namePattern)) { // checks if first name matches the pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
         return false;
    }

      else if (fname.length > 2){ // check if first doesnt have more than 2 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
      }

      else if (fname.length > 30){ // check if first doesnt have more than 30 characters
        document.getElementById("fname-error").innerHTML ="First name cannot be more than 30 characters.";
        return false;
      }
     else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
     }
      

      }
}