import OperandStack from './operandStack';

/**
 * video: https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/4475682?start=0
 */
describe("operand stack tests", function() {
  let operandStack;
  let value = parseFloat(12);
  let value2 = parseFloat(23);

  beforeEach(function() {
    operandStack = new OperandStack();
  });

  it('should get a zero value from a new operand stack', () => {
    expect(operandStack.peek()).toBe(parseFloat(0));
  });

  it('should push a value into stack', () => {
    operandStack.push(value);
    expect(operandStack.peek()).toBe(value);
  });

  it('should replace top value', () => {
    operandStack.push(value);
    operandStack.replaceTop(value2);
    expect(operandStack.peek()).toBe(value2);
  });

  it('should replace top value with empty stack', () => {
    operandStack.replaceTop(value2);
    expect(operandStack.peek()).toBe(value2);
  });

  it('should pop a value from stack', () => {
    operandStack.push(value);
    operandStack.push(value2);
    const popValue = operandStack.pop();
    expect(operandStack.peek()).toBe(value);
    expect(popValue).toBe(value2);
  });

  it('should pop a value from empty stack', () => {
    expect(operandStack.pop()).toBe(parseFloat(0));
  });
});