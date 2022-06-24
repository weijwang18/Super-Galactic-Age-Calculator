export default class Age {
  constructor(earth, mercury, venus) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
  }

  returnMercuryAge() {
    this.mercury = Math.floor(this.earth / 0.24);
    return this.mercury;
  }

  returnVenusAge() {
    this.venus = Math.floor(this.earth / 0.62);
    return this.venus;
  }

  returnMarsAge() {}
}
