const equation = document.getElementById("display");
const result = document.getElementById("resultField");

function UpdateDisplay(buttonValue) {
	equation.textContent += `${buttonValue}`;
}

function Operate() {
	var equationText = equation.textContent.split(" ");
	var num1 = equationText[0];
	var operation = equationText[1];
	var num2 = equationText[2];

	switch (operation) {
		case "+":
			result.textContent = Addition(num1, num2);
			break;
		case "-":
			result.textContent = Subtraction(num1, num2);
			break;
		case "x":
			result.textContent = Multiplication(num1, num2);
			break;
		case "/":
			result.textContent = Division(num1, num2);
			break;
		default:
			alert("ERROR: Unsupported operation entered.");
			break;
	}

	console.log(
		`num1 = ${num1}\noperation = ${operation}\nnum2 = ${num2}\nresult = ${result}`
	);
}

function Addition(num1, num2) {
	return parseInt(num1) + parseInt(num2);
}

function Subtraction(num1, num2) {
	return parseInt(num1) - parseInt(num2);
}
function Multiplication(num1, num2) {
	return parseInt(num1) * parseInt(num2);
}
function Division(num1, num2) {
	return parseInt(num1) / parseInt(num2);
}

function Clear() {
	equation.textContent = "";
	result.textContent = "0";
}
