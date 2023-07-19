const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let prevResult = "";

function updateDisplay() {
    display.value = prevResult;
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const clickedButton = event.target;

        const message = clickedButton.getAttribute("data-message");

        if (!isNaN(parseFloat(message)) || message === ".") {
            prevResult += message;
        } else if (message === "AC") {
            prevResult = "";
        } else if (message === "equals") {
            try {
                prevResult = eval(prevResult).toString();
            } catch (error) {
                prevResult = "Error";
            }
        } else if (message === "Ans") {
            prevResult += prevResult;
        } else {
            prevResult += message;
        }

        updateDisplay();
    });
});