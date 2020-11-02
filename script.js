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

// Computes simple interest
function compute() {
    // get values from html
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = Number(document.getElementById("years").value);
    // calculate the simple interest
    var a = p * (r * t / 100.0);
    // round to cents
    a = Math.round(a * 100.0) / 100.0;

    // print the result into html
    printResult(p, r, t, a);
}