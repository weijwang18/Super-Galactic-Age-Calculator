import Age from "./../src/js/calculator.js";

describe("Age", () => {
  let reusableAge;

  beforeEach(() => {
    reusableAge = new Age(28);
  });

  test("1. should return a user's age in Earth years", () => {
    expect(reusableAge.earth).toEqual(28);
  });

  test("2. should return a user's age in Mercury years", () => {
    expect(reusableAge.returnMercuryAge()).toEqual(116);
  });

  test("3. should return a user's age in Venus years", () => {
    expect(reusableAge.returnVenusAge()).toEqual(45);
  });

  test("4. shouldreturn a user's age in Mars years", () => {
    expect(reusableAge.returnMarsAge()).toEqual(14);
  });

  test("5. should return a user's age in Jupiter years", () => {
    expect(reusableAge.returnJupiterAge()).toEqual(2);
  });

  test("6. should return how many years a female user has left to live on earth", () => {
    const female = new Age(28, "female");
    expect(female.returnYearsLeft()).toEqual(53);
  });

  test("7. should return how many years a male user has left to live on earth", () => {
    const male = new Age(28, "male");
    expect(male.returnYearsLeft()).toEqual(47);
  });

  test("8. should return how many years a female user has left to live on Mercury", () => {
    const testHuman = new Age(28, "female", "mercury");
    expect(testHuman.convertYearsLeft(28, "female", "mercury")).toEqual(220);
  });

  test("9. should return how many years a female user has left to live on different planets", () => {
    const testHuman = new Age(28, "female", "mercury");
    expect(testHuman.convertYearsLeft(28, "female", "venus")).toEqual(85);
    expect(testHuman.convertYearsLeft(28, "female", "mars")).toEqual(28);
    expect(testHuman.convertYearsLeft(28, "female", "jupiter")).toEqual(4);
  });

  test("10. should return the number of years they have lived past the life expectancy", () => {
    const oldHuman = new Age(100, "male");
    expect(oldHuman.returnYearsPast(100, "male")).toEqual(25);
  });
});
