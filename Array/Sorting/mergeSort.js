const merge = require("../merge");

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([4, 2, 8, 5, 2]));
