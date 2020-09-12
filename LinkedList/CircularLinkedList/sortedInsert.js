const LinkedList = require("./LinkedList");
const ListNode = require("./ListNode");

class List extends LinkedList {
	sortedInsert(data) {
		if (!this.tail || data < this.tail.next.data) {
			this.insertStart(data);
			return;
		}

		if (data > this.tail.data) {
			this.insertEnd(data);
			return;
		}

		let current = this.tail.next;

		while (current.next.data < data) {
			current = current.next;
		}

		current.next = new ListNode(data, current.next);
	}
}

let list = new List();
list.sortedInsert(3);
list.sortedInsert(3);
list.sortedInsert(0);
list.sortedInsert(6);
list.show();
