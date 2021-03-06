class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.status = "unvisited";
    this.neighbors = [];
    this.weight = Number.POSITIVE_INFINITY;
    this.previous = null;
  }

  getPrevious() {
    return this.previous;
  }

  setPrevious(node) {
    this.previous = node;
  }

  setWeight(weight) {
    this.weight = weight >= 0 ? weight : 0;
  }

  getCoordinates() {
    return `(${this.row}, ${this.col})`;
  }

  getStatus() {
    return this.status;
  }

  isUnvisited() {
    return this.status === "unvisited";
  }

  setUnvisited() {
    this.status = "unvisited";
  }

  isVisited() {
    return this.status === "visited";
  }

  setVisited() {
    this.status = "visited";
  }

  isStart() {
    return this.status === "start";
  }

  setStart() {
    this.status = "start";
  }

  isEnd() {
    return this.status === "end";
  }

  setEnd() {
    this.status = "end";
  }

  isCurrent() {
    return this.status === "current";
  }

  setCurrent() {
    this.status = "current";
  }

  isWall() {
    return this.status === "wall";
  }

  setWall() {
    this.status = "wall";
  }

  isPath() {
    return this.status === "path";
  }

  setPath() {
    this.status = "path";
  }

  resetNode() {
    this.setUnvisited();
    this.weight = Number.POSITIVE_INFINITY;
    this.previous = null;
  }

  updateNeighbors(neighbors) {
    neighbors.forEach((neighbor) => {
      this.neighbors.push(neighbor);
    });
  }

  getNeighbors() {
    return this.neighbors;
  }
}

export default Node;
