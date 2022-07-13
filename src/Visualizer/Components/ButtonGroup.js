import React from "react";
import "../../styles/ButtonGroup.css";
import DropMenu from "./DropMenu";

function ButtonGroup({
  startAlgorithm,
  resetGraph,
  resetPath,
  resetWalls,
  algorithms,
  currentAlgorithm,
  setCurrentAlgorithm,
}) {
  return (
    <div className="btn-group">
      <DropMenu
        algorithms={algorithms}
        currentAlgorithm={currentAlgorithm}
        setCurrentAlgorithm={setCurrentAlgorithm}
      />
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
