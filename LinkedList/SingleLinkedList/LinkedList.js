const ListNode = require("./ListNode");

class LinkedList {
	head = null;
	tail = null;

	constructor(data) {
		if (!data && arguments.length < 1) return;

		this.head = this.tail = new ListNode(data);

		for (let i = 1; i < arguments.length; i++) {
			this.insertEnd(arguments[i]);
		}
	}

	insertEnd(data) {
		if (!this.head) {
			this.head = this.tail = new ListNode(data);
			return;
		}
		this.tail.next = new ListNode(data);
		this.tail = this.tail.next;
	}

	length() {
		if (!this.head) return 0;

		let length = 0;
		let current = this.head;

		while (current) {
			length++;
			current = current.next;
		}

		return length;
	}

	show() {
		if (!this.head) return;
		let current = this.head;
		let values = [];
		while (current) {
			values.push(current.data);
			current = current.next;
		}
		console.log(values);
	}
}

module.exports = LinkedList;
