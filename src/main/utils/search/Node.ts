import ChessSquare from "../ChessSquare";
import Hashable from "../Hashable";

export default class Node implements Hashable<Node> {
  readonly chessSquare: ChessSquare;
  readonly parent: Node | null = null;
  readonly length: number;

  constructor(chessSquare: ChessSquare, parent?: Node) {
    this.chessSquare = chessSquare;

    if (parent !== undefined) {
      this.parent = parent;
      this.length = parent.length + 1;
    } else {
      this.length = 1;
    }
  }

  hash(): number {
    return this.chessSquare.x * 2 + this.chessSquare.y * 3;
  }

  equals(other: Node): boolean {
    return other.chessSquare.x === this.chessSquare.x &&
      other.chessSquare.y === this.chessSquare.y;
  }

  getMoves(): Node[] {
    return this.chessSquare.getKnightMoves()
      .map((square) => new Node(square, this));
  }
}
