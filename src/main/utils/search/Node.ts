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
    return this.knight.position[0] * 2 + this.knight.position[1] * 3;
  }

  equals(other: Node): boolean {
    return other.knight.position[0] === this.knight.position[0] &&
      other.knight.position[1] === this.knight.position[1];
  }

  getMoves(): Knight[] {
    return [];
  }
}
