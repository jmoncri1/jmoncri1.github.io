
// form has a first name and last name input
    //both are required fields
    //if empty, error message reads: "Required fields must have a value that is not empty or whitespace."
    //must be alphabetic, if not alphabetic, error message reads : "Alphabetic fields must be a series of alphabetic characters."


for (const form of document.getElementsByTagName("form")) {
    form.addEventListener("submit", function(event) {
        form.parentNode.querySelector(".errors").innerText = "";
        const errors = []
        const inputs = form.getElementsByTagName("input")
        for(const input of inputs) {
            if(!input.classList.contains("required") && input.value.trim().length == 0) {
           continue
            }
            if (input.classList.contains("required") && input.value ==="") {
            errors.push("Required fields must have a value that is not empty or whitespace.");
            continue
            }
            //(regex) if the input is within the classes labeled "alphabetic" and any of the characters in the input are not letters a-z, error message shows
            if(input.classList.contains("alphabetic") && !/^[a-z]+$/i.test(input.value)) {
                errors.push("Alphabetic fields must be a series of alphabetic characters.");
            }
            //(regex)if the class of the input is numeric and if any of the input characters are not 0-9. error message shows
            if(input.classList.contains("numeric") && !/^[0-9]+$/.test(input.value) && input.classList.contains("required")) {
                errors.push("Numeric fields must be a series of numbers.");
            }
            if(input.classList.contains("required_size") && input.value.length < input.minLength) {
                errors.push("Required_size field lengths must exactly match the minlength attribute of that field.");
            }
            if(input.classList.contains("username") && input.value.length < 8) {
                errors.push("Username fields must contain at least 8 characters");
                continue
            }
            //(regex) if the class of the input is username and the characters of the input are not eaither 0-9 or a-z, not case sensitive, error message shows
            if(input.classList.contains("username") && !/^[0-9a-z]+$/i.test(input.value)) {
                errors.push("Username fields must contain only alphanumeric characters.");
            }
            //(regex) if the class of the input is date and the format is not ##/##/####, rerror message shows
            if(input.classList.contains("date") && !/\d{2}\/\d{2}\/\d{4}/.test(input.value)) {
                errors.push("Date fields must match the format of XX/XX/XXXX.");
            }
            //(regex) if input class is phone and characters are not in the exact format ###-###-####
            if(input.classList.contains('phone') && !/\d{3}\-\d{3}\-\d{4}/.test(input.value)) {
                errors.push("Phone fields must match the format of XXX-XXX-XXXX.");
            }

            if(input.classList.contains("password") && input.value.length < 8) {
                errors.push("password fields must contain at least 8 characters");
            }

            //(regex) if the input class is password, and the characters do not contain one or more each uppercase, lowercase, numbers, and special characters.
            if(input.classList.contains('password') && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(input.value)) {
                errors.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");
            }
        }
        if(errors.length > 0) {
            event.preventDefault();
            let finalErrorList = [...new Set(errors)];
            let errorList = document.createElement("ul");
            errorList.style = "color:red";
            for(const error of finalErrorList) {
                const listOfErrors = document.createElement("li");
                const errorText = document.createTextNode(error);
                listOfErrors.appendChild(errorText);
                errorList.appendChild(listOfErrors);
            }

          form.parentNode.querySelector(".errors").appendChild(errorList); 
    }
    })
}

    const firstname = document.getElementById("firstname").value;

    const validate = (e) => {
        e.preventDefault();
    }

    
// form must have username input
        // username is required
        // if empty error message reads: "Required fields must have a value that is not empty or whitespace."
        //username must me letters only
        // if non-alphanumeric characters are entered, the error message reads: "Username fields must contain only alphanumeric characters."
        // username must be at least 8 characters
        // if username entered is less than 8 characters, error message reads : "Username fields must contain at least 8 characters."

// form must have date of birth input
        //date of birth must be in MM/DD/YYYY
        // if incorrect format, error message reads :"Date fields must match the format of XX/XX/XXXX."

