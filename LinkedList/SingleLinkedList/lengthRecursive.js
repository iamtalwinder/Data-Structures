const LinkedList = require("./LinkedList");

class List extends LinkedList {
	lengthRecursive() {
		return this.length(this.head);
	}

	length(head) {
		if (!head) return 0;
		return 1 + this.length(head.next);
	}
}
