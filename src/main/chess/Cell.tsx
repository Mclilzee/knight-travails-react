import { ChessBoardCell } from "./interfaces";
import knightSvg from "../assets/knight.svg";
import crossHairSvg from "../assets/crosshairs.svg";
import { DragEvent } from "react";

export default function Cell({ data, selectCell, moveKnight }: ChessBoardCell) {
  function selectCellHandler(): void {
    if (data.knight) {
      return;
    }

    selectCell(data.id);
  }

  function dragHandler(e: DragEvent) {
    e.dataTransfer.setData("knight", "");
  }

  function dragOverHandler(e: DragEvent): void {
    if (data.knight) {
      return;
    } else if (e.dataTransfer.types.includes("knight")) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    }
  }

  function moveKnightHandler(e: DragEvent) {
    if (e.dataTransfer.types.includes("knight")) {
      moveKnight(data.id);
    }
  }

  return (
    <div className={
      `cell ${(data.point[0] + data.point[1]) % 2 === 0 ? "white" : "black"} ${data.knight ? "knight" : ""}`}
      onClick={selectCellHandler}
      onDragOver={dragOverHandler}
      onDrop={moveKnightHandler}
    >
      {data.knight && <img className="knight" src={knightSvg} onDragStart={dragHandler} />}
      {!data.knight && data.selected && <img className="crosshair" src={crossHairSvg} />}
      {!data.knight && data.step > 0 && <div className="step">{data.step}</div>}
    </div >
  )
}
