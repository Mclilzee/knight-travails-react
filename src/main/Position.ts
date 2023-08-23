import Hashable from "./utils/interfaces/Hashable";

export default class Position implements Hashable<Position> {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  hash(): number {
    return Math.abs(this.x * 2 + this.y * 3);
  }

  equals(other: Position): boolean {
    return other.y === this.y && other.x === this.x;
  }
}
