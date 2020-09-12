const LinkedList = require("./LinkedList");
const ListNode = require("./ListNode");

class List extends LinkedList {
	partition(head, x) {
		if (!head) return [null, null];
		let beforeHead = new ListNode(0),
			afterHead = new ListNode(0),
			beforeTail = beforeHead,
			afterTail = afterHead;

		while (head) {
			if (head.data < x) {
				beforeTail.next = head;
				beforeTail = beforeTail.next;
			} else {
				afterTail.next = head;
				afterTail = afterTail.next;
			}
			head = head.next;
		}

		beforeTail.next = afterHead.next;
		afterTail.next = null;
		return beforeHead.next;
	}
}

let list = new List(1, 4, 3, 2, 5, 2);
list.head = list.partition(list.head, 3);
list.show();
