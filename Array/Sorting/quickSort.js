const partition = require("../partition");

const quickSort = (arr, left, right) => {
  if (left < right) {
    let mid = partition(arr, left, right);
    quickSort(arr, left, mid - 1);
    quickSort(arr, mid + 1, right);
  }
};

let arr = [3, 6, 2, 4, 1, 5];

quickSort(arr, 0, arr.length - 1);
console.log(arr);
