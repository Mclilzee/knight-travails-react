import Knight from "../chess/Knight";

export default class ChessNode {
  readonly position: Knight = new Knight(0, 1);
  readonly parent: ChessNode | null = null;

  constructor(position: Knight, parent?: ChessNode) {
    this.position = position;

    if (parent !== undefined) {
      this.parent = parent;
    }
  }
}
