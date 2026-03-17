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
function validateMname(){
 
    let Mname = document.getElementById("Mname").value;
    const namePattern = /^[A-Z]$/;
    Mname=Mname.toUpperCase
    document.getElementById("Mname").value = Mname;
    if (!Mname.match(namePattern)){
        document.getElementById("Mname-error").innerHTML= "Middle initial must be single uppercase letter.";
    return false;
    }
    else{
        document.getElementById("Mname-error").innerHTMl = "";
        return true;
    }
  }




    

    

function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    // check if Last name field is empty
    if (lname == ""){
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
         return false;
    }

      else if (fname != ""){
    if (!lname.match(namePattern)) { // checks if Last name matches the pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
         return false;
    }

      else if (lname.length > 2){ // check if Last doesnt have more than 2 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
      }

      else if (lname.length > 30){ // check if last doesnt have more than 30 characters
        document.getElementById("lname-error").innerHTML ="Last name cannot be more than 30 characters.";
        return false;
      }
     else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
     }
      

      }
}
// Javascript code for validating Date of Birth
function validateDOB(){
 DOB = document.getElementById("DOB");
  let date = new Date(DOB.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
  if (date > new Date()){
    document.getElementById("DOB-error").innerHTML = "Date cannot be in the future.";
    DOB.value="";
    return false;
  }
  else if (date < new Date(maxDate)){
    document.getElementById("DOB-error").innerHTML = "Date cannot be more than 120 years ago.";
    DOB.value="";
    return false;
  }
  else {
    document.getElementById("DOB-error").innerHTML = "";
    return true;
  }
}
 //Js code for social
 function validateSocial(){
  const social = document.getElementById("social").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  if (!ssnR.test(social)){
    document.getElementById("social-error").innerHTML ="Please enter a valid Social Security Number.";
    return false;
  }
  else {
    document.getElementById("social-error").innerHTML = "";
    return true;
  }
 }
 
 //Js code for validating Address 1
 function validateAddress1(){
  var ad1 = document.getElementById("address1").value
  console.log(ad1);
  console.log(ad1.length);
  if (ad1.length < 2){
    document.getElementById("address1-error").innerHTML ="Please enter your address on the address line.";
    return false;
  }
  else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
  }
 }
 //Js code for city
 function validateCity(){
  city = document.getElementById("city").value.trim();
  if (!city){
    document.getElementById("city-error").innerHTML = "City cannot be left blank";
    return false;
  }
  else{
    document.getElementById("city-error").innerHTML = "";
    return true;
  }
 }
 
 // Js code for zip code
 function validateZip(){
  const zipInput = document.getElementById("zip");
  let zip = zipInput.value.replace(/[^\d-]/g,"");
  if (!zip) {
    document.getElementById("zip-error").innerHTML = "Zip code cannot be left blank";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0,5) + "-" + zip.slice(5,9);
    }
    else {
      zip = zip.slice(0,5);
    }
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
 }