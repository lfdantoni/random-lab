import IOperation from "./operation";
import OperandStack from "../operand-stack/operandStack";

export default class BinaryOperation extends IOperation {
  apply(operandStack: OperandStack) {
    const value1 = operandStack.pop();
    const value2 = operandStack.peek();
    operandStack.replaceTop(this.calculate(value1, value2));
  }

  calculate(value1: number, value2: number): number {
    throw "should be implemented";
  }
}