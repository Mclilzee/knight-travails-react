import { describe, expect, test } from "vitest";
import ChessPosition from "../../../main/utils/ChessPosition";
import ChessNode from "../../../main/utils/search/ChessNode";

describe("Construction", () => {
  test("Contains no parrent when parrent not given", () => {
    const position = new ChessPosition(0, 1);
    const node = new ChessNode(position);

    expect(node.position).toBe(position);
    expect(node.parent).toBeNull();
  });

  test("Contains correct parrent when given", () => {
    const parentPosition = new ChessPosition(5, 0);
    const parent = new ChessNode(parentPosition);

    const position = new ChessPosition(5, 5);
    const node = new ChessNode(position, parent);

    expect(node.position).toBe(position);
    expect(node.parent).toBe(parent);
  });
});

describe("Getting adjacent moves", () => {
  type Cord = [number, number];

  function createPositions(parent: ChessNode, cords: Cord[]): ChessNode[] {
    return cords.map(cord => {
      const position = new ChessPosition(cord[0], cord[1]);
      return new ChessNode(position, parent);
    });
  }


  test("Get correct knight moves", () => {
    const position = new ChessPosition(4, 3);
    const node = new ChessNode(position);

    const cords: Cord[] = [
      [2, 2],
      [3, 1],
      [5, 1],
      [6, 2],
      [6, 4],
      [2, 4],
      [3, 5],
      [5, 5]
    ]

    const expected = createPositions(node, cords);
    const actual = node.getMoves();
  });
});
