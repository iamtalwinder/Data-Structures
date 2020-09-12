const LinkedList = require("./LinkedList");

class List extends LinkedList {
	sort() {
		this.head = this.mergeSort(this.head);
	}

	mergeSort(head) {
		if (!head || !head.next) return head;

		let [left, right] = this.split(head);
		left = this.mergeSort(left);
		right = this.mergeSort(right);
		return this.merge(left, right);
	}

	split(head) {
		if (!head) return [null, null];
		if (!head.next) return [head, null];

		let slow = head,
			fast = head.next;

		while (fast && fast.next) {
			fast = fast.next.next;
			slow = slow.next;
		}

		let left = head,
			right = slow.next;
		slow.next = null;
		return [left, right];
	}

	merge(head1, head2) {
		if (!head1) return head2;

		if (!head2) return head1;

		let newHead, newTail;

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

		this.tail = newTail;
		return newHead;
	}
}

let list = new List(3, 2, 5, 4, 1);
list.sort();
list.show();
