const LinkedList = require("./LinkedList");

class List extends LinkedList {
	deleteHead() {
		if (this.head === this.tail) {
			this.head = this.tail = null;
			return;
		}
		let head = this.head;
		this.head = head.next;
		this.head.prev = head.next = head = null;
	}

	deleteTail() {
		if (this.head === this.tail) {
			this.head = this.tail = null;
			return;
		}

		let tail = this.tail;
		this.tail = tail.prev;
		this.tail.next = tail.prev = tail = null;
	}

	deleteKey(key) {
		if (!this.head) return;

		if (this.head.data === key) {
			this.deleteHead();
			return;
		}

		if (this.tail.data === key) {
			this.deleteTail();
			return;
		}

		let node = this.head;

		while (node && node.data !== key) node = node.next;

		node.prev.next = node.next;
		node.next.prev = node.prev;
		node.next = node.prev = node = null;
	}
}

let list = new List(1, 2, 3, 4, 5);
list.deleteKey(3);
list.showForward();
console.log();
list.showBackward();
