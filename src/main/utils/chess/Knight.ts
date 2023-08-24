export default class Knight {
  position: Cord;

  constructor(row: AllowedPositions, column: AllowedPositions) {
    this.position = [row, column];
  }
}

type AllowedPositions = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Cord = [number, number];

