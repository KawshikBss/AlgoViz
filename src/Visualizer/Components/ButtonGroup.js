import React from "react";
import "../../styles/ButtonGroup.css";
import "../../styles/Button.css";

function ButtonGroup({ startAlgorithm, resetGraph, resetPath }) {
  return (
    <div className="btn-group">
      <button className="btn-group-item" onClick={resetPath}>
        Reset Path
      </button>
      <button className="button-85" onClick={startAlgorithm}>
        Start
      </button>
      <button className="btn-group-item" onClick={resetGraph}>
        Reset
      </button>
    </div>
  );
}

export default ButtonGroup;
