import ChessSquare from "../utils/ChessSquare";
import { useState } from "react";
import "./chess-board.css";
import { ChessBoardRow, ChessBoardCell } from "./interfaces";
import Row from "./Row";

export default function ChessBoard() {
  const [board, _] = useState(createBoard());

  const rowMap = board.map((row, i) => <Row row={row} key={i} />)
  return (
    <div className="chess-board">
      {rowMap}
    </div>
  )
}

function createBoard(): ChessBoardRow[] {
  const chessBoard: ChessBoardRow[] = [];

  for (let i = 0; i < 8; i++) {
    const chessRow: ChessBoardRow = { cells: [], index: i };
    chessBoard.push(chessRow);
    for (let j = 0; j < 8; j++) {
      const cell: ChessBoardCell = {
        index: j,
        square: new ChessSquare(i, j),
        knight: false,
        selected: false,
        step: 0
      }
      chessRow.cells.push(cell);
    }
  }

  return chessBoard;
}
