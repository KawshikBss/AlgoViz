class Dijkstra {
  constructor(nodes, startNode, endNode, setNodeVisited, setNodeCurrent) {
    this.nodes = nodes;
    this.startNode = startNode;
    this.endNode = endNode;
    this.unvisitedNodes = this.getUnvisitedNodes(nodes);
    this.nodesMap = nodes.map((node) => {
      return { node: node, weight: Number.POSITIVE_INFINITY, previous: null };
    });
    this.visitedFunc = setNodeVisited;
    this.currentFunc = setNodeCurrent;
  }

  getUnvisitedNodes(nodes) {
    const unvisitedNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes[i].length; j++) {
        if (!nodes[i][j].isWall()) unvisitedNodes.push(nodes[i][j]);
      }
    }
    return unvisitedNodes;
  }

  findPath() {
    console.log(this.nodesMap);
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = 0; j < this.nodes[i].length; j++) {
        setTimeout(this.currentFunc, 500, i, j);
        setTimeout(this.visitedFunc, 520, i, j);
      }
    }
  }
}

export default Dijkstra;
