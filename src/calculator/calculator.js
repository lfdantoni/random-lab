export default class Calculator {
  constructor() {
    this._stackOperators = [];
  }

  getAccumulator(): number {
    if(this._stackOperators.length === 0) {
      return 0.0;
    }

    return this._stackOperators[this._stackOperators.length-1];
  }

  setAccomulator(value: number) {
    this._stackOperators.pop();
    this._stackOperators.push(value);
  }

  enter() {
    this._stackOperators.push(this.getAccumulator());
  }

  drop() {
    this._stackOperators.pop();
  }
}