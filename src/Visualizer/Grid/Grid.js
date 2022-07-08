import React from "react";
import Node from "../Node/Node";
import "./Grid.css";
import Graph from "../DataStructures/Graph";
import Dijkstra from "../Algorithms/Dijkstra";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: new Graph(props.rows, props.cols),
    };
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

  startAlgorithm() {
    const graph = this.state.graph;
    const algorithm = new Dijkstra(
      graph,
      graph.getStartNode(),
      graph.getEndNode(),
      this.setNodeVisited.bind(this),
      this.setNodeCurrent.bind(this),
      this.setNodePath.bind(this)
    );
    algorithm.findPath();
  }

  render() {
    return (
      <div>
        <button onClick={this.startAlgorithm.bind(this)}>Start</button>
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
