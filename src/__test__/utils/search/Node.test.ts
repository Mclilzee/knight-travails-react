import { describe, expect, test } from "vitest";
import Knight, { Cord } from "../../../main/utils/chess/Knight";
import Node from "../../../main/utils/search/Node";

describe("Construction", () => {
  test("Contains no parrent when parrent not given", () => {
    const knight: Knight = new Knight(0, 1);
    const node = new Node(knight);

    expect(node.knight).toBe(knight);
    expect(node.parent).toBeNull();
  });

  test("Contains correct parrent when given", () => {
    const parentKnight: Knight = new Knight(5, 0);
    const parent = new Node(parentKnight);

    const knight: Knight = new Knight(5, 5);
    const node = new Node(knight, parent);

    expect(node.knight).toBe(knight);
    expect(node.parent).toBe(parent);
  });
});

describe("Getting adjacent moves", () => {
  function createPositions(parent: Node, cords: Cord[]): Node[] {
    return cords.map(cord => {
      const knight = new Knight(cord[0], cord[1]);
      return new Node(knight, parent);
    });
  }


  test("Destination uses proper component destination", () => {
    const knight = new Knight(4, 3);
    const node = new Node(knight);

    const cords: Cord[] = [
      [2, 2],
      [3, 1],
      [5, 1],
      [6, 2],
      [6, 4],
      [2, 4],
      [3, 5],
      [5, 5]
    ];

    const expected = createPositions(node, cords);
    const actual = node.getMoves();
    expect(expected).toEqual(actual);
  });
});
