import ChessSquare from "../utils/ChessSquare";
import { useState } from "react";
import Row from "./Row";
import "./chess-board.css";

export default function ChessBoard() {
  const [board, _] = useState(createBoard());

  const rowMap = board.map((row, i) => <Row row={row} key={i} />)
  return (
    <div className="chess-board">
      {rowMap}
    </div>
  )
}

function createBoard(): ChessSquare[][] {
  const chessBoard: ChessSquare[][] = [];
  for (let i = 0; i < 8; i++) {
    chessBoard.push([]);
    for (let j = 0; j < 8; j++) {
      chessBoard[i].push(new ChessSquare(i, j));
    }
  }

  return chessBoard;
}
