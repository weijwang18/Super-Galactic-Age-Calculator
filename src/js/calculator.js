export class Age {
  constructor(earth, gender, mercury, venus, mars, jupiter, yearsLeft) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.gender = gender;
    this.yearsLeft = yearsLeft;
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
      let LifeExpectancy = 81;
      this.yearsLeft = LifeExpectancy - this.earth;
      return this.yearsLeft;
    } else if (this.gender === "male") {
      let LifeExpectancy = 75;
      this.yearsLeft = LifeExpectancy - this.earth;
      return this.yearsLeft;
    }
  }

  convertYearsLeft() {}
}
