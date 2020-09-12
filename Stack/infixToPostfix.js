const validStack = new Map([
	["+", 1],
	["-", 1],
	["*", 2],
	["/", 2],
	["(", 3],
]);

const validPush = (operator, stackTop) => {
	if (!stackTop || stackTop === "(") return true;
	if (validStack.get(operator) > validStack.get(stackTop)) return true;
	return false;
};

const popAndAdd = (postfix, operators) => {
	let pop = operators.pop();

	while (pop !== "(") {
		postfix += pop;
		pop = operators.pop();
	}
	return postfix;
};

const infixToPostfix = (infix) => {
	let operators = [];
	let postfix = Object("");

	for (let c of infix) {
		if (c === ")") {
			postfix = popAndAdd(postfix, operators);
		} else if (!isNaN(c)) {
			postfix += c;
		} else if (validPush(c, operators[operators.length - 1])) {
			operators.push(c);
		} else {
			while (!validPush(c, operators[operators.length - 1])) {
				postfix += operators.pop();
			}
			operators.push(c);
		}
	}

	while (operators.length) {
		postfix += operators.pop();
	}

	return postfix;
};

console.log(infixToPostfix("1+(2-3*7)"));
