import Cell from "./Cell";
import { ChessBoardRow } from "./interfaces";

export default function Row(props: { row: ChessBoardRow }) {

  const cellsMap = props.row.cells.map((cell, i) => <Cell cell={cell} key={i} />);
  return (
    <div className="row">
      {cellsMap}
    </div>
  )
}


