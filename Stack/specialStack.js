class Stack {
	stack = [];
	minStack = [];

	top(stack) {
		return stack[stack.length - 1];
	}
	push(data) {
		this.stack.push(data);

		if (!this.minStack.length || this.top(this.minStack) >= data) {
			this.minStack.push(data);
		}
	}

	pop() {
		let pop = this.stack.pop();
		if (pop === this.top(this.minStack)) this.minStack.pop();
		return pop;
	}

	getmin() {
		return this.top(this.minStack);
	}
}

let stack = new Stack();
stack.push(18);
stack.push(4);
stack.push(2);
stack.push(2);
stack.push(9);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getmin());
