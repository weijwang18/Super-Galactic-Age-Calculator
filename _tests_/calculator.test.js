import { Age } from "./../src/js/calculator";

describe("Age", () => {
  let reusableAge;

  test("should correctly return a user's age in Earth years", () => {
    reusableAge = new Age(28);
    expect(reusableAge.earth).toEqual(28);
  });

  test("should correctly return a user's age in Mercury years", () => {
    expect(reusableAge.returnMercuryAge()).toEqual(116);
  });

  test("should correctly return a user's age in Venus years", () => {
    expect(reusableAge.returnVenusAge()).toEqual(45);
  });

  test("should correctly return a user's age in Mars years", () => {
    expect(reusableAge.returnMarsAge()).toEqual(14);
  });

  test("should correctly return a user's age in Jupiter years", () => {
    expect(reusableAge.returnJupiterAge()).toEqual(2);
  });

  test("should correctly return how many years a female user has left to live on earth", () => {
    const newAge = new Age(28, "female");
    expect(newAge.calculateLifeExpectancy()).toEqual(53);
  });

  test("should correctly return how many years a male user has left to live on earth", () => {
    const newAge = new Age(28, "male");
    expect(newAge.calculateLifeExpectancy()).toEqual(47);
  });
});
