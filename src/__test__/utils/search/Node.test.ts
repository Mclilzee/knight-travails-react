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

describe.skip("Getting adjacent moves", () => {
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

describe("Position hash value", () => {
  test("Returns hash value that is equal for same Position cords", () => {
    let node = new Node(new Knight(5, 10));
    let node2 = new Node(new Knight(5, 10));

    expect(node.hash()).toBe(node2.hash());

    node = new Node(new Knight(0, 0));
    node2 = new Node(new Knight(0, 0));
    expect(node.hash()).toBe(node2.hash());

    node = new Node(new Knight(1, 2));
    node2 = new Node(new Knight(1, 2));
    expect(node.hash()).toBe(node2.hash());

    node = new Node(new Knight(20, -5));
    node2 = new Node(new Knight(20, -5));
    expect(node.hash()).toBe(node2.hash());
  });

  test("Hash value is differnt for different position cords", () => {
    let node = new Node(new Knight(5, 10));
    let node2 = new Node(new Knight(2, 10));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new Knight(0, 0));
    node2 = new Node(new Knight(0, 1));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new Knight(1, 2));
    node2 = new Node(new Knight(1, 5));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new Knight(20, -5));
    node2 = new Node(new Knight(2, -5));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new Knight(2, 1));
    node2 = new Node(new Knight(1, 2));
    expect(node.hash()).not.toBe(node2.hash());

    node = new Node(new Knight(10, 20));
    node2 = new Node(new Knight(20, 10));
    expect(node.hash()).not.toBe(node2.hash());
  });
});

describe("Position equality", () => {
  test("Same objects are equal", () => {
    const node = new Node(new Knight(0, 0));
    expect(node.equals(node)).toBe(true);
  });

  test("Different object cords are not equal", () => {
    let node = new Node(new Knight(0, 0));
    let node2 = new Node(new Knight(0, 1));
    expect(node.equals(node2)).toBe(false);

    node = new Node(new Knight(1, 0));
    node2 = new Node(new Knight(0, 0));
    expect(node.equals(node2)).toBe(false);

    node = new Node(new Knight(1, 0));
    node2 = new Node(new Knight(0, 1));
    expect(node.equals(node2)).toBe(false);
  });

  test("Different object with same cords are equal", () => {
    let node = new Node(new Knight(0, 0));
    let node2 = new Node(new Knight(0, 0));
    expect(node.equals(node2)).toBe(true);

    node = new Node(new Knight(0, 1));
    node2 = new Node(new Knight(0, 1));
    expect(node.equals(node2)).toBe(true);

    node = new Node(new Knight(1, 0));
    node2 = new Node(new Knight(1, 0));
    expect(node.equals(node2)).toBe(true);
  });
});
