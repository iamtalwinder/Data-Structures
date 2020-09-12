const LinkedList = require("./LinkedList");

const createIntersection = (tailA, headB, k) => {
	let current = headB;
	for (let i = 1; i < k; i++) {
		current = current.next;
	}
	tailA.next = current;
};

const getIntersectionNode = (headA, headB) => {
	if (!headA || !headB) return null;
	if (headA === headB) return headB;

	let tail = headA;
	while (tail.next) {
		if (tail === headB) return headB;
		tail = tail.next;
	}
	if (tail === headB) return headB;
	tail.next = headA;
	let intersection = loopHead(headB);
	tail.next = null;
	return intersection;
};

const loopHead = (head) => {
	let slow = head,
		fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) break;
	}

	if (!fast || !fast.next) return null;

	slow = head;
	while (slow.next !== fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	return fast.next;
};

let listA = new LinkedList(1);
let listB = new LinkedList(2);
createIntersection(listA.tail, listB.head, 1);
listA.show();
listB.show();
console.log(getIntersectionNode(listA.head, listB.head));
