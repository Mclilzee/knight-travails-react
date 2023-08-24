export default class Knight {
  position: Cord;

  constructor(row: number, column: number) {
    this.position = [row, column]
  }
}

export type Cord = [number, number];

