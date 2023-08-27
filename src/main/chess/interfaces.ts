import ChessSquare from "../utils/ChessSquare";

export interface ChessBoardCell {
  data: ChessData,
  selectCell: (id: string) => void,
  moveKnight: (id: string) => void,
}

export interface ChessData {
  id: string,
  square: ChessSquare,
  knight: boolean,
  selected: boolean,
  step: number
}
