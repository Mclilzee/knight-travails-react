import { Hashable } from "./interfaces/Hashable";

export class HashSet<T extends Hashable<T>> {
  private map: Map<number, T[]>;
  private size: number;

  constructor() {
    this.map = new Map();
    this.size = 0;
  }

  add(element: T): void {
    const key = element.hash();
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    const array = this.map.get(key);

    array?.push(element);
    this.size++;
  }

  length(): number {
    return this.size;
  }
}
