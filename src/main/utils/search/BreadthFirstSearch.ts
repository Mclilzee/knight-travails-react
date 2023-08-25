import ChessSquare from "../ChessSquare";
import HashSet from "../HashSet";
import { PathFinder } from "../interfaces";
import Node from "./Node";

export default class BreadthFirstSearch implements PathFinder<ChessSquare> {
  readonly visited = new HashSet<Node>();

  findPath(start: ChessSquare, goal: ChessSquare): ChessSquare[] {
    const startNode = new Node(start);
    const goalNode = new Node(goal);
    const queue: Node[] = [startNode];

    while (queue.length > 0) {
      const node = queue[0];
      queue.splice(1);
      this.visited.add(startNode);

      if (node.equals(goalNode)) {
        return this.buildSquaresArray(node);
      }

      node.getMoves()
        .filter((move) => this.visited.contains(move))
        .forEach((move) => queue.push(move));
    }

    return [];
  }

  private buildSquaresArray(node: Node): ChessSquare[] {
    let parent = node.parent;
    const squares: ChessSquare[] = [node.chessSquare];

    while (parent !== null) {
      squares.push(parent.chessSquare);
      parent = parent.parent;
    }

    return squares.reverse();
  }
}
