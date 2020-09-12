class Stack {
	queue1 = [];
	queue2 = [];

	push(data) {
		this.queue2.push(data);
		while (this.queue1.length) {
			this.queue2.push(this.queue1.shift());
		}
		[this.queue1, this.queue2] = [this.queue2, this.queue1];
	}

	pop() {
		return this.queue1.shift();
	}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
