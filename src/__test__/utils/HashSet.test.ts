import { describe, test, expect } from "vitest";
import { Hashable } from "../../main/utils/interfaces/Hashable";
import { HashSet } from "../../main/utils/HashSet";

describe("Add elements to the set", () => {
  test("Adds element to the set", () => {
    const set: HashSet<MockHashable> = new HashSet();
    const mockObject = new MockHashable();

    expect(set.length()).toBe(0);
    set.add(mockObject)
    expect(set.length()).toBe(1);
  })
})

class MockHashable implements Hashable<MockHashable> {
  hash(): number {
    return 0;
  }

  equals(other: MockHashable) {
    other.hash();
    return true;
  }
}
