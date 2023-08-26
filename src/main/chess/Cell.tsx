import { ChessBoardCell } from "./interfaces";
import knightSvg from "../assets/knight.svg";
import crossHairSvg from "../assets/crosshairs.svg";

export default function Cell({ square, step, selected, knight }: ChessBoardCell) {

  return (
    <div className={
      `cell ${(square.x + square.y) % 2 === 0 ? "white" : "black"}`} >
      {knight && <img className="knight" src={knightSvg} />}
      {!knight && selected && <img className="crosshair" src={crossHairSvg} />}
      {!knight && !selected && step > 0 && step}
    </div >
  )
}
