export default class Node {
  readonly location: [number, number];
  readonly parent: Node | null = null;
  readonly length: number;

  constructor(location: [number, number], parent?: Node) {
    this.location = location;

    if (parent !== undefined) {
      this.parent = parent;
      this.length = parent.length + 1;
    } else {
      this.length = 1;
    }
  }

  getMoves(): Node[] {
    const moves: [number, number][] = [
      [this.location[0] - 1, this.location[1] - 2],
      [this.location[0] - 2, this.location[1] - 1],
      [this.location[0] - 2, this.location[1] + 1],
      [this.location[0] - 1, this.location[1] + 2],
      [this.location[0] + 1, this.location[1] + 2],
      [this.location[0] + 2, this.location[1] + 1],
      [this.location[0] + 2, this.location[1] - 1],
      [this.location[0] + 1, this.location[1] - 2]
    ]

    const validMoves: Node[] = [];
    for (const move of moves) {
      if (move[0] <= 7 && move[0] >= 0 && move[1] <= 7 && move[1] >= 0) {
        validMoves.push(new Node(move, this));
      }
    }

    return validMoves;
  }
}
