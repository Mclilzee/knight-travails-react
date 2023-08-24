import { expect, describe, test } from "vitest";
import ChessPiece from "../../../main/utils/chess/ChessPiece";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    let knight = new ChessPieceMock(7, 5);
    expect(knight.x).toBe(7);
    expect(knight.y).toBe(5);

    knight = new ChessPieceMock(0, 0);
    expect(knight.x).toBe(0);
    expect(knight.y).toBe(0);

    knight = new ChessPieceMock(7, 7);
    expect(knight.x).toBe(7);
    expect(knight.y).toBe(7);
  });

  test("x and y cannot exceed chessboard maximum row and column numbers", () => {
    expect(() => new ChessPieceMock(8, 5)).toThrow();
    expect(() => new ChessPieceMock(10, 5)).toThrow();
    expect(() => new ChessPieceMock(1, 8)).toThrow();
    expect(() => new ChessPieceMock(2, 9)).toThrow();
    expect(() => new ChessPieceMock(5, 20)).toThrow();
    expect(() => new ChessPieceMock(8, 8)).toThrow();
    expect(() => new ChessPieceMock(9, 1)).toThrow();
  });

  test("x and y cannot be negative", () => {
    expect(() => new ChessPieceMock(-1, 5)).toThrow();
    expect(() => new ChessPieceMock(-5, 0)).toThrow();
    expect(() => new ChessPieceMock(-8, 2)).toThrow();
    expect(() => new ChessPieceMock(-20, 4)).toThrow();
    expect(() => new ChessPieceMock(5, -10)).toThrow();
    expect(() => new ChessPieceMock(0, -1)).toThrow();
    expect(() => new ChessPieceMock(2, -2)).toThrow();
  });
});

class ChessPieceMock extends ChessPiece {
  getMoves(): ChessPiece[] {
    return [];
  }
}
