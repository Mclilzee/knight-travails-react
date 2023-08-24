import { describe, expect, test } from "vitest";
import Knight from "../../main/utils/chess/Knight";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    let knight = new Knight(7, 5);
    expect(knight.position[0]).toBe(7);
    expect(knight.position[1]).toBe(5);

    knight = new Knight(0, 0);
    expect(knight.position[0]).toBe(0);
    expect(knight.position[1]).toBe(0);

    knight = new Knight(7, 7);
    expect(knight.position[0]).toBe(7);
    expect(knight.position[1]).toBe(7);
  });
});
