import { ChessBoardCell } from "./interfaces";
import knightSvg from "../assets/knight.svg";
import crossHairSvg from "../assets/crosshairs.svg";
import { useState, useEffect } from "react";
import { DragEvent } from "react";

export default function Cell({ data, selectCell: cellClickHandler, moveKnight }: ChessBoardCell) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const timeOut = setTimeout(() => setStep(data.step), data.step * 500);
    return () => clearTimeout(timeOut);
  }, [data.step]);

  function handleClick(): void {
    cellClickHandler(data.id);
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
      onClick={handleClick}
      onDragOver={dragOverHandler}
      onDrop={moveKnightHandler}
    >
      {data.knight && <img className="knight" src={knightSvg} onDragStart={dragHandler} />}
      {!data.knight && data.selected && <img className="crosshair" src={crossHairSvg} />}
      {!data.knight && step > 0 && step}
    </div >
  )
}
