const generateBinaryNumbers = (number) => {
	const queue = [];

	queue.push("1");
	while (number--) {
		let s = queue.shift();
		console.log(s);
		queue.push(s + "0");
		queue.push(s + "1");
	}
};

generateBinaryNumbers(5);
