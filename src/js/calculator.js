export default class Age {
  constructor(earth, mercury) {
    this.earth = earth;
    this.mercury = mercury;
  }

  returnMercuryAge() {
    this.mercury = Math.floor(this.earth / 0.24);
    return this.mercury;
  }

  returnVenusAge() {
    
  }
}
