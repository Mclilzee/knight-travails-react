import Cell from "./Cell";
import ChessSquare from "../utils/ChessSquare";

export default function Row({ row }: ChessBoardRow) {

  const cellsMap = row.map((cell, i) => <Cell cell={cell} key={i} />);
  return (
    <div className="row">
      {cellsMap}
    </div>
  )
}

interface ChessBoardRow {
  row: ChessSquare[];
}
