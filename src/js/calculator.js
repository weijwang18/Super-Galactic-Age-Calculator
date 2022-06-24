export default class Age {
  constructor(earth, mercury, venus, mars, jupiter) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
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
}
