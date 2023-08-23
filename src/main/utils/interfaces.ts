import SearchNode from "./search/SearchNode";

export interface Hashable<T> {
  equals: (other: T) => boolean;
  hash: () => number;
}

export interface PathFinder {
  findPath: (startNode: SearchNode, goalNode: SearchNode) => SearchNode[];
}
