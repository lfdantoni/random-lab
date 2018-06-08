import Calculator from './calculator';

/**
 * video: https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/4475682?start=0
 */
describe("calculator with three values tests", function() {
  let calculator;
  const value1 = parseFloat(12);
  const value2 = parseFloat(24);
  const value3 = parseFloat(55);

  beforeEach(function() {
    calculator = new Calculator();
    calculator.setAccomulator(value1);
    calculator.enter();
    calculator.setAccomulator(value2);
    calculator.enter();
    calculator.setAccomulator(value3);
  });

  it('should get third value after enter three values', () => {
    expect(calculator.getAccumulator()).toBe(value3);
    calculator.drop();
    expect(calculator.getAccumulator()).toBe(value2);
    calculator.drop();
    expect(calculator.getAccumulator()).toBe(value1);
  });

  it('should get second value after single drop', () => {
    calculator.drop();
    expect(calculator.getAccumulator()).toBe(value2);
  });

  it('should get second value after twice drop', () => {
    calculator.drop();
    calculator.drop();
    expect(calculator.getAccumulator()).toBe(value1);
  });
});

