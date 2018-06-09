import OperandStack from "../operand-stack/operandStack";
import IOperation from "../operations/operation";
import AddOperation from "../operations/addOperation";
import SubtractOperation from "../operations/subtractOperation";
import BinaryOperation from "../operations/binaryOperation";

export const OperationTypes = Object.freeze({
  SUBTRACT: '-',
  ADD: '+'
});

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

  execute(op: OperationTypes) {
    let operation: BinaryOperation = null;
    switch(op) {
      case OperationTypes.SUBTRACT:
        operation = new SubtractOperation();
        break;
      case OperationTypes.ADD:
        operation = new AddOperation();
        break;
      default: break;
    }

    operation.apply(this._stackOperators);
  }
}