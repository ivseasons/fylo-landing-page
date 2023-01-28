const inputText = document.getElementById("email");
const errorMessage = document.getElementById("error");
const submitBtn = document.getElementById("submit");


submitBtn.addEventListener("click", () => {
    validateEmail()
})

// function validateEmail() {
//     const emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//     if(inputText.value.match(emailFormat)) {
//         inputText.value = ""
//     } else {
//         errorMessage.textContent = "Please provide a valid email"
//     }
// }

function validateEmail() {
    const emailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)$/;
    if(inputText.value.match(emailFormat)) {
        inputText.value = ""
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Please provide a valid email"
    }
}
