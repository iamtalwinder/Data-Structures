const ListNode = require("./ListNode");
const LinkedList = require("./LinkedList");

const plusOne = (head) => {
	let sum;
	if (!head.next) {
		sum = head.data + 1;
	} else {
		const carry = plusOne(head.next);
		sum = head.data + carry;
	}
	head.data = sum % 10;
	return Math.floor(sum / 10);
};

const plusOneLinkedList = (head) => {
	const carry = plusOne(head);

	if (carry) {
		head = new ListNode(carry, head);
	}

	return head;
};

const list = new LinkedList(9, 8, 9, 9);
list.head = plusOneLinkedList(list.head);
list.show();
