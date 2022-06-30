class Dijkstra {
  constructor(nodes, startNode, endNode) {
    this.nodes = nodes;
    this.startNode = startNode;
    this.endNode = endNode;
    this.unvisitedNodes = nodes.filter((node) => {
      return node.isUnvisited();
    });
    this.nodesMap = nodes.map((node) => {
      return { node: node, weight: Number.POSITIVE_INFINITY, previous: null };
    });
  }
}
