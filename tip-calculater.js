const billInput = document.querySelector("#Bill");
const buttons = document.querySelectorAll(".butn");
const resetButton = document.querySelector("#rst");
const personInput = document.querySelector(".person");
let tipValue = document.querySelector(".tip-value");
let totalAmount = document.querySelector(".fill-tamnt");
let errorDisplay = document.querySelector(".error");
const customTipInput = document.querySelector("#custom");

let tipPercentage = 0;

function calculate(bill, person, tipPercentage) {
    const onePersonAmount = bill / person;
    const tipAmount = onePersonAmount * (tipPercentage / 100);
    const totalOfPerson = onePersonAmount + tipAmount;

    tipValue.innerHTML = tipAmount.toFixed(2) + "$";
    totalAmount.innerHTML = totalOfPerson.toFixed(2) + "$";
    errorDisplay.innerText = "";
    errorDisplay.style.border = "none";
}

function calculateBill() {
    const bill = parseFloat(billInput.value);
    const person = parseInt(personInput.value);

    if ( person <= 1) {
        errorDisplay.innerText = "Enter a valid value.";
        personInput.style.border = "2px solid red";
    errorDisplay.style.Color="red";
        return;
    }

    calculate(bill, person, tipPercentage);
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        tipPercentage = parseFloat(button.innerText);
        calculateBill();
    });
});


customTipInput.addEventListener("input", () => {
    const bill = parseFloat(billInput.value);
    const person = parseInt(personInput.value);

    if (  person <= 0) {
        errorDisplay.innerText = "Enter a valid value.";
        return;
    }

    let customTipPercentage = parseFloat(customTipInput.value);

    if ( customTipPercentage < 0) {
        errorDisplay.innerText = "Enter a valid custom tip percentage.";
        return;
    }

    tipPercentage = customTipPercentage;
    calculate(bill, person, tipPercentage);
});

resetButton.addEventListener("click", () => {
    billInput.value = '';
    personInput.value = '';
    tipValue.innerHTML = '0.00$';
    totalAmount.innerText = '0.00$';
    errorDisplay.innerText = "";
    tipPercentage = "";
    personInput.style.border="none"
});

calculateBill(); 
