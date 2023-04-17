// Code based on template from https://codingartistweb.com/2021/04/javascript-temperature-conversion-celsius-fahrenheit/
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    if (celsius.value > -273.15) {let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
} else if (celsius.value < -273.15) {fahrenheit.value = ("Impossible");
} else if (celsius.value == "-") {fahrenheit.value = ('');
} else {fahrenheit.value = ("Invalid");}
}

function farToCel(){
    if (fahrenheit.value > -460) {let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
} else if (fahrenheit.value < -460) {celsius.value = ("Impossible");
} else if (fahrenheit.value == "-") {celsius.value = ('');
} else {celsius.value = ("Invalid");}
}
