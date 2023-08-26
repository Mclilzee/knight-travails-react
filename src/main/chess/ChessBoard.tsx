import { useState } from "react";
import ChessSquare from "../utils/ChessSquare";
import Cell from "./Cell";
import "./chess-board.css";
import { ChessBoardCell } from "./interfaces";
import BoardMark from "./BoardMark";

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

  const rowMarks = "87654321".split("").map((mark) => <BoardMark mark={mark} />)
  const columnMarks = "ABCDEFGH".split("").map((mark) => <BoardMark mark={mark} />)

  return (
    <div className="chess-board">
      <div className="row-marks">
        {rowMarks}
      </div>
      <div className="board">
        {cellsMap}
      </div >
      <div className="column-marks">
        {columnMarks}
      </div>
    </div >
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
        selected: false,
        step: 0
      })
    }
  }

  return cells;
}
