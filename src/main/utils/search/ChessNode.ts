import ChessPosition from "../ChessPosition";

export default class ChessNode {
  readonly position: ChessPosition = new ChessPosition(0, 1);
  readonly parent: ChessNode | null = null;

  constructor(position: ChessPosition, parent?: ChessNode) {
    this.position = position;

    if (parent !== undefined) {
      this.parent = parent;
    }
  }
}
