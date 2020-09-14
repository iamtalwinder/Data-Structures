//FIND THE LOWEST COMMON ANCESTOR OF TWO NODES IN A GIVEN BINARY TREE

const BST = require("./BST");

class Tree extends BST {
  lowestCommonAncestor(val1, val2) {
    function lowestCommonAncestorHelper(root, val1, val2) {
      if (Math.max(val1, val2) < root.val) {
        return lowestCommonAncestorHelper(root.left, val1, val2);
      }
      if (Math.min(val1, val2) > root.val) {
        return lowestCommonAncestorHelper(root.right, val1, val2);
      }
      return root.val;
    }
    return lowestCommonAncestorHelper(this.root, val1, val2);
  }
}

let tree = new Tree();
tree.insert(100);
tree.insert(50);
tree.insert(120);
tree.insert(30);
tree.insert(130);
tree.insert(110);
console.log(tree.lowestCommonAncestor(30, 130));
