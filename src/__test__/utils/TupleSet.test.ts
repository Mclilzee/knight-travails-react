import { describe, expect, test } from "vitest";
import TupleSet from "../../main/utils/TupleSet";

describe("Add tuples to the set", () => {
  test("Adds tuple to the set", () => {
    const set: TupleSet = new TupleSet();
    expect(set.size()).toBe(0);

    set.add([0, 0]);
    expect(set.size()).toBe(1);
  });

  test("Add more than one tuple returns the correct length", () => {
    const set: TupleSet = new TupleSet();
    expect(set.size()).toBe(0);

    set.add([0, 0])
    expect(set.size()).toBe(1);

    set.add([1, 1])
    expect(set.size()).toBe(2);

    set.add([2, 2])
    expect(set.size()).toBe(3);

    set.add([3, 3])
    expect(set.size()).toBe(4);
  });

  test("Does not add if tuple already exist", () => {
    const set: TupleSet = new TupleSet();

    expect(set.size()).toBe(0);

    set.add([0, 0])
    expect(set.size()).toBe(1);

    set.add([0, 0])
    expect(set.size()).toBe(1);
  });
});

describe("Check if set has an tuple", () => {
  test("Set does not contain tuple if it's empty", () => {
    const set: TupleSet = new TupleSet();

    expect(set.has([0, 0])).toBe(false);
  });

  test("Set has tuple that is added", () => {
    const set: TupleSet = new TupleSet();

    set.add([5, 5]);
    expect(set.has([5, 5])).toBe(true);
  });
});

describe("Set removes the correct tuples", () => {
  test("Removes does not error on empty set", () => {
    const set: TupleSet = new TupleSet();

    expect(set.size()).toBe(0);

    set.remove([6, 6]);
    expect(set.has([6, 6])).toBe(false);
    expect(set.size()).toBe(0);
  });

  test("Removes the correct tuple", () => {
    const set: TupleSet = new TupleSet();
    expect(set.size()).toBe(0);

    set.add([4, 5]);
    expect(set.size()).toBe(1);
    expect(set.has([4, 5])).toBe(true);

    set.remove([4, 5]);
    expect(set.size()).toBe(0);
    expect(set.has([4, 5])).toBe(false);
  })
});
