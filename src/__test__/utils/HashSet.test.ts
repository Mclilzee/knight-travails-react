import { describe, test, expect } from "vitest";
import { Hashable } from "../../main/utils/interfaces/Hashable";
import { HashSet } from "../../main/utils/HashSet";

describe("Add elements to the set", () => {
  test("Adds element to the set", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0, true);

    expect(set.length()).toBe(0);
    set.add(mockObject)
    expect(set.length()).toBe(1);
  });

  test("Add more than one element returns the correct length", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0, false);
    const mockObject2 = new MockHashable(1, false);

    expect(set.length()).toBe(0);
    set.add(mockObject)
    expect(set.length()).toBe(1);
    set.add(mockObject2)
    expect(set.length()).toBe(2);
  })
});

class MockHashable implements Hashable<MockHashable> {
  hashNumber: number;
  equality: boolean;

  constructor(hashNumber: number, equality: boolean) {
    this.hashNumber = hashNumber;
    this.equality = equality;
  }

  hash(): number {
    return this.hashNumber;
  }

  equals(other: MockHashable) {
    other.hash();
    return this.equality;
  }
}
