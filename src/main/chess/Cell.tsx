import ChessSquare from "../utils/ChessSquare"

export default function Cell({ cell }: ChessBoardCell) {
  return (
    <div className="cell">
      <h1>{cell.x} {cell.y}</h1>
    </div>
  )
}

interface ChessBoardCell {
  cell: ChessSquare
}
