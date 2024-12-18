import { expect, test } from "@jest/globals";
import { defaultFactory, gildanFactory, nikeFactory } from ".";

test("Create a default, shirt, and shoe factory", () => {
  expect(defaultFactory.make()).toBe("A product has been made.");
  expect(gildanFactory.make()).toBe("A shirt has been made.");
  expect(nikeFactory.make()).toBe("A pair of shoes has been made.");
});
