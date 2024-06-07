const display = document.getElementById("display");

function keys(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }
}