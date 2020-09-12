const LinkedList = require("./LinkedList");

class List extends LinkedList {
	merge(list) {
		if (!this.head) {
			this.head = list.head;
			return;
		}

		if (!list.head) {
			return;
		}

		let newHead, newTail;
		let head1 = this.head,
			head2 = list.head;

		if (head1.data < head2.data) {
			newHead = head1;
			head1 = head1.next;
		} else {
			newHead = head2;
			head2 = head2.next;
		}

		newTail = newHead;

		while (head1 && head2) {
			if (head1.data < head2.data) {
				newTail.next = head1;
				head1 = head1.next;
			} else {
				newTail.next = head2;
				head2 = head2.next;
			}
			newTail = newTail.next;
		}

		while (head1) {
			newTail.next = head1;
			head1 = head1.next;
			newTail = newTail.next;
		}

		while (head2) {
			newTail.next = head2;
			head2 = head2.next;
			newTail = newTail.next;
		}

		this.head = newHead;
		this.tail = newTail;
	}
}

let list1 = new List(1);
let list2 = new List();
list1.merge(list2);
list1.show();
