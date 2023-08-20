import { Hashable } from "./interfaces/Hashable";

export class HashSet<T extends Hashable<T>> {
  equals(other: T): boolean {
    return true;
  }

  hash(): number {
    return 5;
  }
}
