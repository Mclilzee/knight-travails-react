import { describe, expect, test } from "vitest";
import Knight from "../../main/utils/chess/Knight";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    let knight = new Knight(7, 5);
    expect(knight.x).toBe(7);
    expect(knight.y).toBe(5);

    knight = new Knight(0, 0);
    expect(knight.x).toBe(0);
    expect(knight.y).toBe(0);

    knight = new Knight(7, 7);
    expect(knight.x).toBe(7);
    expect(knight.y).toBe(7);
  });

  test("x and y cannot exceed chessboard maximum row and column numbers", () => {
    expect(() => new Knight(8, 5)).toThrow();
    expect(() => new Knight(10, 5)).toThrow();
    expect(() => new Knight(1, 8)).toThrow();
    expect(() => new Knight(2, 9)).toThrow();
    expect(() => new Knight(5, 20)).toThrow();
    expect(() => new Knight(8, 8)).toThrow();
    expect(() => new Knight(9, 1)).toThrow();
  });
});
