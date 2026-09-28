let count = 0;

const countDisplay = document.querySelector(".count-box span");
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const message = document.querySelector(".message");

increaseButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
    message.textContent = "Count increased 👍";
});

decreaseButton.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
    message.textContent = "Count decreased 👇";
});

resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
    message.textContent = "Start counting!";
});