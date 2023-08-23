import { test, expect, describe } from "vitest";
import Position from "../main/Position";

describe("Position constructed correctly", () => {
  test("x and y are set correctly", () => {
    const position = new Position(10, 5);
    expect(position.x).toBe(10);
    expect(position.y).toBe(5);
  });
});

describe("Position hash value", () => {
  test("Returns hash value that is equal for same Position cords", () => {
    let position = new Position(5, 10);
    let position2 = new Position(5, 10);
    expect(position.hash()).toBe(position2.hash());

    position = new Position(0, 0);
    position2 = new Position(0, 0);
    expect(position.hash()).toBe(position2.hash());

    position = new Position(1, 2);
    position2 = new Position(1, 2);
    expect(position.hash()).toBe(position2.hash());

    position = new Position(20, -5);
    position2 = new Position(20, -5);
    expect(position.hash()).toBe(position2.hash());
  });

  test("Hash value is differnt for different position cords", () => {
    let position = new Position(5, 10);
    let position2 = new Position(2, 10);
    expect(position.hash()).not.toBe(position2.hash());

    position = new Position(0, 0);
    position2 = new Position(0, 1);
    expect(position.hash()).not.toBe(position2.hash());

    position = new Position(1, 2);
    position2 = new Position(1, 5);
    expect(position.hash()).not.toBe(position2.hash());

    position = new Position(20, -5);
    position2 = new Position(2, -5);
    expect(position.hash()).not.toBe(position2.hash());

    position = new Position(2, 1);
    position2 = new Position(1, 2);
    expect(position.hash()).not.toBe(position2.hash());

    position = new Position(10, 20);
    position2 = new Position(20, 10);
    expect(position.hash()).not.toBe(position2.hash());
  });

  test("Hash value is always positive", () => {
    let position = new Position(5, 10);
    expect(position.hash()).toBeGreaterThan(0);

    position = new Position(0, 1);
    expect(position.hash()).toBeGreaterThan(0);

    position = new Position(1, 2);
    expect(position.hash()).toBeGreaterThan(0);

    position = new Position(20, -5);
    expect(position.hash()).toBeGreaterThan(0);

    position = new Position(-20, -10);
    expect(position.hash()).toBeGreaterThan(0);

    position = new Position(-20, -10);
    expect(position.hash()).toBeGreaterThan(0);
  });
});

describe("Position equality", () => {
  test("Same object is equal", () => {
    const position = new Position(0, 0);
    expect(position.equals(position)).toBe(true);
  });

  test("Different object cords are not equal", () => {
    let position = new Position(0, 0);
    let position2 = new Position(0, 1);
    expect(position.equals(position2)).toBe(false);

    position = new Position(1, 0);
    position2 = new Position(0, 0);
    expect(position.equals(position2)).toBe(false);

    position = new Position(1, 0);
    position2 = new Position(0, 1);
    expect(position.equals(position2)).toBe(false);
  });

  test("Different object with same cords are equal", () => {
    let position = new Position(0, 0);
    let position2 = new Position(0, 0);
    expect(position.equals(position2)).toBe(true);

    position = new Position(0, 1);
    position2 = new Position(0, 1);
    expect(position.equals(position2)).toBe(true);

    position = new Position(1, 0);
    position2 = new Position(1, 0);
    expect(position.equals(position2)).toBe(true);
  });
});

