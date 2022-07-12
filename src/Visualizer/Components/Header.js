import React from "react";
import ButtonGroup from "./ButtonGroup";

function Header({ startAlgorithm, resetGraph, resetPath }) {
  return (
    <div>
      <ButtonGroup
        startAlgorithm={startAlgorithm}
        resetGraph={resetGraph}
        resetPath={resetPath}
      />
    </div>
  );
}

export default Header;
