import { describe, expect, test } from "vitest";
import Node from "../../../main/utils/search/Node";

describe("Construction", () => {
  test("Contains no parrent when parrent not given", () => {
    const node = new Node([0, 1]);

    expect(node.location).toEqual([0, 1]);
    expect(node.parent).toBeNull();
  });

  test("Contains correct parrent when given", () => {
    const parent = new Node([5, 0]);
    const node = new Node([5, 5], parent);

    expect(node.location).toEqual([5, 5]);
    expect(node.parent).toBe(parent);
  });
});

describe("Getting adjacent moves", () => {
  test("Moves uses knight moves to produce nodes", () => {
    const node = new Node([4, 3]);

    const expected: Node[] = [
      [3, 1],
      [2, 2],
      [2, 4],
      [3, 5],
      [5, 5],
      [6, 4],
      [6, 2],
      [5, 1]
    ].map(cord => {
      const point: [number, number] = [cord[0], cord[1]];
      return new Node(point, node);
    });

    const actual = node.getMoves();
    expect(expected).toEqual(actual);
    actual.forEach(e => expect(e.parent).toBe(node));
  });
});

describe("Test length of each node", () => {
  test("Each node starts with length of 1", () => {
    const node = new Node([0, 0]);
    expect(node.length).toBe(1);
  })

  test("Each node takes length from it's parrent", () => {
    const point: [number, number] = [0, 0];
    const node = new Node(point);
    const node2 = new Node(point, node);
    const node3 = new Node(point, node2);
    const node4 = new Node(point, node3);
    const node5 = new Node(point, node4);

    expect(node.length).toBe(1);
    expect(node2.length).toBe(2);
    expect(node3.length).toBe(3);
    expect(node4.length).toBe(4);
    expect(node5.length).toBe(5);
  })
});
