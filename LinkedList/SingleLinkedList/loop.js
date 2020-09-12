const LinkedList = require("./LinkedList");

class List extends LinkedList {
	createLoop(startOfLoop) {
		if (!this.head) return;
		let tHead = this.head,
			count = 1;

		while (tHead && count < startOfLoop) {
			tHead = tHead.next;
			count++;
		}

		this.tail.next = tHead;
	}

	detectAndRemoveLoop() {
		let slow = this.head,
			fast = this.head;

		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow === fast) {
				break;
			}
		}

		if (!fast || !fast.next) return;

		slow = this.head;

		while (slow.next !== fast.next) {
			slow = slow.next;
			fast = fast.next;
		}

		fast.next = null;
	}
}

let list = new List(1, 2, 3, 4, 5, 6, 7, 8);
list.createLoop(4);
list.detectAndRemoveLoop();
list.show();
