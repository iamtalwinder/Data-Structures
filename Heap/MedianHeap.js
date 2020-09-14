//KEEP TRACK OF MEDIAN IN STREAM OF NUMBERS

const MinHeap = require("./MinHeap");
const MaxHeap = require("./MaxHeap");

class MedianHeap {
  constructor() {
    this.lower = new MaxHeap();
    this.higher = new MinHeap();
  }

  add(val) {
    if (val < this.median()) {
      this.lower.add(val);
    } else {
      this.higher.add(val);
    }

    if (this.lower.size() - this.higher.size() > 1) {
      this.higher.add(this.lower.remove());
    }

    if (this.higher.size() - this.lower.size() > 1) {
      this.lower.add(this.higher.remove());
    }
  }

  median() {
    if (this.lower.size() === 0 && this.higher.size() === 0) {
      return Number.NEGATIVE_INFINITY;
    } else if (this.lower.size() > this.higher.size()) {
      return this.lower.peek();
    } else if (this.lower.size() < this.higher.size()) {
      return this.higher.peek();
    } else {
      return (this.lower.peek() + this.higher.peek()) / 2;
    }
  }
}

let medianHeap = new MedianHeap();

medianHeap.add(12);
console.log(medianHeap.median()); // 12
medianHeap.add(2);
console.log(medianHeap.median()); // 7 ( because 12 + 2 = 14; 14/2 = 7)
medianHeap.add(23);
console.log(medianHeap.median()); // 12
medianHeap.add(13);
console.log(medianHeap.median()); // 12.5
