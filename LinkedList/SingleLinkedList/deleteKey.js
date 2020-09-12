const LinkedList = require("./LinkedList");

class List extends LinkedList {
	deleteKey(key) {
		if (!this.head) return;

		if (this.head.data === key) {
			let tHead = this.head;
			this.head = this.head.next;
			tHead.next = tHead = null;
			return;
		}

		let current = this.head;
		let prev = null;

		while (current && current.data !== key) {
			prev = current;
			current = current.next;
		}

		prev.next = current.next;
		if (this.tail.data === key) this.tail = prev;
		current.next = null;
	}
}

let list = new List(1, 2, 3, 4, 5);
list.deleteKey(5);
list.show();
