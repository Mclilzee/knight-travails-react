import { PathFinder } from "../interfaces";
import ChessNode from "./ChessNode";

export default class BreadthFirstSearch implements PathFinder<ChessNode> {

  findPath(start: ChessNode, goal: ChessNode): ChessNode[] {
    return [];
  }
}
