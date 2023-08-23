import { describe, expect, test } from "vitest";
import HashSet from "../../main/utils/HashSet";
import { Hashable } from "../../main/utils/interfaces";

describe("Add elements to the set", () => {
  test("Adds element to the set", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);

    expect(set.length()).toBe(0);

    set.add(mockObject)
    expect(set.length()).toBe(1);
  });

  test("Add more than one element returns the correct length", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);
    const mockObject2 = new MockHashable(1);

    expect(set.length()).toBe(0);

    set.add(mockObject)
    expect(set.length()).toBe(1);

    set.add(mockObject2)
    expect(set.length()).toBe(2);
  });

  test("Does not add if element already exist", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0, true);
    const mockObject2 = new MockHashable(0, true);

    expect(set.length()).toBe(0);

    set.add(mockObject)
    expect(set.length()).toBe(1);

    set.add(mockObject2)
    expect(set.length()).toBe(1);
  });

  test("Does add if elements has same hash but are not equal", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);
    const mockObject2 = new MockHashable(0);

    expect(set.length()).toBe(0);

    set.add(mockObject)
    expect(set.length()).toBe(1);

    set.add(mockObject2)
    expect(set.length()).toBe(2);
  });
});

describe("Check if set contains an element", () => {
  test("Set does not contain element if it's empty", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);

    expect(set.contains(mockObject)).toBe(false);
  });

  test("Set does contain element that is added", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);

    set.add(mockObject);
    expect(set.contains(mockObject)).toBe(true);
  });

  test("Set does not contain element that has same hash value but are not equal", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);
    const mockObject2 = new MockHashable(0);

    set.add(mockObject);
    expect(set.contains(mockObject2)).toBe(false);
  });
});

describe("Set removes the correct elements", () => {
  test("Removes does not error on empty set", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);

    expect(set.length()).toBe(0);

    set.remove(mockObject);
    expect(set.contains(mockObject)).toBe(false);
    expect(set.length()).toBe(0);
  });

  test("Removes the correct element", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);

    expect(set.length()).toBe(0);

    set.add(mockObject);
    expect(set.length()).toBe(1);
    expect(set.contains(mockObject)).toBe(true);

    set.remove(mockObject);
    expect(set.length()).toBe(0);
    expect(set.contains(mockObject)).toBe(false);
  })

  test("Does not remove element that has same hash if not equal", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable(0);
    const mockObject2 = new MockHashable(0);

    expect(set.length()).toBe(0);

    set.add(mockObject);
    expect(set.length()).toBe(1);
    expect(set.contains(mockObject)).toBe(true);

    set.remove(mockObject2);
    expect(set.length()).toBe(1);
    expect(set.contains(mockObject)).toBe(true);
  })
});

class MockHashable implements Hashable<MockHashable> {
  hashNumber: number;
  equality: boolean;

  constructor(hashNumber: number, equality?: boolean) {
    if (equality != null) {
      this.equality = equality;
    } else {
      this.equality = false;
    }

    this.hashNumber = hashNumber;
  }

  hash(): number {
    return this.hashNumber;
  }

  equals(other: MockHashable) {
    return this.equality || (this === other);
  }
}
