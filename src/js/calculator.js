export default class Age {
  constructor(earth, mercury, venus, mars) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
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
}
