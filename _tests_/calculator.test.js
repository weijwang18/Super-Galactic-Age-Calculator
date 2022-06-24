import Age from "./../src/js/calculator";

describe("Age", () => {
  let reusableAge;

  test("should correctly return a user's age in Earth years", () => {
    reusableAge = new Age(28);
    expect(reusableAge.earth).toEqual(28);
  });

    test("should correctly return a user's age in Mercury years", () => {
      expect(reusableAge.mercury).toEqual(119);
    });
});
