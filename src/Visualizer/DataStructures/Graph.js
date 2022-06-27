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
  }

  getNodes() {
    return this.nodes;
  }

  setNodeVisited(row, col) {
    this.nodes[row][col].setVisited();
  }
}

export default Graph;
