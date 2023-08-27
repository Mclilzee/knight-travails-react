import { useState } from "react";
import ChessBoard from "./chess/ChessBoard"
import { ChessData } from "./chess/interfaces";
import ChessSquare from "./utils/ChessSquare";

function App() {
  const [board, setBoard] = useState(() => createBoard());

  function selectCell(id: string): void {
    setBoard((board) => {
      return board.map((cell) => {
        return { ...cell, selected: cell.id === id ? true : false };
      });
    });
  }

  function moveKnight(id: string): void {
    setBoard((board) => {
      return board.map((cell) => {
        return id === cell.id ? { ...cell, selected: false, knight: true } : { ...cell, knight: false };
      });
    });
  }

  return (
    <ChessBoard board={board} moveKnight={moveKnight} selectCell={selectCell} />
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

export default App
