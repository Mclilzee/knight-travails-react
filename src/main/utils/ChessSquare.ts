export default class ChessSquare {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    if (x > 7 || x < 0 || y > 7 || y < 0) {
      throw Error("ChessPiece cords cannot excceed board size or be negative");
    }

    this.x = x;
    this.y = y;
  }

  getKnightMoves(): ChessSquare[] {
    const moves = [
      [this.x - 2, this.y - 1],
      [this.x - 1, this.y - 2],
      [this.x + 1, this.y - 2],
      [this.x + 2, this.y - 1],
      [this.x + 2, this.y + 1],
      [this.x - 2, this.y + 1],
      [this.x - 1, this.y + 2],
      [this.x + 1, this.y + 2]
    ]

    const legalMoves: ChessSquare[] = [];

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      if (move[0] > 7 || move[0] < 0 || move[1] > 7 || move[1] < 0) {
        continue;
      }

      legalMoves.push(new ChessSquare(move[0], move[1]));
    }

    return legalMoves;
  }
}
