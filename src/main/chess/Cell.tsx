import ChessSquare from "../utils/ChessSquare";
import { ChessBoardCell } from "./interfaces";

export default function Cell({ square, step, selected, knight }: ChessBoardCell) {

  return (
    <div className={
      `cell 
      ${getCellColor(square)}
      ${selected ? "selected" : ""}
      ${knight ? "knight" : ""}
      `} >
      {step > 0 ? step : ""}
    </div >
  )
}

function getCellColor(square: ChessSquare) {
  if ((square.x + square.y) % 2 === 0) {
    return "white"
  } else {
    return "black"
  }
}

