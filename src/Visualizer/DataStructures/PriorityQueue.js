class PriorityQueue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getParent(index) {
    return this.queue[Math.floor((index - 1) / 2)];
  }

  getLeftChildIndex(parentIndex) {
    return Math.floor(2 * parentIndex + 1);
  }
  getRightChildIndex(parentIndex) {
    return Math.floor(2 * parentIndex + 2);
  }

  getChildren(index) {
    let leftIndex = Math.floor(2 * index + 1);
    let rightIndex = Math.floor(2 * index + 2);
    return [
      leftIndex < this.size - 1 && leftIndex >= 0
        ? this.queue[leftIndex]
        : null,
      rightIndex < this.size - 1 && rightIndex >= 0
        ? this.queue[rightIndex]
        : null,
    ];
  }

  swap(index1, index2) {
    let tmp = this.queue[index1];
    this.queue[index1] = this.queue[index2];
    this.queue[index2] = tmp;
  }

  shiftUp(data) {
    let index = this.queue.indexOf(data);
    let parentIndex = Math.floor((index - 1) / 2);
    while (index !== 0 && this.queue[index] < this.queue[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  shiftDown(data) {
    let index = this.queue.indexOf(data);
    let leftIndex = index * 2 + 1;
    let rightIndex = index * 2 + 2;
    let min = index;
    if (
      leftIndex < this.size - 1 &&
      this.queue[leftIndex].weight < this.queue[min].weight
    )
      min = leftIndex;
    if (
      rightIndex < this.size - 1 &&
      this.queue[rightIndex].weight < this.queue[min].weight
    )
      min = rightIndex;
    if (min !== index) {
      this.swap(index, min);
      this.shiftDown(this.queue[min]);
    }
  }

  insert(data) {
    this.queue.push(data);
    let index = this.size;
    this.size++;
    while (index !== 0 && data.weight < this.getParent(index).weight) {
      let parentIndex = this.queue.indexOf(this.getParent(index));
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  poll() {
    this.swap(0, this.size - 1);
    let min = this.queue.pop();
    this.size--;
    let top = this.queue[0];
    this.heapify(top);

    return min;
  }

  update(data, updatedData) {
    const currentData = this.queue.find(data);
    if (data === null || data === undefined) return false;
    const index = this.queue.indexOf(currentData);
    if (this.queue[index].weight <= updatedData.weight) return false;
    this.queue[index] = updatedData;
    this.heapify(this.queue[index]);
    return true;
  }

  heapify(top) {
    if (!top) return;
    let index = this.queue.indexOf(top);
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);

    let minIndex = index;

    if (
      leftIndex < this.size &&
      this.queue[leftIndex].weight < this.queue[index].weight
    )
      minIndex = leftIndex;
    if (
      rightIndex < this.size &&
      this.queue[rightIndex].weight < this.queue[minIndex].weight
    )
      minIndex = rightIndex;

    if (minIndex !== index) {
      this.swap(index, minIndex);
      this.heapify(this.queue[minIndex]);
    }
  }
}
export default PriorityQueue;
