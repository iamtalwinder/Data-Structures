const ListNode = require("./ListNode");
const LinkedList = require("./LinkedList");

const addTwoNumbers = (l1, l2) => {
	if (!l1) return l2;
	if (!l2) return l1;

	let stack1 = [],
		stack2 = [],
		carry = 0,
		sum = 0,
		list = null;

	while (l1) {
		stack1.push(l1.data);
		l1 = l1.next;
	}

	while (l2) {
		stack2.push(l2.data);
		l2 = l2.next;
	}

	while (stack1.length && stack2.length) {
		sum = stack1.pop() + stack2.pop() + carry;
		carry = Math.floor(sum / 10);
		sum = sum % 10;
		list = new ListNode(sum, list);
	}

	if (stack2.length) stack1 = stack2;

	while (stack1.length) {
		sum = stack1.pop() + carry;
		carry = Math.floor(sum / 10);
		sum = sum % 10;
		list = new ListNode(sum, list);
	}

	if (carry) {
		list = new ListNode(carry, list);
	}
	return list;
};

let list1 = new LinkedList(9, 9);
let list2 = new LinkedList(1);
let list = new LinkedList();
list.head = addTwoNumbers(list1.head, list2.head);
list.show();
