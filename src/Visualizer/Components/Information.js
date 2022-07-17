import React from "react";
import Node from "../Node/Node";
import "../../styles/Information.css";

function Information() {
  return (
    <div>
      <span className="info-tab">
        <span className="info-tab-item">
          <Node status={"start"} />
          <h3>Start Node</h3>
        </span>
        <span className="info-tab-item">
          <Node status={"end"} />
          <h3>End Node</h3>
        </span>
        <span className="info-tab-item">
          <Node status={"visited"} />
          <h3>Visited Node</h3>
        </span>
        <span className="info-tab-item">
          <Node status={"path"} />
          <h3>Path Node</h3>
        </span>
        <span className="info-tab-item">
          <Node status={"wall"} />
          <h3>Wall Node</h3>
        </span>
      </span>
    </div>
  );
}

export default Information;
