import ChessSquare from "../utils/ChessSquare";

export interface ChessBoardCell {
  data: ChessData,
  clickHandler: (id: string) => void
}

export interface ChessData {
  id: string,
  square: ChessSquare,
  knight: boolean,
  selected: boolean,
  step: number
}
