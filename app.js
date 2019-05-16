// inputs
const inputValue = document.getElementById("input-value");
const roundingValue = document.getElementById("rounding-value");
const resultsValue = document.getElementById("result");

// buttons
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");

// Event listener logic for calculate button or enter key
calculateBtn.addEventListener("click", function (e) {
    // execute rounding function
    // if (inputValue.value !== "" && inputValue.value < 0)
    roundingCalc(inputValue.value, roundingValue.value);
});

// Event listener logic for enter key within input MAYBE
// Event listener logic for reset button

// rounding function
function roundingCalc(inputVal, roundingVal) {
    const remainder = inputVal % roundingVal;
    const baseNum = inputVal - remainder;
    roundingVal = parseInt(roundingVal);

    console.log({
        baseNum,
        remainder
    });

    if ((remainder >= (roundingVal / 2))) {
        // round up
        console.log('rounding up');

        console.log({
            baseNum: typeof baseNum,
            roundingVal: typeof roundingVal
        });
        const result = baseNum + roundingVal;
        console.log(result);
        resultsValue.innerText = (baseNum + roundingVal).toString();

    } else {
        // round down
        console.log('rounding down');
        resultsValue.innerText = baseNum.toString();
    }



}