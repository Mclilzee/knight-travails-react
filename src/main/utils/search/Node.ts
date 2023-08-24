import Knight from "../chess/Knight";

export default class Node {
  readonly knight: Knight;
  readonly parent: Node | null = null;

  constructor(position: Knight, parent?: Node) {
    this.knight = position;

    if (parent !== undefined) {
      this.parent = parent;
    }
  }

  getMoves(): Knight[] {
    return [];
  }
}
