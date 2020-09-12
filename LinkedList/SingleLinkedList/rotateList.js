const LinkedList = require("./LinkedList");

const reorderList = (head) => {
	console.log(head);
	if (!head || !head.next) return;
	let [head1, head2] = split(head);
	head2 = reverse(head2);
	alternativeMerge(head1, head2);
};

const split = (head) => {
	let slow = head,
		fast = head.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	let head2 = slow.next;
	slow.next = null;
	return [head, head2];
};

const reverse = (head) => {
	let prev = null,
		next = null;

	while (head) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
};

const alternativeMerge = (head1, head2) => {
	let head = head1,
		tail = head1;
	head1 = head1.next;

	let turnHead2 = true;

	while (head1) {
		if (turnHead2) {
			tail.next = head2;
			head2 = head2.next;
			turnHead2 = false;
		} else {
			tail.next = head1;
			head1 = head1.next;
			turnHead2 = true;
		}
		tail = tail.next;
	}

	if (head2) {
		tail.next = head2;
	}
};

let list = new LinkedList(1, 2, 3, 4);
reorderList(list.head);
list.show();
