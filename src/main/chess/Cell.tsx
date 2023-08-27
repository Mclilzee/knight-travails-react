import { ChessBoardCell } from "./interfaces";
import knightSvg from "../assets/knight.svg";
import crossHairSvg from "../assets/crosshairs.svg";

export default function Cell({ data, clickHandler }: ChessBoardCell) {

  function handleClick() {
    clickHandler(data.id);
  }

  return (
    <div className={
      `cell ${(data.square.x + data.square.y) % 2 === 0 ? "white" : "black"} ${data.knight ? "knight" : ""}`}
      onClick={handleClick}
    >
      {data.knight && <img className="knight" src={knightSvg} draggable={true} />}
      {!data.knight && data.selected && <img className="crosshair" src={crossHairSvg} />}
      {!data.knight && !data.selected && data.step > 0 && data.step}
    </div >
  )
}
