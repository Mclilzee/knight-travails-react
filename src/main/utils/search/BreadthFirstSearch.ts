import ChessSquare from "../ChessSquare";
import HashSet from "../HashSet";
import { PathFinder } from "../interfaces";
import Node from "./Node";

export default class BreadthFirstSearch implements PathFinder<ChessSquare> {

  findPath(start: ChessSquare, goal: ChessSquare): ChessSquare[] {
    const visited: HashSet<Node> = new HashSet();
    const startNode = new Node(start);
    const goalNode = new Node(goal);
    const queue: Node[] = [startNode];

    while (queue.length > 0) {
      const node = queue[0];
      visited.add(node);
      queue.splice(0, 1);

      if (node.equals(goalNode)) {
        return this.buildSquaresArray(node);
      }

      node.getMoves()
        .filter((move) => !visited.contains(move))
        .forEach((move) => queue.push(move));
    }

    throw Error("Knight should always find the path");
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
