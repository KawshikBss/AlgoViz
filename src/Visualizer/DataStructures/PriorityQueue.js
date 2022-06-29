class PriorityQueue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  getParent(index) {
    return this.queue[Math.floor((index - 1) / 2)];
  }

  getChildren(index) {
    return (
      this.queue[Math.floor(2 * index + 1)],
      this.queue[Math.floor(2 * index + 2)]
    );
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
      leftIndex < this.size &&
      this.queue[leftIndex].weight < this.queue[min].weight
    )
      min = leftIndex;
    if (
      rightIndex < this.size &&
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
}
