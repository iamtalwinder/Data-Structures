const Node = require("../Node");

class BST {
	root = null;

	constructor(...args) {
		if (!args) return;

		args.map((val) => {
			this.root = this.sortedInsert(this.root, val);
		});
	}

	insert(...args) {
		if (!args) return;

		args.map((val) => {
			this.root = this.sortedInsert(this.root, val);
		});
	}

	sortedInsert(root, val) {
		if (!root) return new Node(val);

		if (val < root.val) root.left = this.sortedInsert(root.left, val);
		else root.right = this.sortedInsert(root.right, val);

		return root;
	}

	inorder() {
		let vals = [];
		this.inorderTraversal(this.root, vals);
		return vals;
	}

	inorderTraversal(root, vals) {
		if (!root) return;

		this.inorderTraversal(root.left, vals);
		vals.push(root.val);
		this.inorderTraversal(root.right, vals);
	}

	levelorder() {
		if (!this.root) return [];

		let vals = [],
			nodes = [],
			node;

		nodes.push(this.root);

		while (nodes.length > 0) {
			node = nodes.shift();
			vals.push(node.val);
			if (node.left) nodes.push(node.left);
			if (node.right) nodes.push(node.right);
		}
		return vals;
	}
}

let tree = new BST(50, 25, 100, 10, 35, 80, 120, 90);
console.log(tree.levelorder());
