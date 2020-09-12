const LinkedList = require("./LinkedList");

class List extends LinkedList {
	reverseK(head, k) {
		if (!head || !k) return null;

		let prev = null,
			current = head,
			next = null,
			count = 0;

		while (current && count < k) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}

		head.next = this.reverseK(next, k);

		return prev;
	}

	reverseKIterative(head, k) {
		if (!head || !head.next || k <= 1) return head;

		let prev = null,
			current = head,
			next = null,
			join = null,
			tail = null,
			newHead = null,
			temp = null;

		while (current) {
			join = current;
			prev = null;

			temp = current;
			let count = k - 1;

			while (temp && count--) {
				temp = temp.next;
			}

			if (!temp && !newHead) return head;

			if (!temp) {
				tail.next = current;
				return newHead;
			}
			count = k;

			while (current && count--) {
				next = current.next;
				current.next = prev;
				prev = current;
				current = next;
			}

			if (!newHead) newHead = prev;

			if (tail) tail.next = prev;

			tail = join;
		}

		this.tail = join;
		return newHead;
	}
}

let list = new List(1, 2, 3, 4, 5, 6, 7, 8);
list.head = list.reverseKIterative(list.head, 3);
list.show();
console.log(list.tail);
