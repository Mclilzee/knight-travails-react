import { Hashable } from "./interfaces/Hashable";

export class HashSet<T extends Hashable<T>> {
  private array: T[][];
  private size: number;

  constructor() {
    this.array = [];
    console.log(this.array);
    this.size = 0;
  }

  add(element: T): void {
    if (this.array[0] === undefined) {
      this.array[0] = [];
    }

    this.array[0].push(element);
    this.size++;
  }

  length(): number {
    return this.size;
  }
}
