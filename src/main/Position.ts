import { HashSet } from "./utils/HashSet";

export class Position implements HashSet<Position> {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  hash(): number {
    return 5;
  }

  equals(other: Position) {
    return false;
  }
}
