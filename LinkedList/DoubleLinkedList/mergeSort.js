const LinkedList = require("./LinkedList");

class List extends LinkedList {
	split(head) {
		if (!head) return [null, null];
		if (!head) return [head, null];

		let slow = head,
			fast = head;

		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
		}

		slow.prev.next = null;
		slow.prev = null;
		return [head, slow];
	}

	add(list, tail) {
		list.prev = tail;
		tail.next = list;
		return [list.next, tail.next];
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
				[head1, newTail] = this.add(head1, newTail);
			} else {
				[head2, newTail] = this.add(head2, newTail);
			}
		}

		while (head1) {
			[head1, newTail] = this.add(head1, newTail);
		}

		while (head2) {
			[head2, newTail] = this.add(head2, newTail);
		}

		this.tail = newTail;
		return newHead;
	}

	mergeSort(head) {
		if (!head || !head.next) return head;

		let [left, right] = this.split(head);
		left = this.mergeSort(left);
		right = this.mergeSort(right);
		return this.merge(left, right);
	}
}

let list = new List(1, 8, 9, 3, 4);
list.head = list.mergeSort(list.head);
list.showForward();
console.log();
list.showBackward();
