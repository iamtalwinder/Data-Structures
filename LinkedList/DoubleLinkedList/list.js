class ListNode {
	constructor(val, prev, next) {
		this.val = val;
		this.prev = prev || null;
		this.next = next || null;
	}
}

class MyLinkedList {
	head = null;
	tail = null;

	addAtHead(val) {
		if (!this.head) {
			this.tail = this.head = new ListNode(val, null, null);
			return;
		}
		this.head.prev = this.head = new ListNode(val, null, this.head);
	}

	deleteAtHead() {
		if (!this.head) return;

		if (this.head === this.tail) {
			this.head = this.tail = null;
			return;
		}

		this.head = this.head.next;
		this.head.prev = null;
	}

	addAtTail(val) {
		if (!this.head) {
			this.tail = this.head = new ListNode(val, null, null);
			return;
		}
		this.tail.next = this.tail = new ListNode(val, this.tail, null);
	}

	deleteAtTail() {
		if (!this.head) return;

		if (this.head === this.tail) {
			this.head = this.tail = null;
			return;
		}

		this.tail = this.tail.prev;
		this.tail.next = null;
	}

	addAtIndex(index, val) {
		if (!this.head || index === 0) {
			this.addAtHead(val);
			return;
		}

		let current = this.head;

		while (current && index > 1) {
			current = current.next;
			index--;
		}

		if (current === this.tail) {
			this.addAtTail(val);
			return;
		}

		if (!current) return;

		current = current.next;
		current.prev.next = new ListNode(val, current.prev, current);
		current.prev = current.prev.next;
	}

	deleteAtIndex(index) {
		if (!this.head) return;

		if (index === 0) {
			this.deleteAtHead();
			return;
		}

		let current = this.head;

		while (current && index > 0) {
			current = current.next;
			index--;
		}

		if (current === this.tail) {
			this.deleteAtTail();
			return;
		}

		if (!current) return;

		current.prev.next = current.next;
		if (current.next) current.next.prev = current.prev;
		current.next = current.prev = current = null;
	}

	get(index) {
		let current = this.head;

		while (current && index > 0) {
			current = current.next;
			index--;
		}

		if (!current) return -1;
		return current.val;
	}
	show() {
		if (!this.head) return;
		let current = this.head;
		let values = [];
		while (current) {
			values.push(current.val);
			current = current.next;
		}
		console.log(values);
	}
}

let list = new MyLinkedList();
list.addAtHead(7);
list.deleteAtIndex(1);
list.show();
