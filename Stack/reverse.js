const insertAtBottom = (stack, element) => {
	if (!stack) return;
	if (!stack.length) {
		stack.push(element);
	} else {
		let pop = stack.pop();
		insertAtBottom(stack, element);
		stack.push(pop);
	}
};

const reverse = (stack) => {
	if (!stack.length) return;

	let pop = stack.pop();
	reverse(stack);
	console.log(pop);
	insertAtBottom(stack, pop);
};

let stack = [1, 2, 3, 4];
reverse(stack);
console.log(stack);
