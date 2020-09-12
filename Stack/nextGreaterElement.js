const top = (stack) => {
	return stack[stack.length - 1];
};

const printNextGreaterElement = (elements) => {
	if (!elements || !elements.length) return;

	let stack = [];

	for (let element of elements) {
		if (!stack.length || element < top(stack)) {
			stack.push(element);
		} else {
			while (element > top(stack)) {
				console.log(`${stack.pop()} -------- ${element}`);
			}
			stack.push(element);
		}
	}

	while (stack.length) {
		console.log(`${stack.pop()} -------- -1`);
	}
};

printNextGreaterElement([13, 7, 6, 12]);
