import { ChessBoardCell } from "./interfaces"

export default function Cell(props: { cell: ChessBoardCell }) {
  return (
    <div className="cell">
      <h1>{props.cell.square.x} {props.cell.square.y}</h1>
    </div>
  )
}
