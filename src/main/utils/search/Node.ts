import ChessSquare from "../chess/ChessSquare";
import { Hashable } from "../interfaces";

export default class Node implements Hashable<Node> {
  readonly chessSquare: ChessSquare;
  readonly parent: Node | null = null;

  constructor(chessSquare: ChessSquare, parent?: Node) {
    this.chessSquare = chessSquare;

    if (parent !== undefined) {
      this.parent = parent;
    }
  }

  hash(): number {
    return this.chessSquare.x * 2 + this.chessSquare.y * 3;
  }

  equals(other: Node): boolean {
    return other.chessSquare.x === this.chessSquare.x &&
      other.chessSquare.y === this.chessSquare.y;
  }

  getMoves(): ChessSquare[] {
    return [];
  }
}
