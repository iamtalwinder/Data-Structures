const LinkedList = require("./LinkedList");

class List extends LinkedList {
	swap(head) {
		if (!head || !head.next) return head;
		let second = head.next,
			next = second.next;

		second.next = head;
		head.next = this.swap(next);

		return second;
	}

	swapIterative(head) {
		if (!head || !head.next) return head;

		let current = head,
			next = null,
			join = null;

		head = head.next;

		while (current && current.next) {
			next = current.next.next;
			current.next.next = current;

			if (join) join.next = current.next;

			join = current;
			current = next;
		}

		if (!current) {
			join.next = null;
		} else {
			join.next = current;
		}

		return head;
	}
}

let list = new List(1, 2, 3, 4, 5, 6, 7, 8);
list.head = list.swapIterative(list.head);
list.show();
