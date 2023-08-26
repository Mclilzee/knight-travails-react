import ChessSquare from "../utils/ChessSquare"

export interface ChessBoardRow {
  index: number,
  cells: ChessBoardCell[],
}

export interface ChessBoardCell {
  index: number,
  square: ChessSquare,
  knight: boolean,
  selected: boolean,
  step: number
}
