//1
let count = 0;
const button = document.getElementById("click-button");
const counterDisplay = document.getElementById("counter");
button.addEventListener('click', function() {
count += 1;
counterDisplay.innerHTML = count;
});

//2
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const error = document.getElementById("error-message");
emailInput.addEventListener('input', function() {
const emailValue = emailInput.value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailValue)) {
error.style.display = 'block';
error.classList.remove('error');
submitBtn.disabled = true;
} else {
    error.classList.add('valid');
    submitBtn.disabled = false;
}
return emailPattern.test(emailValue)
});

