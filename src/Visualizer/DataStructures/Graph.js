import Node from "./Node";

class Graph {
  constructor(rows, cols) {
    this.rowLen = rows - 1;
    this.colLen = cols - 1;
    this.nodes = [];
    for (let i = 0; i < rows; i++) {
      let tempRow = [];
      for (let j = 0; j < cols; j++) {
        tempRow.push(new Node(i, j));
      }
      this.nodes.push(tempRow);
    }
    this.startNode = null;
    this.endNode = null;
    this.updateNeighbors();
  }

  getNodes() {
    return this.nodes;
  }

  getStartNode() {
    return this.startNode;
  }

  getEndNode() {
    return this.endNode;
  }

  handleNode(row, col) {
    const node = this.nodes[row][col];
    if (node.isVisited()) return;
    if (node.isStart() && node === this.startNode) {
      node.setUnvisited();
      this.startNode = null;
      return;
    } else if (node.isEnd() && node === this.endNode) {
      node.setUnvisited();
      this.endNode = null;
      return;
    } else if (node.isWall()) {
      node.setUnvisited();
      return;
    }

    if (this.startNode === null) {
      node.setStart();
      this.startNode = node;
    } else if (this.endNode === null) {
      node.setEnd();
      this.endNode = node;
    } else node.setWall();
  }

  setNodeVisited(row, col) {
    if (row <= this.rowLen && col <= this.colLen)
      this.nodes[row][col].setVisited();
  }

  setNodeCurrent(row, col) {
    if (row <= this.rowLen && col <= this.colLen)
      this.nodes[row][col].setCurrent();
  }

  getNeighbors(row, col) {
    const neighbors = [];
    if (row < 0 || row >= this.rowLen || col < 0 || col >= this.colLen)
      return neighbors;
    if (row > 0) neighbors.push(this.nodes[row - 1][col]);
    if (row < this.rowLen) neighbors.push(this.nodes[row + 1][col]);
    if (col > 0) neighbors.push(this.nodes[row][col - 1]);
    if (col < this.colLen) neighbors.push(this.nodes[row][col + 1]);
    return neighbors;
  }

  updateNeighbors() {
    for (let i = 0; i < this.rowLen; i++) {
      for (let j = 0; j < this.colLen; j++) {
        const neighbors = this.getNeighbors(i, j);
        this.nodes[i][j].updateNeighbors(neighbors);
      }
    }
  }
}

export default Graph;
