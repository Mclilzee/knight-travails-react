export interface Hashable<T> {
  equals: (other: T) => boolean;
  hash: () => number;
}

export interface PathFinder<T> {
  findPath: (start: T, goal: T) => T[];
}
