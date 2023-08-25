import ChessSquare from "../ChessSquare";
import { PathFinder } from "../interfaces";
import Node from "./Node";

export default class BreadthFirstSearch implements PathFinder<ChessSquare> {

  findPath(start: ChessSquare, goal: ChessSquare): ChessSquare[] {
    return [start];
  }
}
