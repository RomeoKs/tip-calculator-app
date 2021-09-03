//buttons not document for addEventListener
//on click customTip should retrieve older input value

var billAmount = document.querySelector("#bill");
var numberOfPeople = document.querySelector("#persons");
let numberOfPeopleInput = document.querySelector("#persons");
const personInput = document.querySelector("#persons");
let billInput = document.querySelector("#bill");

const errorIfZeroPeople = document.querySelector(".persons p");
const errorIfZeroAmount = document.querySelector(".input-amount-zero");
const errorIfZeroTipCustom = document.querySelector(".custom-input-amount-zero");

const tipButtons = document.querySelectorAll(".btn.btn-tip-percent");
let customTip = document.querySelector("#customTip");
let customTipInput = document.querySelector("#customTip");
const active = "btn.btn-tip-percent active";

const tipAmountValue = document.querySelector(".tip-amount-value span");
const totalPersonValue = document.querySelector(".total-person-value span");

var tipAmount, persons, tipAmountPerPerson, totalPerPerson;

const resetBtn = document.getElementById("resetBtn");

const splitterTip = () => {
    //Check and extract the amount of the bill
    billAmount.addEventListener("input", updateValueAmount);
    function updateValueAmount(e) {
        billAmount = e.target.value;
        function checkIfZeroAmount() {
            if (billAmount == 0) {
                billInput.classList.add("error");
                errorIfZeroAmount.style.display = "block";
                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            } else {
                billInput.classList.remove("error");
                errorIfZeroAmount.style.display = "none";
            }
        }

        checkIfZeroAmount();
    }

    //Tip buttons states and value extraction
    tipButtons.forEach((button) => {
        button.addEventListener("click", function () {
            tipButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            tipAmount = button.value;
        });
    });

    //Check custom input and extract the value

    customTip.addEventListener("input", updateValueCustom);
    function updateValueCustom(e) {
        customTip = e.target.value;
        function updateValueCustom() {
            if (customTip == 0) {
                customTipInput.classList.add("error");
                errorIfZeroTipCustom.style.display = "block";
                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            } else {
                customTipInput.classList.remove("error");
                errorIfZeroTipCustom.style.display = "none";
            }
        }
        tipAmount = customTip / 100;
        updateValueCustom();
    }
    console.log(tipAmount);
    //Remove active state or buttons if input is clicked
    customTip.addEventListener("click", () => {
        tipButtons.forEach(() => {
            tipButtons.forEach((button) => button.classList.remove("active"));
        });
    });
    //Custom tip value extraction
    customTip.addEventListener("input", updateTipInput);
    function updateTipInput(e) {
        customTip = e.target.value;
    }

    //Check and extract number of people
    numberOfPeople.addEventListener("input", updateValue);
    function updateValue(e) {
        numberOfPeople = e.target.value;
        function checkIfZeroPeople() {
            if (numberOfPeople == 0) {
                personInput.classList.add("error");
                errorIfZeroPeople.style.display = "block";
            } else {
                personInput.classList.remove("error");
                errorIfZeroPeople.style.display = "none";
            }
        }
        persons = numberOfPeople;
        checkIfZeroPeople();
    }

    //Tip Calculator

    const tipCalculator = () => {
        billAmount.addEventListener("input", function () {
            if (!billAmount == 0 && !tipAmount == 0 && !persons == 0 && !customTip == 0) {
                tipAmountPerPerson = (billAmount * tipAmount) / numberOfPeople;
                tipAmountValue.textContent = tipAmountPerPerson.toFixed(2);

                totalPerPerson = billAmount / numberOfPeople + tipAmountPerPerson;
                totalPersonValue.textContent = totalPerPerson.toFixed(2);

                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            } else {
                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            }
        });

        document.addEventListener("click", function () {
            if (!billAmount == 0 && !tipAmount == 0 && !persons == 0 && !customTip == 0) {
                tipAmountPerPerson = (billAmount * tipAmount) / numberOfPeople;
                tipAmountValue.textContent = tipAmountPerPerson.toFixed(2);
                totalPerPerson = billAmount / numberOfPeople + tipAmountPerPerson;
                totalPersonValue.textContent = totalPerPerson.toFixed(2);

                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            }
        });

        customTip.addEventListener("input", function () {
            if (!billAmount == 0 && !tipAmount == 0 && !persons == 0 && !customTip == 0) {
                tipAmountPerPerson = (billAmount * tipAmount) / numberOfPeople;
                tipAmountValue.textContent = tipAmountPerPerson.toFixed(2);

                totalPerPerson = billAmount / numberOfPeople + tipAmountPerPerson;
                totalPersonValue.textContent = totalPerPerson.toFixed(2);

                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            } else {
                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            }
        });
        customTip.addEventListener("click", function () {
            if (!billAmount == 0 && !tipAmount == 0 && !persons == 0 && !customTip == 0) {
                tipAmountPerPerson = (billAmount * tipAmount) / numberOfPeople;
                tipAmountValue.textContent = tipAmountPerPerson.toFixed(2);

                totalPerPerson = billAmount / numberOfPeople + tipAmountPerPerson;
                totalPersonValue.textContent = totalPerPerson.toFixed(2);

                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            } else {
                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            }
        });
        numberOfPeople.addEventListener("input", function () {
            if (!billAmount == 0 && !tipAmount == 0 && !persons == 0 && !customTip == 0) {
                tipAmountPerPerson = (billAmount * tipAmount) / numberOfPeople;
                tipAmountValue.textContent = tipAmountPerPerson;
                totalPerPerson = billAmount / numberOfPeople + tipAmountPerPerson;
                totalPersonValue.textContent = totalPerPerson.toFixed(2);

                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            } else {
                //Add normal state to RESET button
                resetBtn.classList.remove("empty");
                resetBtn.classList.add("active");
            }
        });

        //Reset calculator
        const reset = () => {
            resetBtn.addEventListener("click", function () {
                billInput.value = " ";
                customTipInput.value = " ";
                numberOfPeopleInput.value = " ";

                tipAmountValue.textContent = "0.00";
                totalPersonValue.textContent = "0.00";

                resetBtn.classList.add("empty");
                resetBtn.classList.remove("active");

                billInput.classList.remove("error");
                errorIfZeroAmount.style.display = "none";

                customTipInput.classList.remove("error");
                errorIfZeroTipCustom.style.display = "none";

                personInput.classList.remove("error");
                errorIfZeroPeople.style.display = "none";

                tipButtons.forEach((button) => {
                    tipButtons.forEach((btn) => btn.classList.remove("active"));
                    button.classList.remove("active");
                    tipAmount = button.value;
                });
            });
        };
        reset();
    };
    tipCalculator();
};

splitterTip();
