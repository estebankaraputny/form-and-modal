//OBTENEMOS FORMULARIO
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
event.preventDefault(); // Evita el envío del formulario

//LIMPIAMOS MENSAJES PREVIOS

document.getElementById("formSuccess").textContent = "";

const errors = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    subscribe: ""
};


//OBTENER VALORES DE LOS INPUTS


const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const birthday = document.getElementById("birthdate");

// Ejemplo de cómo obtener los valores:
console.log(firstName.value);
console.log(lastName.value);
console.log(userName.value);
console.log(password.value);
console.log(confirmPassword.value);
console.log(birthday.value);

//OBTENER VALORES DE LOS INPUTS COMO STRING
const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const userNameValue = userName.value.trim();
const passwordValue = password.value.trim();
const confirmPasswordValue = confirmPassword.value.trim();
const birthdayValue = birthday.value.trim();


//VALIDACIONES

    
    if (!firstNameValue){
        errors.firstName = "First name is required";
    } else if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(firstNameValue)) {
        errors.firstName = "First name must contain only letters and spaces";
    }

    if (!lastNameValue) {
        errors.lastName = "Last name is required";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(lastNameValue)) {
        errors.lastName = "Last name must contain only letters and spaces";
    }

    if (!userNameValue){
        errors.userName = "Username is required";
    } else if (userNameValue.length < 4 || userNameValue.length > 20) {
        errors.userName = "Username must be between 4 and 20 characters";
    }

    if (!passwordValue) {
        errors.password = "Password is required";
    } else if (passwordValue.length < 8 || passwordValue.length > 20) {
        errors.password = "Password must be between 8 and 20 characters";
    } else if (!/[A-Z]/.test(passwordValue)) {
        errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(passwordValue)) {
        errors.password = "Password must contain at least one lowercase letter";
    } else if (!/\d/.test(passwordValue)) {
        errors.password = "Password must contain at least one number";
    } else if (!/[@$!%*?&]/.test(passwordValue)) {
        errors.password = "Password must contain at least one special character (@, $, !, %, *, ?, &)";
    }

    if (!confirmPasswordValue) {
        errors.confirmPassword = "Confirm password is required";
    } else if (confirmPasswordValue !== passwordValue) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (!birthdayValue) {
        errors.birthday = "Birthday is required";
    } else {
        const today = new Date();
        const birthDate = new Date(birthdayValue);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            errors.birthday = "You must be at least 18 years old";
        }
}

     // Mostrar errores
    let hasError = false;
    for (const field in errors) {
        const errorDiv = document.getElementById(field + 'Error');
        if (errorDiv) {
            if (errors[field]) {
                errorDiv.textContent = errors[field];
                hasError = true;
            } else {
                errorDiv.textContent = '';
            }
        }
    }


    // Mostrar mensaje de éxito
    if (!hasError) {   
        document.getElementById("formSuccess").textContent = "¡Registro exitoso!";
        form.reset(); // Limpiar el formulario
    }


});