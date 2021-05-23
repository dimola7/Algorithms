// import taskOne from "../task/app";
import task from "../task/app";
import { prefilled } from "./mock";

describe("Test for function structure", () => {
  it("Returns an object for even distro", () => {
    const expected = task(25, 2)
    expect(typeof expected).toBe('object');
  });

  it("checks that the function is called with 2 arguments", () => {
    expect(task.length).toBe(2);
  });
});

describe("Test for function expected value", () => {
  it("Returns evenly distributed values for boarded", () => {
    expect(task(25, 1).boarded.length % 5).toBe(0);
  });

  it("Returns reservation list for uneven distro", () => {
    expect(task(23, 3).reservation).toHaveLength(3);
  });

  it("boarded does not exceed 50 people for 60 passengers with shuffle of 0", () => {
    expect(task(60, 0).boarded.length).toBe(50);
  });
});

describe("test for shuffle", () => {
  it("Single shuffle works ", () => {
    expect(task(55, 1).count).toBe(2);
  });

  it("first multiple shuffle works ", () => {
    expect(task(105, 2).count).toBe(3);
  });

  it("second multiple shuffle works ", () => {
    expect(task(155, 3).count).toBe(4);
  });

  it("third multiple shuffle works ", () => {
    expect(task(205, 4).count).toBe(5);
  });
});

describe("test for boarded value with passengers of 50 and shuffle 0", () => {
  let passengers = 50;
  let shuffle = 0;

  const expected = task(passengers, shuffle);
  expect(expected.boarded).toStrictEqual(prefilled);
});
