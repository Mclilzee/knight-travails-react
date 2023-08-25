import ChessSquare from "../ChessSquare";
import HashSet from "../HashSet";
import Node from "./Node";

export default class PathFinder {

  findShortestPath(start: ChessSquare, goal: ChessSquare): ChessSquare[] {
    const visited: HashSet<Node> = new HashSet();
    const startNode = new Node(start);
    const goalNode = new Node(goal);
    const queue: Node[] = [startNode];

    while (queue.length > 0) {
      const node = queue[0];
      queue.splice(0, 1);
      visited.add(node);

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
