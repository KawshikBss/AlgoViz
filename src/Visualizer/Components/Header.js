import React from "react";
import ButtonGroup from "./ButtonGroup";

function Header({
  startAlgorithm,
  resetGraph,
  resetPath,
  resetWalls,
  algorithms,
  currentAlgorithm,
  setCurrentAlgorithm,
}) {
  return (
    <div>
      <ButtonGroup
        startAlgorithm={startAlgorithm}
        resetGraph={resetGraph}
        resetPath={resetPath}
        resetWalls={resetWalls}
        algorithms={algorithms}
        currentAlgorithm={currentAlgorithm}
        setCurrentAlgorithm={setCurrentAlgorithm}
      />
    </div>
  );
}

export default Header;
