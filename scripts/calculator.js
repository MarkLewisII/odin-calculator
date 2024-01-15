const result = document.getElementById("resultField");
const equation = document.getElementById("equationField");
// const save = result.textContent;

function UpdateDisplay(buttonValue) {
	equation.textContent += `${buttonValue}`;
}

function Operate() {
	var equationText = equation.textContent.split(" ");
	var num1 = equationText[0];
	var operation = equationText[1];
	var num2 = equationText[2];
	console.table(equationText);
	
	// for (let i = 1; i <= equationText.length-2; i + 2) {
	// 	if (equationText[i + 1] == "+" || equationText[i + 1] == "-") {
	// 		switch (equationText[i]) {
	// 			case "+":
	// 					result.textContent = Addition(
	// 						equationText[0],
	// 						equationText[i + 2]
	// 					);
	// 					break;
	// 				case "-":
	// 					result.textContent = Subtraction(
	// 						equationText[0],
	// 						equationText[i + 2]
	// 					);
	// 			default:
	// 				alert("ERROR: Unsupported operation entered.");
	// 				break;
	// 		}
	// 	}
	// }

	// for (let i = 1; i <= equationText.length-2; i + 2) {
	// 	if((equationText[i + 1] == "x") || (equationText[i + 1] == "/")) {
	// 		switch (equationText[i]) {
	// 			case "x":
	// 				result.textContent = Multiplication(
	// 					equationText[0],
	// 					equationText[i + 2]
	// 				);
	// 				break;
	// 			case "/":
	// 				if (equationText[0] == 0 || equationText[i + 2] == 0) {
	// 					alert("MATH ERROR: Cannot divide by 0");
	// 					Clear();
	// 					break;
	// 				}
	// 				result.textContent = Division(
	// 					equationText[0],
	// 					equationText[i + 2]
	// 				);
	// 				break;
	// 			default:
	// 				alert("ERROR: Unsupported operation entered.");
	// 				break;
	// 		}
	// 	}
	// }

	// switch (equationText[i + 1]) {
	// 	case "+":
	// 		result.textContent = Addition(
	// 			equationText[0],
	// 			equationText[i + 2]
	// 		);
	// 		break;
	// 	case "-":
	// 		result.textContent = Subtraction(
	// 			equationText[0],
	// 			equationText[i + 2]
	// 		);
	// 		break;
	// 	case "x":
	// 		result.textContent = Multiplication(
	// 			equationText[0],
	// 			equationText[i + 2]
	// 		);
	// 		break;
	// 	case "/":
	// 		if (equationText[0] == 0 || equationText[i + 2] == 0) {
	// 			alert("MATH ERROR: Cannot divide by 0");
	// 			Clear();
	// 			break;
	// 		}
	// 		result.textContent = Division(
	// 			equationText[0],
	// 			equationText[i + 2]
	// 		);
	// 		break;
	// 	default:
	// 		alert("ERROR: Unsupported operation entered.");
	// 		break;
	// }
	// }
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
			if (num1 == 0 || num2 == 0) {
				alert("MATH ERROR: Cannot divide by 0");
				Clear();
				break;
			}
			result.textContent = Division(num1, num2);
			break;
		default:
			alert("ERROR: Unsupported operation entered.");
			break;
	}

	// console.log(
	// 	`num1 = ${num1}\noperation = ${operation}\nnum2 = ${num2}\nresult = ${result}`
	// );
}

// function Addition(num1, num2) {
// 	return parseInt(num1) + parseInt(num2);
// }
let Addition = (num1, num2) => { return parseInt(num1) + parseInt(num2) };

// function Subtraction(num1, num2) {
// 	return parseInt(num1) - parseInt(num2);
// }
let Subtraction = (num1, num2) => {
	return parseInt(num1) - parseInt(num2);
};
// function Multiplication(num1, num2) {
// 	return parseInt(num1) * parseInt(num2);
// }
let Multiplication = (num1, num2) => {
	return parseInt(num1) * parseInt(num2);
};
// function Division(num1, num2) {
// 	return parseInt(num1) / parseInt(num2);
// }
let Division = (num1, num2) => {
	return parseInt(num1) / parseInt(num2);
};

function Clear() {
	equation.textContent = "";
	result.textContent = "0";
}

function Delete() {
	const temp = equation.textContent;
	equation.textContent = temp.slice(0, -1);
}

function Answer() {
	UpdateDisplay(result.textContent);
}
