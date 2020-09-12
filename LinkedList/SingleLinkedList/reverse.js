const LinkedList = require("./LinkedList");

class List extends LinkedList {
	reverse() {
		if (!this.head) return;

		let prev = null,
			current = this.head,
			next = null;
		[this.head, this.tail] = [this.tail, this.head];

		while (current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
	}
}

let list = new List(1, 2, 3, 4, 5);
list.reverse();
list.show();
