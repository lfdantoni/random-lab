import Calculator from './calculator';

/**
 * video: https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/4468944?start=0
 */
describe("Calculator tests", function() {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should has an accumulator of zero when is new', () => {
    expect(calculator.getAccumulator()).toBe(0.0);
  });

  it('should set an accomulator value', () => {
    const value = 23;
    calculator.setAccomulator(value);
    expect(calculator.getAccumulator()).toBe(value);
  });

  it('should enter and drop values', () => {
    const value1 = 12;
    const value2 = 24;
    const value3 = 55;
    calculator.setAccomulator(value1);
    calculator.enter();
    calculator.setAccomulator(value2);
    calculator.enter();
    calculator.setAccomulator(value3);
    expect(calculator.getAccumulator()).toBe(value3);
    calculator.drop();
    expect(calculator.getAccumulator()).toBe(value2);
    calculator.drop();
    expect(calculator.getAccumulator()).toBe(value1);
  });
});

