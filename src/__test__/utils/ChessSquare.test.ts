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
