import Age from "./../src/js/calculator";

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
});
