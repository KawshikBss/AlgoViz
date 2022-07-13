import React, { useState } from "react";
import "../../styles/Dropdown.css";

function DropMenu({ algorithms, currentAlgorithm, setCurrentAlgorithm }) {
  const [isActive, setActive] = useState(false);
  function getClassNames() {
    if (isActive) return "dropdown active";
    return "dropdown";
  }
  return (
    <div className={getClassNames()}>
      <button
        className="link"
        onClick={() => {
          setActive(!isActive);
        }}
      >
        {currentAlgorithm === null
          ? "Select Algorithm"
          : "Visualize " + currentAlgorithm}
      </button>
      <div className="dropdown-menu">
        <div className="dropdown-links">
          {algorithms.map((alg) => {
            return (
              <button
                key={algorithms.indexOf(alg)}
                className="link"
                onClick={() => {
                  setCurrentAlgorithm(algorithms.indexOf(alg));
                  setActive(false);
                }}
                onBlur={() => {
                  setActive(false);
                }}
              >
                {alg}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
