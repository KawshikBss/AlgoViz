import React from "react";
import "../../styles/ButtonGroup.css";

function ButtonGroup({ startAlgorithm, resetGraph, resetPath, resetWalls }) {
  return (
    <div className="btn-group">
      <button className="btn-start" onClick={startAlgorithm}>
        Start
      </button>
      <button className="btn-group-item" onClick={resetGraph}>
        Reset
      </button>
      <button className="btn-group-item" onClick={resetPath}>
        Reset Path
      </button>
      <button className="btn-group-item" onClick={resetWalls}>
        Reset Walls
      </button>
    </div>
  );
}

export default ButtonGroup;
