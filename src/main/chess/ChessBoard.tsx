import { useState } from "react";
import ChessSquare from "../utils/ChessSquare";
import Cell from "./Cell";
import "./chess-board.css";
import { ChessBoardCell } from "./interfaces";

export default function ChessBoard() {
  const [board, _] = useState(createBoard());

  const cellsMap = board.map((cell) => <Cell
    square={cell.square}
    knight={cell.knight}
    selected={cell.selected}
    step={cell.step}
    id={cell.id}
    key={cell.id}
  />)

  return (
    <div className="chess-board">
      {cellsMap}
    </div>
  )
}

function createBoard(): ChessBoardCell[] {
  const cells: ChessBoardCell[] = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      cells.push({
        id: i + "" + j,
        square: new ChessSquare(i, j),
        knight: false,
        selected: true,
        step: 0
      })
    }
  }

  return cells;
}
