import { ChessBoardCell } from "./interfaces";

export default function Cell(props: ChessBoardCell) {
  return (
    <div className="cell">
      <h1>{props.square.x} {props.square.y}</h1>
    </div>
  )
}

