// Updates HTML with percentage rate from slider bar
function getPercent() {
    var rate = document.getElementById("rate").value;
    var percent = document.getElementById("percent");
    percent.innerHTML = rate + "%";
}

// Writes formatted result message to HTML
function printResult(p, r, t, a) {
    var year = Number(new Date().getFullYear());

    var message = `
    If you deposit ${p},<br>
    at an interest rate of ${r}%.<br>
    You will receive an amount of ${a},<br>
    in the year ${year + t}`;

    var result = document.getElementById("result");
    result.innerHTML = message;
}

function resetResult() {
    var result = document.getElementById("result");
    result.innerHTML = "";
}

// Computes simple interest
function compute() {
    var areInputsValid = true;
    // get and validate principal
    var principal = document.getElementById("principal");
    var p = parseFloat(principal.value);
    if (isNaN(p) || p < 0) {
        areInputsValid = false;
        principal.focus();
    }
    // get percentage / rate
    var r = document.getElementById("rate").value;
    var years = document.getElementById("years");
    var t = parseInt(years.value);
    if (isNaN(t) || t < 0) {
        areInputsValid = false;
        years.focus();
    }
    // calculate the simple interest
    var a = p * (r * t / 100.0);
    // round to cents
    a = Math.round(a * 100.0) / 100.0;

    // print the result into html
    if (areInputsValid) {
        printResult(p, r, t, a);
    }
    else {
        resetResult()
    }
}