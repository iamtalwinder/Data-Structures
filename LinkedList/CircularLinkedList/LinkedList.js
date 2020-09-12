const ListNode = require("./ListNode");

class LinkedList {
	tail = null;
	constructor(data) {
		if (!data) return;

		this.tail = new ListNode(data);
		this.tail.next = this.tail;
		for (let i = 1; i < arguments.length; i++) {
			this.insertEnd(arguments[i]);
		}
	}

	insertStart(data) {
		if (!this.tail) {
			this.tail = new ListNode(data);
			this.tail.next = this.tail;
			return;
		}

		this.tail.next = new ListNode(data, this.tail.next);
	}

	insertEnd(data) {
		if (!this.tail) {
			this.tail = new ListNode(data);
			this.tail.next = this.tail;
			return;
		}

		this.tail.next = this.tail = new ListNode(data, this.tail.next);
	}

	show() {
		if (!this.tail) return;

		let head = this.tail.next;

		do {
			console.log(head.data);
			head = head.next;
		} while (head !== this.tail.next);
	}
}

module.exports = LinkedList;
