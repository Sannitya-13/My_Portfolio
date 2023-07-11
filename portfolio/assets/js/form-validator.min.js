const form = document.querySelector('#form'),
    username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    password2 = document.querySelector('#password2');

const showError = (input, message, input2) => {
    const formControl = input.parentElement; // Возвращает колекцию 
    formControl.className = "form-control error"; // ClassName для колекций 
    const small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = input => {
    const formControl = input.parentElement; // Возвращает колекцию 
    formControl.className = "form-control success"; // ClassName для колекций 
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isPasswordsSame = (password, password2) => {
    if (password2.value !== '' && password2.value == password.value) {
        return true
    } else {
        return false
    }
}

const isValid = input => {
    if (input.value !== '' && input.value.length >= 5) {
        showSuccess(input)
        isValidEmail(email.value) ? showSuccess(email) : showError(email, `${email.id} is no valid`)
        isPasswordsSame(password, password2) ? showSuccess(password2) : showError(password2, `${password2.id.charAt(0).toUpperCase() + password2.id.slice(1)} is not same`)
    } else {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1,input.id.length)}  is required( min . 3 characters ) `)
    }
}

const checkRequired = inputArr => {
    inputArr.forEach((input, i) => {
        isValid(input)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2])
})
