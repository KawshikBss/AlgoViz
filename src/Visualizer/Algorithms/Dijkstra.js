import PriorityQueue from "../DataStructures/PriorityQueue";

class Dijkstra {
  constructor(
    graph,
    startNode,
    endNode,
    setNodeVisited,
    setNodeCurrent,
    setNodePath
  ) {
    this.graph = graph;
    this.nodes = this.graph.getNodes();
    this.startNode = startNode;
    this.endNode = endNode;
    this.visitedNodes = this.getVisitedNodes(this.nodes);
    this.queue = new PriorityQueue();
    this.visitedFunc = setNodeVisited;
    this.currentFunc = setNodeCurrent;
    this.pathFunc = setNodePath;
    this.animationSpeed = 10;
  }

  getVisitedNodes(nodes) {
    const visitedNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes[i].length; j++) {
        if (!nodes[i][j].isWall()) visitedNodes.push(nodes[i][j]);
      }
    }
    return visitedNodes;
  }

  putVisitedNode(newNode) {
    for (var node in this.visitedNodes) {
      if (node.row === newNode.row && node.col === newNode.col) {
        this.visitedNodes[this.visitedNodes.indexOf(node)].setWeight(
          newNode.weight
        );
        return;
      }
    }
  }

  getVisitedWeight(node) {
    for (let i = 0; i < this.visitedNodes.length; i++) {
      let tmpNode = this.visitedNodes[i];
      if (tmpNode.row === node.row && tmpNode.col === node.col) {
        return tmpNode.weight;
      }
    }
    return Number.POSITIVE_INFINITY;
  }

  updateVisitedNodes() {
    for (let i = 0; i < this.visitedNodes.length; i++) {
      let node = this.visitedNodes[i];
      if (
        node.isVisited() ||
        !(this.getVisitedWeight(node) < Number.POSITIVE_INFINITY)
      )
        continue;
      setTimeout(this.visitedFunc, this.animationSpeed, node.row, node.col);
    }
  }

  markPath(node) {
    while (node.row !== this.startNode.row && node.col !== this.startNode.col) {
      setTimeout(this.pathFunc, this.animationSpeed, node.row, node.col);
      node = node.getPrevious();
    }
    /*if (node === undefined) return false;
    if (node.row === this.endNode.row && node.col === this.endNode.col) {
      console.log("stat", this.startNode);
      setTimeout(this.pathFunc, this.animationSpeed, node.row, node.col);
      if (node.row === this.startNode.row && node.col === this.startNode.col)
        return true;
    }
    //this.markPath(node.getPrevious());
    this.markPath(node.previous);*/
  }

  findPath() {
    if (!this.startNode || !this.endNode) return;
    let current = this.startNode;
    current.setPrevious(current);
    current.setWeight(0);
    this.putVisitedNode(current);
    this.queue.insert(current);
    let neighbors;
    while (!this.queue.isEmpty()) {
      current = this.queue.poll();
      if (current === null || current === undefined) {
        return false;
      }
      setTimeout(
        this.currentFunc,
        this.animationSpeed,
        current.row,
        current.col
      );
      if (
        current.row === this.endNode.row &&
        current.col === this.endNode.col
      ) {
        this.markPath(current);
        return;
      }
      neighbors = this.graph.getNeighbors(current.row, current.col);
      if (neighbors === null || neighbors === undefined) return;
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (this.getVisitedWeight(current) + 1 < neighbor.weight) {
          neighbor.setPrevious(current);
          neighbor.setWeight(this.getVisitedWeight(current) + 1);
          this.putVisitedNode(neighbor);
          this.queue.insert(neighbor);
        }
      }
      this.putVisitedNode(current);
      this.updateVisitedNodes();
    }
    /*
    for (let i = 0; i < neighbors.length; i++)
      this.visitedFunc(neighbors[i].row, neighbors[i].col);
    */
  }
}

export default Dijkstra;
