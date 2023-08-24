import { PathFinder } from "../interfaces";
import ChessNode from "./ChessNode";

export default class BreadthFirstSearch implements PathFinder<ChessNode> {

  findPath(startNode: ChessNode, goalNode: ChessNode): ChessNode[] {
    return [];
  }
}
