const LinkedList = require("./LinkedList");

class List extends LinkedList {
	swap(keyX, keyY) {
		let currX = null,
			currY = null,
			prevX = null,
			prevY = null;

		let current = this.head,
			prev = null;

		while (current && (!currX || !currY)) {
			if (current.data === keyX && !currX) {
				currX = current;
				prevX = prev;
			}

			if (current.data === keyY && !currY) {
				currY = current;
				prevY = prev;
			}
			prev = current;
			current = current.next;
		}

		if (!currX || !currY) {
			return;
		} else if (this.tail === currX) {
			this.tail = currY;
		} else if (this.tail === currY) {
			this.tail = currX;
		}

		if (this.head === currY) {
			this.head = currX;
			prevX.next = currY;
		} else if (this.head === currX) {
			this.head = currY;
			prevY.next = currX;
		} else {
			prevX.next = currY;
			prevY.next = currX;
		}

		[currX.next, currY.next] = [currY.next, currX.next];
	}
}

let list = new List(1, 2, 3, 4, 5);
list.swap(5, 1);
list.show();
