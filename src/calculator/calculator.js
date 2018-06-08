import OperandStack from "../operand-stack/operandStack";

export default class Calculator {
  constructor() {
    this._stackOperators = new OperandStack();
  }

  getAccumulator(): number {
    return this._stackOperators.peek();
  }

  setAccomulator(value: number) {
    this._stackOperators.replaceTop(value);
  }

  enter() {
    this._stackOperators.push(this.getAccumulator());
  }

  drop() {
    this._stackOperators.pop();
  }
}