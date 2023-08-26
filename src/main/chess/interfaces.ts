import ChessSquare from "../utils/ChessSquare";

export interface ChessBoardCell {
  id: string,
  square: ChessSquare,
  knight: boolean,
  selected: boolean,
  step: number
}
