var result;
function celToFah() {
    document.getElementById('out').innerText = "";
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var fahrenheit = (temperatureInput * 9/5) + 32;
    result=temperatureInput+"°C = "+fahrenheit+"°F";
}

function fahToCel() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var celcius = (temperatureInput - 32)*5/9;
    result=temperatureInput+"°F = "+celcius+"°C";
}

function convert() {
    document.getElementById('out').innerText = result;
}
