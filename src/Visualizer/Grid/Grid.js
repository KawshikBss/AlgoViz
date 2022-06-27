import React, { useState } from "react";
import Node from "../Node/Node";
import "./Grid.css";
import Graph from "../DataStructures/Graph";

function Grid({ rows, cols }) {
  const graph = new Graph(rows, cols);

  return (
    <div className="grid-main">
      {graph.getNodes().map((row) => (
        <span className="grid-row">
          {row.map((node) => (
            <Node
              key={`${node.row}${node.col}`}
              status={node.getStatus()}
              handleClick={() => {
                graph.setNodeVisited(node.row, node.col);
                console.log("set");
              }}
            />
          ))}
        </span>
      ))}
    </div>
  );
}

export default Grid;
