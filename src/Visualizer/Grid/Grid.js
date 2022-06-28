import React, { useState } from "react";
import Node from "../Node/Node";
import "./Grid.css";
import Graph from "../DataStructures/Graph";

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

  render() {
    return (
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
    );
  }
}

export default Grid;
