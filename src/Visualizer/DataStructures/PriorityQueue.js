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
    while (index != 0 && this.queue[index] < this.queue[parentIndex]) {
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
    while (index != 0 && data.weight < this.getParent(index).weight) {
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

  heapify(top) {
    if (!top) return;
    let index = this.queue.indexOf(top);
    let [leftChild, rightChild] = this.getChildren(index);
    leftChild =
      leftChild === null ? { weight: Number.POSITIVE_INFINITY } : leftChild;
    rightChild =
      rightChild === null ? { weight: Number.POSITIVE_INFINITY } : rightChild;

    let min =
      leftChild.weight < rightChild.weight
        ? leftChild.weight < top.weight
          ? leftChild
          : top
        : rightChild.weight < top.weight
        ? rightChild
        : top;

    if (min !== top) {
      this.swap(index, this.queue.indexOf(min));
      this.heapify(min);
    }
  }
}
