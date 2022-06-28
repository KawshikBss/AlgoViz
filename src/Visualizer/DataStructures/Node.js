class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.status = "unvisited";
    this.neighbors = [];
  }

  getStatus() {
    return this.status;
  }

  isUnvisited() {
    return this.status === "unvisited";
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

  setCurrent() {
    this.status = "current";
  }

  setWall() {
    this.status = "wall";
  }

  setPath() {
    this.status = "path";
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
