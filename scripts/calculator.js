// const display = document.getElementById("display");
const equation = document.getElementById("display");

function UpdateDisplay(buttonValue) {
    // display += `${buttonValue}`;
    equation.textContent += `${buttonValue}`;

    console.log(equation);
}

function Display() {

}

function Operate() {

	var [num1, operation, num2] = equation.split(" ");

	switch (operation) {
        case " + ":
            Addition(num1, num2);
            break;
        case ' - ':
            Subtraction(num1, num2);
            break;
        case ' x ':
            Multiplication(num1, num2);
            break;
        case ' / ':
            Division(num1, num2);
            break;
        default:
            alert("ERROR: Unsupported operation entered.");
            break;
	}
}

function Addition(num1, num2) {}
function Subtraction(num1, num2) {}
function Multiplication(num1, num2) {}
function Division(num1, num2) {}
