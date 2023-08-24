export default class Knight {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    if (x > 7 || y > 7) {
      throw Error("ChessPiece cords cannot excceed board size");
    }

    this.x = x;
    this.y = y;
  }
}
