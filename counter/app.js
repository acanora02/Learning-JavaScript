const decrease = document.getElementById("decrease-btn");
const reset = document.getElementById("reset-btn");
const increase = document.getElementById("increase-btn");

const number = document.querySelector(".counter-text");

decrease.addEventListener("click", function () {
    number.textContent--;
    changeColor()
});

reset.addEventListener("click", function () {
    number.textContent = 0;
    changeColor();
});

increase.addEventListener("click", function () {
    number.textContent++;
    changeColor();
});

function changeColor() {
    if (number.textContent > 0) number.style.color = "green";
    else if (number.textContent < 0) number.style.color = "red";
    else if (number.textContent == 0) number.style.color = "#222";
}