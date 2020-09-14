//CHECK WHETHER A BINARY TREE IS A SUBTREE OF ANOTHER TREE

const BST = require("./BST");

class Tree extends BST {
  isSametree(root1, root2) {
    if (!root1 && !root2) {
      return true;
    }

    if (!root1 || !root2) {
      return false;
    }

    return (
      root1.val === root2.val &&
      this.isSametree(root1.left, root2.left) &&
      this.isSametree(root1.right, root2.right)
    );
  }

  isSubtree(root, subtree) {
    if (this.isSametree(root, subtree)) {
      return true;
    }
    if (!root || !subtree) {
      return false;
    }
    return (
      this.isSubtree(root.left, subtree) || this.isSubtree(root.right, subtree)
    );
  }
}

let tree1 = new Tree();
tree1.insert(100);
tree1.insert(50);
tree1.insert(120);
tree1.insert(30);
tree1.insert(130);
tree1.insert(110);
let tree2 = new Tree();
console.log(tree1.isSubtree(tree1.root, tree2.root));
