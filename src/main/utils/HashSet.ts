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
    const array = this.map.get(key) as T[];

    for (const eachElement of array) {
      if (eachElement.equals(element)) {
        return;
      }
    }

    array.push(element);
    this.size++;
  }

  contains(element: T): boolean {
    const key = element.hash();
    const array = this.map.get(key);
    if (array == undefined) {
      return false;
    }

    for (const eachElement of array) {
      if (eachElement.equals(element)) {
        return true;
      }
    }

    return false;
  }

  remove(element: T): void {
    const key = element.hash();
    if (!this.map.has(key)) {
      return;
    }

    const array = this.map.get(key) as T[];
    for (let i = 0; i < array.length; i++) {
      const arrayElement = array[i];
      if (arrayElement.equals(element)) {
        const newArray = array.slice(0, i);
        newArray.concat(array.slice(i + 1));
        this.map.set(key, newArray);
        this.size--;
      }
    }
  }

  length(): number {
    return this.size;
  }
}
