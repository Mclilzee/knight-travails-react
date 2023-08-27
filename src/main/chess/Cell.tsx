import { ChessBoardCell } from "./interfaces";
import knightSvg from "../assets/knight.svg";
import crossHairSvg from "../assets/crosshairs.svg";
import { DragEvent } from "react";

export default function Cell({ data, clickHandler }: ChessBoardCell) {

  function handleClick(): void {
    clickHandler(data.id);
  }

  function dragOverHandler(e: DragEvent): void {
    if (data.knight) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function moveKnightHandler(e: DragEvent) {
    if (e.currentTarget.classList.contains("knight")) {
    }
  }

  return (
    <div className={
      `cell ${(data.square.x + data.square.y) % 2 === 0 ? "white" : "black"} ${data.knight ? "knight" : ""}`}
      onClick={handleClick}
      onDragOver={dragOverHandler}
      onDragEnd={moveKnightHandler}
    >
      {data.knight && <img className="knight" src={knightSvg} />}
      {!data.knight && data.selected && <img className="crosshair" src={crossHairSvg} />}
      {!data.knight && !data.selected && data.step > 0 && data.step}
    </div >
  )
}
