class Logique {
  constructor() {
    this.logique = new Array(100);
  }

  setPositionBateau(idPosition) {
    this.logique.push(idPosition);
  }

  getLogique() {
    return this.logique;
  }
}
export default Logique;

