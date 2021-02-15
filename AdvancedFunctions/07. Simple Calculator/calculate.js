function result() {
    let firstNumber;
    let secondNumber;
    let result;

    return {
        init: function(selector1, selector2, resultSelector) {
            firstNumber = document.querySelector(selector1);
            secondNumber = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: function() {
            result.value = Number(firstNumber.value) + Number(secondNumber.value);
        },
        subtract: function() {
            result.value = Number(firstNumber.value) - Number(secondNumber.value);
        } 
    };
}

let object = result();
object.init('#num1', '#num2', '#result');

let add = object.add;
let subtract = object.subtract;