let emailInput = document.getElementById("emailInput")
let passwdInput = document.getElementById("passwdInput")
let submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", getFormData)

function getFormData(event) {
    event.preventDefault()

    var emailValue = emailInput.value.trim()
    var passwdValue = passwdInput.value.trim()

    console.log(emailValue)
    console.log(passwdValue)
    alert("Email: " + emailValue + "\nSenha: " + passwdValue)
    window.location.href = "./pages/error.html"
}