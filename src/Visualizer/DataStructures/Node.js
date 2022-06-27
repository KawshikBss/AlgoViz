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

  setVisited() {
    this.status = "visited";
  }

  setStart() {
    this.status = "start";
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
