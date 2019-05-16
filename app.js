// inputs
const inputValue = document.getElementById("input-value");
const roundingValue = document.getElementById("rounding-value");
const resultsValue = document.getElementById("result");

// buttons
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");

function checkValidity() {
    // execute rounding function
    if (inputValue.value !== "" && inputValue.value > 0 && roundingValue.value !== "" && roundingValue.value > 0) {
        roundingCalc(inputValue.value, roundingValue.value);

        inputValue.classList.remove("is-invalid");
        inputValue.classList.add("is-valid");

        roundingValue.classList.remove("is-invalid");
        roundingValue.classList.add("is-valid");



    } else {
        if (inputValue.value === "" || inputValue < 0) {
            // add invalid class to inputValue
            inputValue.classList.remove("is-valid");
            inputValue.classList.add("is-invalid");
        }

        if (roundingValue.value === "" || roundingValue.value < 0) {
            // add invalid class to roundingValue
            roundingValue.classList.remove("is-valid");
            roundingValue.classList.add("is-invalid");
        }
    }
}

// Event listener logic for calculate button or enter key
calculateBtn.addEventListener("click", function (e) {
    checkValidity();
});

// Event listener logic for enter key within submittable input
const submittableInputs = document.getElementsByClassName("submittable");

// looop through submittable inputs to listen for enter key
for (let input of submittableInputs) {
    input.addEventListener("keyup", function (e) {
        if (e.code === "Enter") {
            checkValidity();
        }
    });
}

// Event listener logic for reset button
resetBtn.addEventListener("click", function (e) {
    // loop through inputs for reset
    const inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
        input.value = "";
    }

    // reset validity classes
    const submittableInputs = document.getElementsByClassName("submittable");
    for (let input of submittableInputs) {
        input.classList.remove("is-invalid");
        input.classList.remove("is-valid");
    }
});

// rounding function
function roundingCalc(inputVal, roundingVal) {
    const remainder = inputVal % roundingVal;
    const baseNum = inputVal - remainder;
    roundingVal = parseInt(roundingVal);

    if ((remainder >= (roundingVal / 2))) {
        // round up
        resultsValue.value = baseNum + roundingVal

    } else {
        // round down
        resultsValue.value = baseNum
    }



}