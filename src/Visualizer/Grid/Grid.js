import React from "react";
import Node from "../Node/Node";
import Graph from "../DataStructures/Graph";
import Dijkstra from "../Algorithms/Dijkstra";
import "./Grid.css";
import Header from "../Components/Header";
import Information from "../Components/Information";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: new Graph(props.rows, props.cols),
      algorithms: ["Dijkstra's", "A*", "BFS", "DFS", "Kruskall's"],
      currentAlgorithm: null,
    };
  }

  setCurrentAlgorithm(algIndex) {
    let currentAlgorithm = null;
    if (algIndex >= 0 && algIndex < this.state.algorithms.length)
      currentAlgorithm = this.state.algorithms[algIndex];
    this.setState({ currentAlgorithm });
  }

  handleNodeClick(row, col) {
    const graph = this.state.graph;
    graph.handleNode(row, col);
    this.setState({ graph });
  }

  setNodeVisited(row, col) {
    const graph = this.state.graph;
    const node = graph.getNodes()[row][col];
    if (node.isStart() || node.isEnd() || node.isWall()) return;
    graph.setNodeVisited(row, col);
    this.setState({ graph });
  }

  setNodeCurrent(row, col) {
    const graph = this.state.graph;
    const node = graph.getNodes()[row][col];
    if (node.isStart() || node.isEnd() || node.isWall()) return;
    graph.setNodeCurrent(row, col);
    this.setState({ graph });
  }

  setNodePath(row, col) {
    const graph = this.state.graph;
    const node = graph.getNodes()[row][col];
    if (node.isStart() || node.isEnd() || node.isWall()) return;
    graph.setNodePath(row, col);
    this.setState({ graph });
  }

  resetGraph() {
    const graph = this.state.graph;
    graph.resetGraph();
    this.setState({ graph });
  }

  resetPath() {
    const graph = this.state.graph;
    graph.resetPathNodes();
    this.setState({ graph });
  }

  resetWalls() {
    const graph = this.state.graph;
    graph.resetWallNodes();
    this.setState({ graph });
  }

  startAlgorithm() {
    const graph = this.state.graph;
    let algorithm = null;
    switch (this.state.currentAlgorithm) {
      case "Dijkstra's":
        algorithm = new Dijkstra(
          graph,
          graph.getStartNode(),
          graph.getEndNode(),
          this.setNodeVisited.bind(this),
          this.setNodeCurrent.bind(this),
          this.setNodePath.bind(this)
        );
        break;
      default:
        console.log("No algorithm selected");
    }

    if (algorithm === null) return;
    algorithm.findPath();
  }

  render() {
    return (
      <div>
        <Header
          startAlgorithm={this.startAlgorithm.bind(this)}
          resetGraph={this.resetGraph.bind(this)}
          resetPath={this.resetPath.bind(this)}
          resetWalls={this.resetWalls.bind(this)}
          algorithms={this.state.algorithms}
          currentAlgorithm={this.state.currentAlgorithm}
          setCurrentAlgorithm={this.setCurrentAlgorithm.bind(this)}
        />
        <Information />
        <div className="grid-main">
          {this.state.graph.getNodes().map((row) => (
            <span className="grid-row">
              {row.map((node) => (
                <Node
                  key={`${node.row}${node.col}`}
                  status={node.getStatus()}
                  handleClick={() => {
                    this.handleNodeClick(node.row, node.col);
                  }}
                />
              ))}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Grid;
