import { Hashable } from "./interfaces";

export default class ChessPosition implements Hashable<ChessPosition> {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  hash(): number {
    return Math.abs(this.x * 2 + this.y * 3);
  }

  equals(other: ChessPosition): boolean {
    return other.y === this.y && other.x === this.x;
  }
}
