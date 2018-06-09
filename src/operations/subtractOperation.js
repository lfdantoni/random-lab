import OperandStack from "../operand-stack/operandStack";
import BinaryOperation from "./binaryOperation";

export default class SubtractOperation extends BinaryOperation {
  calculate(value1: number, value2: number): number {
    return value2 - value1;
  }
}