import BoardMark from "./BoardMark";
import Cell from "./Cell";
import "./chess-board.css";
import { Board } from "./interfaces";

export default function ChessBoard({ board, selectCell, moveKnight }: Board) {
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
