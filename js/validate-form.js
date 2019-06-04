// Detect errors after form submission attempt and reset class name to 'form-group'
function clearErrors() {    
    for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateItems() {
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    
    if ( name == "" || !isNaN(name) ) {
        alert("Name must not be left blank and cannot be a number.");
        document.forms["contactForm"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    
    if ( email == "" || typeof email !== 'string' ) {
       alert("Email must not be left blank.");
       document.forms["contactForm"]["email"]
          .parentElement.className = "form-group has-error";
       document.forms["contactForm"]["email"].focus();
       return false;
    }

    if ( phone == "" || isNaN(phone) ) {
        alert("Phone must be a valid number.");
        document.forms["contactForm"]["phone"]
          .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
   
    return false;
}