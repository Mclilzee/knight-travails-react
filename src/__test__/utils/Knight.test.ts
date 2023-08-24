import { describe, expect, test } from "vitest";
import Knight from "../../main/utils/chess/Knight";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    const knight = new Knight(10, 5);
    expect(knight.position[0]).toBe(10);
    expect(knight.position[1]).toBe(5);
  });
});

describe("Position hash value", () => {
  test("Returns hash value that is equal for same Position cords", () => {
    let knight = new Knight(5, 10);
    let knight2 = new Knight(5, 10);
    expect(knight.hash()).toBe(knight2.hash());

    knight = new Knight(0, 0);
    knight2 = new Knight(0, 0);
    expect(knight.hash()).toBe(knight2.hash());

    knight = new Knight(1, 2);
    knight2 = new Knight(1, 2);
    expect(knight.hash()).toBe(knight2.hash());

    knight = new Knight(20, -5);
    knight2 = new Knight(20, -5);
    expect(knight.hash()).toBe(knight2.hash());
  });

  test("Hash value is differnt for different position cords", () => {
    let knight = new Knight(5, 10);
    let knight2 = new Knight(2, 10);
    expect(knight.hash()).not.toBe(knight2.hash());

    knight = new Knight(0, 0);
    knight2 = new Knight(0, 1);
    expect(knight.hash()).not.toBe(knight2.hash());

    knight = new Knight(1, 2);
    knight2 = new Knight(1, 5);
    expect(knight.hash()).not.toBe(knight2.hash());

    knight = new Knight(20, -5);
    knight2 = new Knight(2, -5);
    expect(knight.hash()).not.toBe(knight2.hash());

    knight = new Knight(2, 1);
    knight2 = new Knight(1, 2);
    expect(knight.hash()).not.toBe(knight2.hash());

    knight = new Knight(10, 20);
    knight2 = new Knight(20, 10);
    expect(knight.hash()).not.toBe(knight2.hash());
  });

  test("Hash value is always positive", () => {
    let knight = new Knight(5, 10);
    expect(knight.hash()).toBeGreaterThan(0);

    knight = new Knight(0, 1);
    expect(knight.hash()).toBeGreaterThan(0);

    knight = new Knight(1, 2);
    expect(knight.hash()).toBeGreaterThan(0);

    knight = new Knight(20, -5);
    expect(knight.hash()).toBeGreaterThan(0);

    knight = new Knight(-20, -10);
    expect(knight.hash()).toBeGreaterThan(0);

    knight = new Knight(-20, -10);
    expect(knight.hash()).toBeGreaterThan(0);
  });
});

describe("Position equality", () => {
  test("Same object is equal", () => {
    const knight = new Knight(0, 0);
    expect(knight.equals(knight)).toBe(true);
  });

  test("Different object cords are not equal", () => {
    let knight = new Knight(0, 0);
    let knight2 = new Knight(0, 1);
    expect(knight.equals(knight2)).toBe(false);

    knight = new Knight(1, 0);
    knight2 = new Knight(0, 0);
    expect(knight.equals(knight2)).toBe(false);

    knight = new Knight(1, 0);
    knight2 = new Knight(0, 1);
    expect(knight.equals(knight2)).toBe(false);
  });

  test("Different object with same cords are equal", () => {
    let knight = new Knight(0, 0);
    let knight2 = new Knight(0, 0);
    expect(knight.equals(knight2)).toBe(true);

    knight = new Knight(0, 1);
    knight2 = new Knight(0, 1);
    expect(knight.equals(knight2)).toBe(true);

    knight = new Knight(1, 0);
    knight2 = new Knight(1, 0);
    expect(knight.equals(knight2)).toBe(true);
  });
});
