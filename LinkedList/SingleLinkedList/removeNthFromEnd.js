const LinkedList = require("./LinkedList");
const ListNode = require("./ListNode");

class List extends LinkedList {
	removeNthFromEnd(head, n) {
		if (!head || n < 1) return head;
		let dummy = new ListNode(0);
		dummy.next = head;
		let first = dummy,
			second = dummy;
		for (let i = 1; i <= n + 1; i++) {
			first = first.next;
		}

		while (first) {
			first = first.next;
			second = second.next;
		}

		second.next = second.next.next;
		return dummy.next;
	}
}

let list = new List(1, 2, 3, 4, 5);
list.head = list.removeNthFromEnd(list.head, 5);
list.show();
