import { describe, test, expect } from "vitest";
import ChessSquare from "../../../main/utils/ChessSquare";
import { PathFinder } from "../../../main/utils/interfaces";
import BreadthFirstSearch from "../../../main/utils/search/BreadthFirstSearch";

describe("Returns correct path", () => {
  const search: PathFinder<ChessSquare> = new BreadthFirstSearch();
  test("Returns same node if it's the destination", () => {
    const start = new ChessSquare(0, 0);
    const goal = new ChessSquare(0, 0);

    const actual: ChessSquare[] = search.findPath(start, goal);
    expect(actual.length).toBe(1);
    expect(actual[0]).toBe(start);
  });
});
