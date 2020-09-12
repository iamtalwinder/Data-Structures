const insertionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let j = i - 1,
			key = arr[i];
		while (j >= 0 && key < arr[j]) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = key;
	}
};

let arr = [4, 6, 1, 3];
insertionSort(arr);
console.log(arr);
