let result = document.getElementById("bar");
let storedValue = null;
let opperation = null;

function enter(){
    let finalAnswer;
    let input2 = parseFloat(result.value);
    console.log(input2);
    if(storedValue != null && result.value.length != 0 && opperation != null){
        switch (opperation) {
            case "+":
                finalAnswer = storedValue + input2;
                break;
            case "-":
                finalAnswer = storedValue - input2;
                break;
            case "x":
                finalAnswer = storedValue * input2;
                break;
            case "/":
                finalAnswer = storedValue / input2;
                break;
        }
    } else {
        return;
    }
    result.value = finalAnswer;
    console.log(finalAnswer);
}
function input(num){
    if(num === "."){
        if(result.value.length === 0 || result.value.includes(".")){
            return;
        }
    }
    result.value += num.toString();
}
function opperator(opp){
    if(result.value.length === 0){
        return;
    }
    storedValue = parseFloat(result.value);
    opperation = opp;
    result.value = "";
    console.log(opp);
}
function reset(){
    result.value = ""; 
    storedValue = null;
    opperation = null;
}