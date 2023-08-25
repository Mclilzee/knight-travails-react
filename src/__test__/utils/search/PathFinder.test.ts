import { describe, test, expect } from "vitest";
import ChessSquare from "../../../main/utils/ChessSquare";
import PathFinder from "../../../main/utils/search/PathFinder";

describe("Returns correct path", () => {
  const finder: PathFinder = new PathFinder();

  test("Returns same start if it's the goal", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(0, 0);

    const actual: ChessSquare[] = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(1);
    expect(actual[0]).toBe(start);
  });

  test("Return correct squares in order", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(1, 2);

    const actual: ChessSquare[] = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(2);
    expect(actual[0]).toEqual(start);
    expect(actual[1]).toEqual(goal);
  });

  test("Returns path with multiple steps", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(0, 4);

    const expected: ChessSquare[] = [
      [0, 0],
      [1, 2],
      [0, 4]
    ].map((cord) => new ChessSquare(cord[0], cord[1]));

    const actual: ChessSquare[] = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(3);
    expect(actual).toEqual(expected);
  });

  test("Returns path with multiple steps 2", () => {
    const start = new ChessSquare(4, 4);
    const goal = new ChessSquare(1, 7);

    const expected: ChessSquare[] = [
      [4, 4],
      [2, 5],
      [1, 7]
    ].map((cord) => new ChessSquare(cord[0], cord[1]));

    const actual: ChessSquare[] = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(3);
    expect(actual).toEqual(expected);
  });

  test("Go backward to find a node that is closer", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(0, 1);

    const expected: ChessSquare[] = [
      [0, 0],
      [2, 1],
      [1, 3],
      [0, 1]
    ].map((cord) => new ChessSquare(cord[0], cord[1]));

    const actual: ChessSquare[] = finder.findShortestPath(start, goal);
    expect(actual.length).toBe(4);
    expect(actual).toEqual(expected);
  });

  test("Finds far away node", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(7, 7);

    const expected: ChessSquare[] = [
      [0, 0],
      [2, 1],
      [4, 0],
      [6, 1],
      [5, 3],
      [6, 5],
      [7, 7]
    ].map((cord) => new ChessSquare(cord[0], cord[1]));
    const actual: ChessSquare[] = finder.findShortestPath(start, goal);

    expect(actual.length).toBe(7);
    expect(actual).toEqual(expected);
  });
});

describe("Visit all squares on the board", () => {
  const finder = new PathFinder();
  test("Visit all squares", () => {
    const start = new ChessSquare(0, 0);
    expect(finder.visitAllSquares(start).length).toBe(64);
  });
});
