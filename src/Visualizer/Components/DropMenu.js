import React, { useState } from "react";
import "../../styles/Dropdown.css";

function DropMenu() {
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
        Select Algorithm
      </button>
      <div className="dropdown-menu">
        <div className="dropdown-links">
          <button className="link">Dijkstra's</button>
          <button className="link">A*</button>
          <button className="link">BFS</button>
          <button className="link">BFS</button>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
