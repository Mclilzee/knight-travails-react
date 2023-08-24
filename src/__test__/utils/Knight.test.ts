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
});
