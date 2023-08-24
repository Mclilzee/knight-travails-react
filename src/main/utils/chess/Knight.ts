import { Hashable } from "../interfaces";

export default class Knight implements Hashable<Knight> {
  position: Cord;

  constructor(row: number, column: number) {
    this.position = [row, column]
  }

  hash(): number {
    return Math.abs(this.position[0] * 2 + this.position[1] * 3);
  }

  equals(other: Knight): boolean {
    return other.position[0] === this.position[0] && other.position[1] === this.position[1];
  }
}

export type Cord = [number, number];

