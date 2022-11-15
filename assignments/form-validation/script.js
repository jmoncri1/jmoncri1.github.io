
// form has a first name and last name input
    //both are required fields
    //if empty, error message reads: "Required fields must have a value that is not empty or whitespace."
    //must be alphabetic, if not alphabetic, error message reads : "Alphabetic fields must be a series of alphabetic characters."
// form has a gender input
    //gender is not required
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