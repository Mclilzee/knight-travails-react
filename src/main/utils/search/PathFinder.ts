import TupleSet from "../TupleSet";
import Node from "./Node";

export default class PathFinder {

  findShortestPath(start: [number, number], goal: [number, number]): [number, number][] {
    const visited: TupleSet = new TupleSet();
    const queue: Node[] = [new Node(start)];

    while (queue.length > 0) {
      const node = queue[0];
      const location = node.location;
      queue.splice(0, 1);
      visited.add(location);

      if (location[0] === goal[0] && location[1] === goal[1]) {
        return this.buildSquaresArray(node);
      }

      node.getMoves()
        .filter((move) => !visited.has(move.location))
        .forEach((move) => queue.push(move));
    }

    throw Error("Knight should always find the path");
  }

  visitAllSquares(start: [number, number]): [number, number][] {
    let visited: TupleSet = new TupleSet();
    const startNode = new Node(start);
    const result = this.recursivelyVisitNodes(startNode, visited);
    if (result !== null) {
      return this.buildSquaresArray(result);
    }

    throw Error("Could not find solution, which is impossible");
  }

  private recursivelyVisitNodes(start: Node, visited: TupleSet): Node | null {
    if (start.length === 64) {
      return start;
    }

    visited.add(start.location);
    const moves = start.getMoves().filter((move) => !visited.has(move.location));
    for (const move of moves) {
      const result = this.recursivelyVisitNodes(move, visited)
      if (result !== null) {
        return result;
      }
    }

    visited.remove(start.location);
    return null;
  }

  private buildSquaresArray(node: Node): [number, number][] {
    let parent = node.parent;
    const squares = [node.location];

    while (parent !== null) {
      squares.push(parent.location);
      parent = parent.parent;
    }

    return squares.reverse();
  }
}
