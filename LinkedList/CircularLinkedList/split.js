const LinkedList = require("./LinkedList");

class List extends LinkedList {
	split(tail) {
		if (!tail) return [null, null];
		if (tail.next === tail) return [tail, null];

		let slow = tail.next,
			fast = tail.next;

		do {
			slow = slow.next;
			fast = fast.next.next;
		} while (fast !== tail && fast.next !== tail);

		[tail.next, slow.next] = [slow.next, tail.next];
		return [slow, tail];
	}
}

let list = new List(1, 2, 3, 4, 5, 6);
let list1 = new List();
let list2 = new List();
[list1.tail, list2.tail] = list.split(list.tail);
list1.show();
console.log();
list2.show();
