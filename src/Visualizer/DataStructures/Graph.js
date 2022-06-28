import Node from "./Node";

class Graph {
  constructor(rows, cols) {
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
  }

  getNodes() {
    return this.nodes;
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
    }

    if (this.startNode === null) {
      node.setStart();
      this.startNode = node;
    } else if (this.endNode === null) {
      node.setEnd();
      this.endNode = node;
    } else node.setVisited();
  }
}

export default Graph;
