import Knight from "../chess/Knight";
import { Hashable } from "../interfaces";

export default class Node implements Hashable<Node> {
  readonly knight: Knight;
  readonly parent: Node | null = null;

  constructor(position: Knight, parent?: Node) {
    this.knight = position;

    if (parent !== undefined) {
      this.parent = parent;
    }
  }

  hash(): number {
    return this.knight.x * 2 + this.knight.y * 3;
  }

  equals(other: Node): boolean {
    return other.knight.x === this.knight.x &&
      other.knight.y === this.knight.y;
  }

  getMoves(): Knight[] {
    return [];
  }
}
