export default class Age {
  constructor(
    age,
    gender,
    mercury,
    venus,
    mars,
    jupiter,
    yearsLeft,
    LifeExpectancy
  ) {
    this.earth = age;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.gender = gender;
    this.yearsLeft = yearsLeft;
    this.LifeExpectancy = LifeExpectancy;
  }

  returnMercuryAge() {
    this.mercury = Math.floor(this.earth / 0.24);
    return this.mercury;
  }

  returnVenusAge() {
    this.venus = Math.floor(this.earth / 0.62);
    return this.venus;
  }

  returnMarsAge() {
    this.mars = Math.floor(this.earth / 1.88);
    return this.mars;
  }

  returnJupiterAge() {
    this.jupiter = Math.floor(this.earth / 11.86);
    return this.jupiter;
  }

  returnYearsLeft() {
    if (this.gender === "female") {
      this.LifeExpectancy = 81;
      this.yearsLeft = this.LifeExpectancy - this.earth;
      return this.yearsLeft;
    } else if (this.gender === "male") {
      this.LifeExpectancy = 75;
      this.yearsLeft = this.LifeExpectancy - this.earth;
      return this.yearsLeft;
    }
  }

  convertYearsLeft(age, gender, planet) {
    this.returnYearsLeft(age, gender);
    switch (planet) {
      case "mercury":
        this.yearsLeft = Math.floor(this.yearsLeft / 0.24);
        return this.yearsLeft;
      case "venus":
        this.yearsLeft = Math.floor(this.yearsLeft / 0.62);
        return this.yearsLeft;
      case "mars":
        this.yearsLeft = Math.floor(this.yearsLeft / 1.88);
        return this.yearsLeft;
      case "jupiter":
        this.yearsLeft = Math.floor(this.yearsLeft / 11.86);
        return this.yearsLeft;
    }
  }

  returnYearsPast(age, gender) {
    this.returnYearsLeft(age, gender);
    if (this.yearsLeft < 0) {
      return Math.abs(this.yearsLeft);
    }
  }
}
