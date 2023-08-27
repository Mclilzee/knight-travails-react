import { useState } from "react";
import ChessSquare from "../utils/ChessSquare";
import Cell from "./Cell";
import "./chess-board.css";
import { ChessData } from "./interfaces";
import BoardMark from "./BoardMark";

export default function ChessBoard() {
  const [board, setBoard] = useState(() => createBoard());

  function selectCell(id: string): void {
    setBoard((cells) => {
      return cells.map((cell) => {
        return { ...cell, selected: cell.id === id ? true : false };
      });
    });
  }

  function moveKnight(id: string): void {
    setBoard((cells) => {
      return cells.map((cell) => {
        return id === cell.id ? { ...cell, selected: false, knight: true } : { ...cell, knight: false };
      });
    });
  }

  const cellsMap = board.map((cell) => <Cell
    data={cell}
    selectCell={selectCell}
    moveKnight={moveKnight}
    key={cell.id}
  />)

  const rowMarks = "87654321".split("").map((mark) => <BoardMark mark={mark} key={mark} />)
  const columnMarks = "ABCDEFGH".split("").map((mark) => <BoardMark mark={mark} key={mark} />)

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

function createBoard(): ChessData[] {
  const cells: ChessData[] = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      cells.push({
        id: i + "" + j,
        square: new ChessSquare(i, j),
        knight: i === 3 && j === 4 ? true : false,
        selected: false,
        step: 0
      })
    }
  }

  return cells;
}
