const partition = (arr, startIndex, endIndex) => {
  let pivotIndex = Math.floor(
    Math.random() * (endIndex - startIndex) + startIndex
  );

  [arr[startIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[startIndex]];
  pivotIndex = startIndex;
  startIndex++;

  while (startIndex <= endIndex) {
    while (arr[pivotIndex] > arr[startIndex]) {
      startIndex++;
    }

    while (arr[pivotIndex] < arr[endIndex]) {
      endIndex--;
    }

    if (startIndex <= endIndex) {
      [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
      startIndex++;
      endIndex--;
    }
  }
  [arr[pivotIndex], arr[endIndex]] = [arr[endIndex], arr[pivotIndex]];
  return endIndex;
};

module.exports = partition;
