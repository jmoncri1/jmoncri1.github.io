
// form has a first name and last name input
//both are required fields
//if empty, error message reads: "Required fields must have a value that is not empty or whitespace."
//must be alphabetic, if not alphabetic, error message reads : "Alphabetic fields must be a series of alphabetic characters."


for (const form of document.getElementsByTagName("form")) {
    form.addEventListener("submit", function (event) {
        form.parentNode.querySelector(".errors").innerText = "";
        const errors = []
        const inputs = form.getElementsByTagName("input")

        for (const input of inputs) {
             if (!input.classList.contains("required") && input.value.trim().length == 0) {
             }
             else {
            //regex checks for spaces/whitespace
            if (input.classList.contains("required") && !input.classList.contains("required_size") && input.value.trim().length === 0) {
                errors.push("Required fields must have a value that is not empty or whitespace.");

            } else { }

            //(regex) if the input is within the classes labeled "alphabetic" and any of the characters in the input are not letters a-z, error message shows
            if (input.classList.contains("alphabetic") && !/[A-za-z]/.test(input.value)) {
                errors.push("Alphabetic fields must be a series of alphabetic characters.");
            }

            //(regex)if the class of the input is numeric and if any of the input characters are not 0-9. error message shows
            if (input.classList.contains("numeric") && !/^[0-9]+$/.test(input.value)) {
                errors.push("Numeric fields must be a series of numbers.");
            }

            if (input.classList.contains("required_size") && input.value.length !== input.minLength) {
                errors.push("Required_size field lengths must exactly match the minlength attribute of that field.");
            }

            if (input.classList.contains("username") && input.value.length < 8) {
                errors.push("Username fields must contain at least 8 characters.");
                continue
            }

            //(regex) if the class of the input is username and the characters of the input are not eaither 0-9 or a-z, not case sensitive, error message shows
            if (input.classList.contains("username") && !/^[0-9a-z]+$/i.test(input.value)) {
                errors.push("Username fields must contain only alphanumeric characters.");
            }

            //(regex) if the class of the input is date and the format is not ##/##/####, rerror message shows
            if (input.classList.contains("date") && !/^\d{2}\/\d{2}\/\d{4}$/.test(input.value)) {
                errors.push("Date fields must match the format of XX/XX/XXXX.");
            }

            //(regex) if input class is phone and characters are not in the exact format ###-###-####
            if (input.classList.contains('phone') && !/^\d{3}\-\d{3}\-\d{4}$/.test(input.value)) {
                errors.push("Phone fields must match the format of XXX-XXX-XXXX.");
            }

            if (input.classList.contains("password") && input.value.length < 8) {
                errors.push("password fields must contain at least 8 characters");
            }

            //(regex) if the input class is password, and the characters do not contain one or more each uppercase, lowercase, numbers, and special characters.
            if (input.classList.contains('password') && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(input.value)) {
                errors.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");
            }

        }
        if (errors.length > 0) {
            event.preventDefault();
            let finalErrorList = [...new Set(errors)];
            let errorList = document.createElement("ul");
            errorList.style = "color:red";
            for (const error of finalErrorList) {
                const listOfErrors = document.createElement("li");
                const errorText = document.createTextNode(error);
                listOfErrors.appendChild(errorText);
                errorList.appendChild(listOfErrors);
            }

            form.parentNode.querySelector(".errors").appendChild(errorList);
        }
    })
}

