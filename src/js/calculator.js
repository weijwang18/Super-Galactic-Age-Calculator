export default class Age {
  constructor(earth, mercury) {
    this.earth = earth;
    this.mercury = mercury;
  }

  returnMercuryAge() {
    this.mercury = Math.round(this.earth / 0.241);
    return this.mercury;
  }
}
