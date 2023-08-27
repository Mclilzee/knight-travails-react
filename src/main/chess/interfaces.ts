export interface Board {
  board: ChessData[],
  selectCell: (id: string) => void,
  moveKnight: (id: string) => void,
}

export interface ChessBoardCell {
  data: ChessData,
  selectCell: (id: string) => void,
  moveKnight: (id: string) => void,
}

export interface ChessData {
  id: string,
  point: [number, number],
  knight: boolean,
  selected: boolean,
  step: number
}
