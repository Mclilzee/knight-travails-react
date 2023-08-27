import { describe, expect, test } from "vitest";
import ChessSquare from "../../main/utils/ChessSquare";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    let square = new ChessSquare(7, 5);
    expect(square.x).toBe(7);
    expect(square.y).toBe(5);

    square = new ChessSquare(0, 0);
    expect(square.x).toBe(0);
    expect(square.y).toBe(0);

    square = new ChessSquare(7, 7);
    expect(square.x).toBe(7);
    expect(square.y).toBe(7);
  });

  test("x and y cannot exceed chessboard maximum row and column numbers", () => {
    expect(() => new ChessSquare(8, 5)).toThrow();
    expect(() => new ChessSquare(10, 5)).toThrow();
    expect(() => new ChessSquare(1, 8)).toThrow();
    expect(() => new ChessSquare(2, 9)).toThrow();
    expect(() => new ChessSquare(5, 20)).toThrow();
    expect(() => new ChessSquare(8, 8)).toThrow();
    expect(() => new ChessSquare(9, 1)).toThrow();
  });

  test("x and y cannot be negative", () => {
    expect(() => new ChessSquare(-1, 5)).toThrow();
    expect(() => new ChessSquare(-5, 0)).toThrow();
    expect(() => new ChessSquare(-8, 2)).toThrow();
    expect(() => new ChessSquare(-20, 4)).toThrow();
    expect(() => new ChessSquare(5, -10)).toThrow();
    expect(() => new ChessSquare(0, -1)).toThrow();
    expect(() => new ChessSquare(2, -2)).toThrow();
  });
});

describe("Knight moves", () => {
  test("Knight moves are correct", () => {
    const square = new ChessSquare(4, 3);
    const expected: ChessSquare[] = [
      [3, 1],
      [2, 2],
      [2, 4],
      [3, 5],
      [5, 5],
      [6, 4],
      [6, 2],
      [5, 1]
    ].map((cords) => new ChessSquare(cords[0], cords[1]));

    const actual = square.getKnightMoves();
    expect(actual).toEqual(expected);
  });

  test("Knight moves takes corners into considration", () => {
    const square = new ChessSquare(0, 0);
    const expected: ChessSquare[] = [
      [1, 2],
      [2, 1]
    ].map((cords) => new ChessSquare(cords[0], cords[1]));

    const actual = square.getKnightMoves();
    expect(actual).toEqual(expected);
  });

  test("Knight moves from left upper corner", () => {
    const square = new ChessSquare(0, 0);
    const expected: ChessSquare[] = [
      [1, 2],
      [2, 1]
    ].map((cords) => new ChessSquare(cords[0], cords[1]));

    const actual = square.getKnightMoves();
    expect(actual).toEqual(expected);
  });

  test("Knight moves from right upper corner", () => {
    const square = new ChessSquare(0, 7);
    const expected: ChessSquare[] = [
      [2, 6],
      [1, 5]
    ].map((cords) => new ChessSquare(cords[0], cords[1]));

    const actual = square.getKnightMoves();
    expect(actual).toEqual(expected);
  });

  test("Knight moves from left bottom corner", () => {
    const square = new ChessSquare(7, 0);
    const expected: ChessSquare[] = [
      [5, 1],
      [6, 2]
    ].map((cords) => new ChessSquare(cords[0], cords[1]));

    const actual = square.getKnightMoves();
    expect(actual).toEqual(expected);
  });

  test("Knight moves from right bottom corner", () => {
    const square = new ChessSquare(7, 7);
    const expected: ChessSquare[] = [
      [6, 5],
      [5, 6]
    ].map((cords) => new ChessSquare(cords[0], cords[1]));

    const actual = square.getKnightMoves();
    expect(actual).toEqual(expected);
  });
});
