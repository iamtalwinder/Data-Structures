const LinkedList = require("./LinkedList");

var insertionSortList = function (head) {
	if (!head || !head.next) return head;

	let current = head.next,
		next = null;
	head.next = null;
	while (current) {
		next = current.next;
		head = sortedInsert(head, current);
		current = next;
	}

	return head;
};

var sortedInsert = (head, node) => {
	if (head.data > node.data) {
		node.next = head;
		head = node;
	} else {
		let current = head;
		while (current.next !== null && current.next.data < node.data) {
			current = current.next;
		}
		node.next = current.next;
		current.next = node;
	}

	return head;
};

let list = new LinkedList(4, 2, 1, 3);
list.head = insertionSortList(list.head);
list.show();
