interface Hashable<T> {
  equals: (other: T) => boolean;
  hash: () => number;
}
