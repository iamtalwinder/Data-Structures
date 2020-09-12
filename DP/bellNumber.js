const partitionCount = (size) => {
	let upperRow = new Array(size),
		lowerRow = new Array(size);

	upperRow[0] = 1;

	for (let i = 1; i < size; i++) {
		for (let j = 0; j <= i; j++) {
			if (j === 0) {
				lowerRow[j] = upperRow[i - 1];
			} else {
				lowerRow[j] = upperRow[j - 1] + lowerRow[j - 1];
			}
		}
		console.log(upperRow);
		upperRow = Array.from(lowerRow);
	}
	console.log(upperRow);
	return lowerRow[size - 1];
};

console.log(partitionCount(5));
