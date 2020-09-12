const ListNode = require("./ListNode");

class LinkedList {
	head = null;
	tail = null;
	constructor(data) {
		if (!data) return;

		this.head = this.tail = new ListNode(data);

		for (let i = 1; i < arguments.length; i++) {
			this.insertEnd(arguments[i]);
		}
	}

	insertEnd(data) {
		if (!this.head) {
			this.head = this.tail = new ListNode(data);
		}

		this.tail.next = new ListNode(data, this.tail);
		this.tail = this.tail.next;
	}

	showForward() {
		let head = this.head;

		while (head) {
			console.log(head.data);
			head = head.next;
		}
	}

	showBackward() {
		let tail = this.tail;

		while (tail) {
			console.log(tail.data);
			tail = tail.prev;
		}
	}
}

module.exports = LinkedList;
