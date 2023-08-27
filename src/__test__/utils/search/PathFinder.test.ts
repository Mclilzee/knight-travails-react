import { describe, test, expect } from "vitest";
import PathFinder from "../../../main/utils/search/PathFinder";
import TupleSet from "../../../main/utils/TupleSet";

describe("Returns correct path", () => {
  const finder: PathFinder = new PathFinder();

  test("Returns same start if it's the goal", () => {
    const start: [number, number] = [0, 0];
    const goal: [number, number] = [0, 0];

    const actual = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(1);
    expect(actual[0]).toBe(start);
  });

  test("Return correct squares in order", () => {
    const start: [number, number] = [0, 0];
    const goal: [number, number] = [1, 2];

    const actual = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(2);
    expect(actual[0]).toEqual(start);
    expect(actual[1]).toEqual(goal);
  });

  test("Returns path with multiple steps", () => {
    const start: [number, number] = [0, 0];
    const goal: [number, number] = [0, 4];

    const expected: [number, number][] = [
      [0, 0],
      [1, 2],
      [0, 4]
    ];

    const actual = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(3);
    expect(actual).toEqual(expected);
  });

  test("Returns path with multiple steps 2", () => {
    const start: [number, number] = [4, 4];
    const goal: [number, number] = [1, 7];

    const expected: [number, number][] = [
      [4, 4],
      [2, 5],
      [1, 7]
    ];

    const actual = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(3);
    expect(actual).toEqual(expected);
  });

  test("Can travel backward to find a node", () => {
    const start: [number, number] = [0, 0];
    const goal: [number, number] = [0, 1];

    const expected: [number, number][] = [
      [0, 0],
      [1, 2],
      [2, 0],
      [0, 1]
    ];

    const actual = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(4);
    expect(actual).toEqual(expected);
  });

  test("Finds far away node", () => {
    const start: [number, number] = [0, 0];
    const goal: [number, number] = [7, 7];

    const expected: [number, number][] = [
      [0, 0],
      [1, 2],
      [0, 4],
      [1, 6],
      [3, 7],
      [5, 6],
      [7, 7]
    ];

    const actual = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(7);
    expect(actual).toEqual(expected);
  });
});

describe("Visit all squares on the board", () => {
  const finder = new PathFinder();
  test("Visit all squares", () => {
    const start: [number, number] = [3, 4];
    expect(finder.visitAllSquares(start).length).toBe(64);
  });

  test("Visit all from different starting position", () => {
    let start: [number, number] = [0, 0];
    expect(finder.visitAllSquares(start).length).toBe(64);

    start = [7, 7];
    expect(finder.visitAllSquares(start).length).toBe(64);

    start = [5, 5];
    expect(finder.visitAllSquares(start).length).toBe(64);
  });

  test("First node is the starting position", () => {
    const start: [number, number] = [2, 6];
    const result = finder.visitAllSquares(start);
    expect(result.length).toBe(64);
    expect(result[0]).toEqual(start);
  });

  test("Visit each node exactly once", () => {
    const start: [number, number] = [0, 7];
    const result = finder.visitAllSquares(start);
    const set = new TupleSet();
    for (const tuple of result) {
      set.add(tuple);
    }

    expect(set.size()).toBe(64);
  });
});
