const LinkedList = require("./LinkedList");

var splitListToParts = function (root, k) {
	let length = getLength(root),
		width = Math.floor(length / k),
		extra = length % k,
		nodes = [],
		current = root,
		next = null;

	for (let i = 0; i < k; i++) {
		nodes.push(current);
		for (let j = 1; j < width + (i < extra) ? 1 : 0; j++) {
			current = current.next;
		}
		if (current) {
			next = current.next;
			current.next = null;
			current = next;
		}
	}

	return nodes;
};

var getLength = function (root) {
	let length = 0;
	while (root) {
		length++;
		root = root.next;
	}
	return length;
};

const list = new LinkedList();
console.log(splitListToParts(list.head, 3));
