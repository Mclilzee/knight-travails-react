import { ChessBoardCell } from "./interfaces";
import knightSvg from "../assets/knight.svg";

export default function Cell({ square, step, selected, knight }: ChessBoardCell) {

  return (
    <div className={
      `cell ${(square.x + square.y) % 2 === 0 ? "white" : "black"}`} >
      {knight && <img src="../assets/knight.svg" />}
      {!knight && selected && <div></div>}
      {!knight && !selected && step > 0 && step}
    </div >
  )
}
