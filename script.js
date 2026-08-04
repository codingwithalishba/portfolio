// =============================
// Calculator Pro - script.js
// =============================

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

let expression = "";

// =============================
// Load Saved History
// =============================

loadHistory();

// =============================
// Button Click Events
// =============================

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        switch (value) {

            case "AC":
                expression = "";
                display.value = "";
                break;

            case "DEL":
                expression = expression.slice(0, -1);
                display.value = expression;
                break;

            case "=":
                calculate();
                break;

            default:
                expression += value;
                display.value = expression;
        }

    });

});

// =============================
// Calculate
// =============================

function calculate() {

    if (expression === "") return;

    try {

        const originalExpression = expression;

        const result = eval(expression);

        display.value = result;

        expression = result.toString();

        addHistory(originalExpression, result);

    }

    catch {

        display.value = "Error";
        expression = "";

    }

}

// =============================
// Add History
// =============================

function addHistory(exp, result) {

    const item = document.createElement("li");

    item.textContent = `${exp} = ${result}`;

    historyList.prepend(item);

    saveHistory();

}

// =============================
// Save History
// =============================

function saveHistory() {

    localStorage.setItem(
        "calculatorHistory",
        historyList.innerHTML
    );

}

// =============================
// Load History
// =============================

function loadHistory() {

    const saved = localStorage.getItem("calculatorHistory");

    if (saved) {

        historyList.innerHTML = saved;

    }

}

// =============================
// Clear History
// =============================

clearHistory.addEventListener("click", () => {

    historyList.innerHTML = "";

    localStorage.removeItem("calculatorHistory");

});

// =============================
// Keyboard Support
// =============================

document.addEventListener("keydown", (e) => {

    const allowed = [
        "+",
        "-",
        "*",
        "/",
        "%",
        "."
    ];

    if (
        (e.key >= "0" && e.key <= "9") ||
        allowed.includes(e.key)
    ) {

        expression += e.key;
        display.value = expression;

    }

    else if (e.key === "Enter") {

        e.preventDefault();

        calculate();

    }

    else if (e.key === "Backspace") {

        expression = expression.slice(0, -1);

        display.value = expression;

    }

    else if (e.key === "Escape") {

        expression = "";

        display.value = "";

    }

});