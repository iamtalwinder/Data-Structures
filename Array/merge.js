const merge = (arr1, arr2) => {
  let result = [],
    index1 = 0,
    index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1++]);
    } else {
      result.push(arr2[index2++]);
    }
  }

  let arr1Remains = arr1.slice(index1),
    arr2Remains = arr2.slice(index2);

  return result.concat(arr1Remains).concat(arr2Remains);
};

module.exports = merge;
