const Node = require("./Node");

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val, null, null);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentRoot = this.root;
    while (true) {
      if (currentRoot.val > val) {
        if (currentRoot.left) {
          currentRoot = currentRoot.left;
        } else {
          currentRoot.left = newNode;
          break;
        }
      } else {
        if (currentRoot.right) {
          currentRoot = currentRoot.right;
        } else {
          currentRoot.right = newNode;
          break;
        }
      }
    }
  }

  inOrder() {
    let values = [];

    function inOrderHelper(root) {
      if (root) {
        inOrderHelper(root.left);
        values.push(root.val);
        inOrderHelper(root.right);
      }
    }

    inOrderHelper(this.root);
    return values;
  }

  findNode(val) {
    if (!this.root) {
      return null;
    }

    let currentRoot = this.root;
    while (currentRoot) {
      if (currentRoot.val === val) {
        return currentRoot;
      } else if (currentRoot.val > val) {
        currentRoot = currentRoot.left;
      } else {
        currentRoot = currentRoot.right;
      }
    }

    return null;
  }

  delete(val) {
    if (!this.root) {
      return;
    }

    deleteHelper(this.root, val);

    function deleteHelper(root, val) {
      if (root.val > val) {
        root.left = deleteHelper(root.left, val);
      } else if (root.val < val) {
        root.right = deleteHelper(root.right, val);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        } else {
          let rightMinNode = findMinNode(root.right);
          root.val = rightMinNode.val;
          root.right = deleteHelper(root.right, rightMinNode.val);
          return root;
        }
      }
      return root;
    }

    function findMinNode(root) {
      while (root.left) {
        root = root.left;
      }

      return root;
    }
  }
}

module.exports = BST;
