import React from "react";
import ButtonGroup from "./ButtonGroup";

function Header({ startAlgorithm, resetGraph, resetPath, resetWalls }) {
  return (
    <div>
      <ButtonGroup
        startAlgorithm={startAlgorithm}
        resetGraph={resetGraph}
        resetPath={resetPath}
        resetWalls={resetWalls}
      />
    </div>
  );
}

export default Header;
