import React from "react";
import Square from "./Square";

export default function Board() {
  return (
    <div>
      {/* 1st Row */}
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      {/* 2nd Row */}
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      {/* 3rd Row */}
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
