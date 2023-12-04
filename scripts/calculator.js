const Add = (num1, num2) => {
	return num1 + num2;
};

const Subtract = (num1, num2) => {
	return num1 - num2;
};

const Multiply = (num1, num2) => {
	return num1 * num2;
};

const Divide = (num1, num2) => {
	return num1 / num2;
};

function Operate(num1, operator, num2) {
	switch (operator) {
		case "+":
			Add(num1, num2);
			break;
		case "-":
			Subtract(num1, num2);
			break;
		case "/":
			Divide(dividend, divisor);
			break;
		case "x":
			Multiply(num1, num2);
	}
}
