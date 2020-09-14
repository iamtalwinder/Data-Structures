//PRINT NODES NTH DISTANCE FROM THE ROOT

const BST = require("./BST");

class Tree extends BST {
  nthDistNodes(n) {
    if (!this.root) {
      return [];
    }

    let queue = [[this.root, 0]],
      arrayNth = [];

    while (queue.length) {
      let tuple = queue.shift(),
        node = tuple[0],
        nodeHeight = tuple[1];

      if (nodeHeight === n) {
        arrayNth.push(node.val);
      }
      if (node.left) {
        queue.push([node.left, nodeHeight + 1]);
      }

      if (node.right) {
        queue.push([node.right, nodeHeight + 1]);
      }
    }

    return arrayNth;
  }
}

let tree = new Tree();
tree.insert(100);
tree.insert(50);
tree.insert(120);
tree.insert(30);
tree.insert(60);
tree.insert(130);
tree.insert(110);
console.log(tree.nthDistNodes(0));
