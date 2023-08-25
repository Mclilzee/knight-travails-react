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

  visitAllSquares(start: ChessSquare): ChessSquare[] {
    let visited: HashSet<Node> = new HashSet();
    const startNode = new Node(start);
    const result = this.recursivelyVisitNodes(startNode, visited);
    if (result !== null) {
      return this.buildSquaresArray(result);
    }

    throw Error("Could not find solution, which is impossible");
  }

  private recursivelyVisitNodes(start: Node, visited: HashSet<Node>): Node | null {
    if (start.length === 64) {
      return start;
    }

    const moves = start.getMoves();

    for (const move of moves) {
      visited.add(move);
      const result = this.recursivelyVisitNodes(move, visited);
      if (result !== null) {
        return result;
      } else {
        visited.remove(move);
      }
    }

    return null;
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
