import ChessSquare from "../ChessSquare";
import { PathFinder } from "../interfaces";
import Node from "./Node";

export default class BreadthFirstSearch implements PathFinder<ChessSquare> {
  start: Node;
  goal: Node;

  constructor() {
    const firstSquare = new ChessSquare(0, 0);
    this.start = new Node(firstSquare);
    this.goal = new Node(firstSquare);
  }

  findPath(start: ChessSquare, goal: ChessSquare): ChessSquare[] {
    this.start = new Node(start);
    this.goal = new Node(goal);

    if (this.start.equals(this.goal)) {
      return [this.start.chessSquare];
    } else {
      return [this.start.chessSquare, this.goal.chessSquare];
    }
  }
}
