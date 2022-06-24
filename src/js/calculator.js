export class Age {
  constructor(earth, gender, mercury, venus, mars, jupiter, LifeExpectancy) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.gender = gender;
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

  calculateLifeExpectancy() {
    if (this.gender === "female") {
      this.LifeExpectancy = 81;
      let yearsLeft = this.LifeExpectancy - this.earth;
      return yearsLeft;
    } else if (this.gender === "male") {
      this.LifeExpectancy = 75;
      let yearsLeft = this.LifeExpectancy - this.earth;
      return yearsLeft;
    }
  }
}
