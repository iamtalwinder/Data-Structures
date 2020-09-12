const LinkedList = require("./LinkedList");

class List extends LinkedList {
	reverse() {
		if (!this.head && !this.head.next) return;

		let current = this.head;

		[this.head, this.tail] = [this.tail, this.head];
		while (current) {
			[current.prev, current.next] = [current.next, current.prev];
			current = current.prev;
		}
	}
}

let list = new List(1, 2, 3, 4);
list.reverse();
list.showForward();
console.log();
list.showBackward();
