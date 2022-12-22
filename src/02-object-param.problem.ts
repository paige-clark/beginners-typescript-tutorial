import { expect, it } from "vitest";

/**
 * Type alias and interface are interchangable at first though
 * interface only works with objects.
 */

// interface method:
interface NewType {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: NewType) => {
  return params.first + params.second;
};

// type alias method:
// type NewType = {
//   first: number;
//   second: number;
// };

// export const addTwoNumbers = (params: NewType) => {
//   return params.first + params.second;
// };

// anonymous method:
// export const addTwoNumbers = (params: { first: number; second: number }) => {
//   return params.first + params.second;
// };

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
