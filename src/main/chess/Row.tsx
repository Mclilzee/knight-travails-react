import Cell from "./Cell";
import ChessSquare from "../utils/ChessSquare";

export default function Row({ row }: ChessBoardRow) {

  const cellsMap = row.map(cell => <Cell cell={cell} />);
  return (
    <div className="row">
      {cellsMap}
    </div>
  )
}

interface ChessBoardRow {
  row: ChessSquare[];
}
