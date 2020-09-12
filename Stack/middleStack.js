class ListNode {
	constructor(data, prev, next) {
		this.data = data;
		this.prev = prev || null;
		this.next = next || null;
	}
}

class Stack {
	top = null;
	length = 0;
	middle = null;

	push(data) {
		let newTop = new ListNode(data);

		if (!this.top) {
			this.top = this.middle = newTop;
			this.length = 1;
		} else {
			this.top.next = newTop;
			newTop.prev = this.top;
			this.top = newTop;
			if (this.length % 2) this.middle = this.middle.next;
			this.length++;
		}
	}

	pop() {
		if (!this.top) return null;
		let data = this.top.data;
		if (this.length === 1 || this.length % 2 === 0)
			this.middle = this.middle.prev;
		this.length--;
		this.top = this.top.prev;
		if (this.top) this.top.next = null;
		return data;
	}

	getMiddle() {
		if (!this.middle) return null;
		return this.middle.data;
	}

	deleteMiddle() {
		if (!this.middle) return null;
		let data = this.middle.data;
		if (this.length === 1) {
			this.top = this.middle = null;
			this.length = 0;
			return data;
		}
		if (this.length === 2) {
			this.top = this.top.prev;
			this.length--;
			this.middle = this.top;
			this.top.next = null;
		}

		this.length--;
		let temp = this.middle;
		this.middle = this.middle.prev;
		temp.prev.next = temp.next;
		temp.next.prev = temp.prev;
		temp.prev = temp.next = temp = null;
		return data;
	}
}

let stack = new Stack();
stack.push(1);

console.log(stack.deleteMiddle());
console.log(stack.pop());
