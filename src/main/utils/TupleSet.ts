export default class TupleSet {
  private array: [number, number][] = [];

  add(tuple: [number, number]): void {
    if (!this.has(tuple)) {
      this.array.push(tuple);
    }

  }

  has(tuple: [number, number]): boolean {
    for (const each of this.array) {
      if (each[0] === tuple[0] && each[1] === tuple[1]) {
        return true;
      }
    }

    return false;
  }

  remove(tuple: [number, number]): void {
    this.array = this.array.filter((each) => each[0] !== tuple[0] || each[1] !== tuple[1]);
  }
}
