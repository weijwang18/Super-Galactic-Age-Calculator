import { Age } from "./../src/js/calculator";

describe("Age", () => {
  let reusableAge;
  let reusablemale;
  let reusablefemale;

  test("should return a user's age in Earth years", () => {
    reusableAge = new Age(28);
    expect(reusableAge.earth).toEqual(28);
  });

  test("should return a user's age in Mercury years", () => {
    expect(reusableAge.returnMercuryAge()).toEqual(116);
  });

  test("should return a user's age in Venus years", () => {
    expect(reusableAge.returnVenusAge()).toEqual(45);
  });

  test("shouldreturn a user's age in Mars years", () => {
    expect(reusableAge.returnMarsAge()).toEqual(14);
  });

  test("should return a user's age in Jupiter years", () => {
    expect(reusableAge.returnJupiterAge()).toEqual(2);
  });

  test("should return how many years a female user has left to live on earth", () => {
    reusablefemale = new Age(28, "female");
    expect(reusablefemale.calculateLifeExpectancy()).toEqual(53);
  });

  test("should return how many years a male user has left to live on earth", () => {
    reusablemale = new Age(28, "male");
    expect(reusablemale.calculateLifeExpectancy()).toEqual(47);
  });

  test("should return how many years a female user has left to live on Mercury", () => {
    expect(reusablefemale.MercuryLifeExpectancy()).toEqual(220);
  });
});
