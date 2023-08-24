import { describe, expect, test } from "vitest";
import Knight from "../../main/utils/chess/Knight";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    const knight = new Knight(10, 5);
    expect(knight.position[0]).toBe(10);
    expect(knight.position[1]).toBe(5);
  });
});
