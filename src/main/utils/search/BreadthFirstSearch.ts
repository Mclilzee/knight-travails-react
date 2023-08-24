import { PathFinder } from "../interfaces";
import Node from "./Node";

export default class BreadthFirstSearch implements PathFinder<Node> {

  findPath(start: Node, goal: Node): Node[] {
    return [];
  }
}
