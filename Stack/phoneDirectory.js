class PhoneDirectory {
	constructor(number) {
		this.assignedNumbers = new Set();
		this.availableNumbers = [];

		while (number > 0) {
			number--;
			this.availableNumbers.push(number);
		}
	}

	get() {
		if (this.availableNumbers.length < 1) return -1;
		let number = this.availableNumbers.pop();
		this.assignedNumbers.add(number);
		return number;
	}

	check(number) {
		return !this.assignedNumbers.has(number);
	}

	release(number) {
		if (this.assignedNumbers.has(number)) {
			this.assignedNumbers.delete(number);
			this.availableNumbers.push(number);
		}
	}
}

let directory = new PhoneDirectory(3);
console.log(directory.get());
console.log(directory.check(2));
console.log(directory.get());
console.log(directory.get());
directory.release(2);
console.log(directory.get());
