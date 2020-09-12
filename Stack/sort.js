const top = (stack) => {
	return stack[stack.length - 1];
};

const insert = (stack, element) => {
	if (!stack) return;
	if (!stack.length || element > top(stack)) {
		stack.push(element);
	} else {
		let pop = stack.pop();
		insert(stack, element);
		stack.push(pop);
	}
};

const sort = (stack) => {
	if (!stack.length) return;

	let pop = stack.pop();
	sort(stack);
	console.log(pop);
	insert(stack, pop);
};

let stack = [3, 7, 2, 9];
sort(stack);
console.log(stack);
