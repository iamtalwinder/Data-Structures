//CHECK WHETHER A TREE IS A MIRROR OF ANOTHER TREE

function isMirror(tree1, tree2) {
  if (!tree1 && !tree2) {
    return true;
  }

  if (!tree1 || !tree2) {
    return false;
  }

  return (
    tree1.val === tree2.val &&
    isMirror(tree1.left, tree2.right) &&
    isMirror(tree1.right, tree2.left)
  );
}

let node1 = {
  value: 3,
  left: {
    value: 1,
  },
  right: {
    value: 2,
  },
};

let node2 = {
  value: 3,
  left: {
    value: 2,
  },
  right: {
    value: 1,
  },
};

let node3 = {
  value: 3,
  left: {
    value: 1,
  },
  right: {
    value: 2,
    left: {
      value: 2.5,
    },
  },
};

console.log(isMirror(node1, node2)); // true
console.log(isMirror(node2, node3)); //false
