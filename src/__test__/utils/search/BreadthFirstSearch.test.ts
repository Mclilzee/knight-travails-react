import { describe, test, expect } from "vitest";
import ChessSquare from "../../../main/utils/ChessSquare";
import { PathFinder } from "../../../main/utils/interfaces";
import BreadthFirstSearch from "../../../main/utils/search/BreadthFirstSearch";

describe("Returns correct path", () => {
  const search: PathFinder<ChessSquare> = new BreadthFirstSearch();

  test("Returns same start if it's the goal", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(0, 0);

    const actual: ChessSquare[] = search.findPath(start, goal);
    expect(actual.length).toBe(1);
    expect(actual[0]).toBe(start);
  });

  test("Return correct squares in order", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(1, 2);

    const actual: ChessSquare[] = search.findPath(start, goal);
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

    const actual: ChessSquare[] = search.findPath(start, goal);
    expect(actual).toEqual(expected);
  });
});
