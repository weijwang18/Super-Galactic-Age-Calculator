import Age from "./../src/js/calculator";

describe("Age", () => {
  test("should correctly return a user's age in Earth years", () => {
    const age = new Age(13);
    expect(age.earth).toEqual(13);
  });
});
