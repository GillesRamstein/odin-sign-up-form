passwordInput = document.querySelector('input[name="password"]')
passwordMessage = document.querySelector('.password-message')
pwdConfirmInput = document.querySelector('input[name="pwd-confirm"]')

passwordInput.addEventListener("input", onChange)

function onChange (e) {
    pwdConfirmInput.setAttribute("pattern", this.value.replace(/[$^+()]/, "\\$&"))
    console.log(pwdConfirmInput)
    console.log(passwordInput.validity.valid)
    if (passwordInput.validity.valid === false) {
        passwordMessage.classList.remove("hidden")
    } else {
        passwordMessage.classList.add("hidden")
    }
}