// form must have phone number input
    /* type of input is numeric, when a non numeric character is entered, the error message reads:"Numeric fields
    must be a series of numbers."*/
    // format must be ###-###-####
    //if phone number is not in correct format, error message reads: "Phone fields must match the format of XXX-XXX-XXXX."

// form must have password input
    // password is required
    //password must be at least 8 characters long
    /* if the password is too short, the error message reads :"Required_size field lengths must exactly match the minlength attribute of that
        field."*/
    /* password must contain uppercase, lowercase, letters, numbers, special characters , if not, error message reads: "Password fields must
    contain one or more of each of the following types: uppercase letters, lowercase
    letters, numbers, special characters."*/

// form must have a div with all error messages displayed
        // error messages must be in an unordered list
        //error messages must be in red




/*questions:
 #5- multiple forms?

 */





































/**1. Given there are errors somewhere on a form, when the "Validate" input button for
that form is clicked, then all error messages from this form will appear in the div
with class "errors" immediately preceding the form.

2. Given the "Validate" input button for a form has been clicked, when errors exist,
then they are displayed in an unordered list, with red text.

3. Given there are errors somewhere on a form, when the "Validate" input button for
that form is clicked, then the form is not submitted.

4. Given there are no errors on the form, when the "Validate" input button for that
form is clicked, then the form is submitted.

5. Given there are multiple forms on a page, when the "Validate" input button for any
form is clicked, then only that form will run through validation.

6. Given an input of type "text" has a class of "required", and given nothing or only
whitespace characters (spaces, tabs) has been entered into this input, when this
form's validation runs, then an error appears in the correct location, and the error
text says "Required fields must have a value that is not empty or whitespace."

7. Given an input of type "text" does not have a class of "required", and given
nothing has been entered into this input, when this form's validation runs, then no
error will appear from this input.

8. Given an input of type "text" has a class of "numeric", and given a non-numeric
character has been entered into this input, when this form's validation runs, then
an error appears in the correct location, and the error text says "Numeric fields
must be a series of numbers."

9. Given an input of type "text" has a class of "required_size", and given the input
has a minlength attribute, and given text has been entered with a length that does
not exactly match the minlength attribute's value, when this form's validation
runs, then an error appears in the correct location, and the error text says
"Required_size field lengths must exactly match the minlength attribute of that
field."

10.Given an input of type "text" has a class of "username", and given a
non-alphanumeric character has been entered into this input, when this form's
validation runs, then an error appears in the correct location, and the error text
says "Username fields must contain only alphanumeric characters."



11.Given an input of type "text" has a class of "username", and given fewer than
eight characters have been entered into this input, when this form's validation
runs, then an error appears in the correct location, and the error text says
"Username fields must contain at least 8 characters."

12.Given an input of type "text" has a class of "date", and given an entry that does
not match the "XX/XX/XXXX" format has been entered into this input, when this
form's validation runs, then an error appears in the correct location, and the error
text says "Date fields must match the format of XX/XX/XXXX."

13.Given an input of type "text" has a class of "phone", and given an entry that does
not match the "XXX-XXX-XXXX" format has been entered into this input, when this
form's validation runs, then an error appears in the correct location, and the error
text says "Phone fields must match the format of XXX-XXX-XXXX."

14.Given an input of type "text" has a class of "password", and an entry that does not
contain one of: (uppercase letter, lowercase letter, number, special character) has
been entered into this input, when this form's validation runs, then an error
appears in the correct location, and the error text says "Password fields must
contain one or more of each of the following types: uppercase letters, lowercase
letters, numbers, special characters."

15.Given an input of type "text" has a class of "alphabetic", and given a
non-alphabetic character has been entered into this input, when this form's
validation runs, then an error appears in the correct location, and the error text
says "Alphabetic fields must be a series of alphabetic characters."

16.Given an input of type "text" has multiple classes, when this form's validation
runs, then all pertinent validation for this input is run:
a. For example, if an input has alphabetic and required_size, then both the
alphabetic validation and required_size validation would need to run. */