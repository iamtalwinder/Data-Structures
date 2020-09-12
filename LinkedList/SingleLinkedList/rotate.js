const LinkedList = require("./LinkedList");

class List extends LinkedList {
	rotate(k) {
		if (!this.head || !this.head.next || !k) return;

		let current = this.head,
			count = 1;

		while (current && count < k) {
			current = current.next;
			count++;
		}

		if (!current) return;

		this.tail.next = this.head;
		this.head = current.next;
		current.next = null;
	}

	rotateRight(head, k) {
		if (!head || !k) return head;

		let tail = head,
			length = 1;

		while (tail.next) {
			tail = tail.next;
			length++;
		}

		k = k % length;

		if (!k) return head;

		k = length - k;

		let current = head,
			count = 1;

		while (count < k) {
			current = current.next;
			count++;
		}

		tail.next = head;
		head = current.next;
		current.next = null;

		return head;
	}
}

let list = new List();
list.show();
list.head = list.rotateRight(list.head, 1);
console.log(" ");
list.show();
