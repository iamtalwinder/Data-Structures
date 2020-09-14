class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    if (this.items.length) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  add(val) {
    this.items.push(val);
    this.bubbleUp();
  }

  remove() {
    let item = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();
    return item;
  }
}

module.exports = Heap;
