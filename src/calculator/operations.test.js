import Calculator, { OperationTypes } from './calculator';

/**
 * video: https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/4873898?start=0
 */
describe("operations tests", function() {
  let calculator: Calculator;
  const value1 = parseFloat(12);
  const value2 = parseFloat(4);

  beforeEach(function() {
    calculator = new Calculator();
    calculator.setAccomulator(value1);
    calculator.enter();
    calculator.setAccomulator(value2);
  });

  it('should test add operation', () => {
    calculator.execute(OperationTypes.ADD);
    expect(calculator.getAccumulator()).toBe(parseFloat(16));
  });

  it('should test subtract operation', () => {
    calculator.execute(OperationTypes.SUBTRACT);
    expect(calculator.getAccumulator()).toBe(parseFloat(8));
  });
});