export default abstract class ChessPiece {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    if (x > 7 || x < 0 || y > 7 || y < 0) {
      throw Error("ChessPiece cords cannot excceed board size or be negative");
    }

    this.x = x;
    this.y = y;
  }

  abstract getMoves(): ChessPiece[];
}
