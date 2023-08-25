import { describe, expect, test } from "vitest";
import ChessSquare from "../../../main/utils/ChessSquare";
import Node from "../../../main/utils/search/Node";

describe("Construction", () => {
  test("Contains no parrent when parrent not given", () => {
    const square: ChessSquare = new ChessSquare(0, 1);
    const node = new Node(square);

    expect(node.chessSquare).toBe(square);
    expect(node.parent).toBeNull();
  });

  test("Contains correct parrent when given", () => {
    const parentSquare: ChessSquare = new ChessSquare(5, 0);
    const parent = new Node(parentSquare);

    const square: ChessSquare = new ChessSquare(5, 5);
    const node = new Node(square, parent);

    expect(node.chessSquare).toBe(square);
    expect(node.parent).toBe(parent);
  });
});

describe.skip("Getting adjacent moves", () => {
  function createPositions(parent: Node, cords: number[][]): Node[] {
    return cords.map(cord => {
      const square = new ChessSquare(cord[0], cord[1]);
      return new Node(square, parent);
    });
  }


  test("Destination uses proper component destination", () => {
    const square = new ChessSquare(4, 3);
    const node = new Node(square);

    const cords: number[][] = [
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

describe("Position hash value", () => {
  test("Returns hash value that is equal for same Position cords", () => {
    let node = new Node(new ChessSquare(5, 7));
    let node2 = new Node(new ChessSquare(5, 7));

    expect(node.hash()).toBe(node2.hash());

    node = new Node(new ChessSquare(0, 0));
    node2 = new Node(new ChessSquare(0, 0));
    expect(node.hash()).toBe(node2.hash());

    node = new Node(new ChessSquare(1, 2));
    node2 = new Node(new ChessSquare(1, 2));
    expect(node.hash()).toBe(node2.hash());

    node = new Node(new ChessSquare(3, 4));
    node2 = new Node(new ChessSquare(3, 4));
    expect(node.hash()).toBe(node2.hash());
  });

  test("Hash value is differnt for different position cords", () => {
    let node = new Node(new ChessSquare(5, 6));
    let node2 = new Node(new ChessSquare(2, 6));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new ChessSquare(0, 0));
    node2 = new Node(new ChessSquare(0, 1));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new ChessSquare(1, 2));
    node2 = new Node(new ChessSquare(1, 5));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new ChessSquare(6, 5));
    node2 = new Node(new ChessSquare(2, 5));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new ChessSquare(2, 1));
    node2 = new Node(new ChessSquare(1, 2));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new ChessSquare(7, 0));
    node2 = new Node(new ChessSquare(0, 7));
    expect(node.hash()).not.toBe(node2.hash());
  });
});

describe("Position equality", () => {
  test("Same objects are equal", () => {
    const node = new Node(new ChessSquare(0, 0));
    expect(node.equals(node)).toBe(true);
  });

  test("Different object cords are not equal", () => {
    let node = new Node(new ChessSquare(0, 0));
    let node2 = new Node(new ChessSquare(0, 1));
    expect(node.equals(node2)).toBe(false);

    node = new Node(new ChessSquare(1, 0));
    node2 = new Node(new ChessSquare(0, 0));
    expect(node.equals(node2)).toBe(false);

    node = new Node(new ChessSquare(1, 0));
    node2 = new Node(new ChessSquare(0, 1));
    expect(node.equals(node2)).toBe(false);
  });

  test("Different object with same cords are equal", () => {
    let node = new Node(new ChessSquare(0, 0));
    let node2 = new Node(new ChessSquare(0, 0));
    expect(node.equals(node2)).toBe(true);

    node = new Node(new ChessSquare(0, 1));
    node2 = new Node(new ChessSquare(0, 1));
    expect(node.equals(node2)).toBe(true);

    node = new Node(new ChessSquare(1, 0));
    node2 = new Node(new ChessSquare(1, 0));
    expect(node.equals(node2)).toBe(true);
  });
});
