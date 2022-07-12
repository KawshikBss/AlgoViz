import Node from "./Node";

class Graph {
  constructor(rows, cols) {
    this.rowLen = rows;
    this.colLen = cols;
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

  resetGraph() {
    for (let i = 0; i < this.rowLen; i++) {
      for (let j = 0; j < this.colLen; j++) this.nodes[i][j].resetNode();
    }
    this.startNode = null;
    this.endNode = null;
  }

  resetPathNodes() {
    let walls = [];
    let tmpSart = null;
    let tmpEnd = null;
    for (let i = 0; i < this.rowLen; i++) {
      for (let j = 0; j < this.colLen; j++) {
        if (this.nodes[i][j].isWall()) walls.push(this.nodes[i][j]);
        else if (this.nodes[i][j].isStart()) tmpSart = this.nodes[i][j];
        else if (this.nodes[i][j].isEnd()) tmpEnd = this.nodes[i][j];
        this.nodes[i][j].resetNode();
      }
    }
    for (let i = 0; i < walls.length; i++)
      this.nodes[walls[i].row][walls[i].col].setWall();
    this.startNode = tmpSart;
    this.endNode = tmpEnd;
    this.nodes[this.startNode.row][this.startNode.col].setStart();
    this.nodes[this.endNode.row][this.endNode.col].setEnd();
  }

  resetWallNodes() {
    for (let i = 0; i < this.rowLen; i++) {
      for (let j = 0; j < this.colLen; j++)
        if (this.nodes[i][j].isWall()) this.nodes[i][j].resetNode();
    }
  }

  setNodeVisited(row, col) {
    if (row <= this.rowLen && col <= this.colLen)
      this.nodes[row][col].setVisited();
  }

  setNodeCurrent(row, col) {
    if (row <= this.rowLen && col <= this.colLen)
      this.nodes[row][col].setCurrent();
  }

  setNodePath(row, col) {
    if (row <= this.rowLen && col <= this.colLen)
      this.nodes[row][col].setPath();
  }

  getNeighbors(row, col) {
    const neighbors = [];
    if (row < 0 || row >= this.rowLen || col < 0 || col >= this.colLen)
      return neighbors;
    if (col < this.colLen - 1) neighbors.push(this.nodes[row][col + 1]);
    if (row > 0) neighbors.push(this.nodes[row - 1][col]);
    if (col > 0) neighbors.push(this.nodes[row][col - 1]);
    if (row < this.rowLen - 1) neighbors.push(this.nodes[row + 1][col]);
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
