import Calculator from './calculator';

/**
 * video: https://www.udemy.com/learn-test-driven-development-in-java/learn/v4/t/lecture/4475682?start=0
 */
describe("new calculator tests", function() {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should has an accumulator of zero when is new', () => {
    expect(calculator.getAccumulator()).toBe(parseFloat(0));
  });

  it('should set an accomulator value', () => {
    const value = parseFloat(23);
    calculator.setAccomulator(value);
    expect(calculator.getAccumulator()).toBe(value);
  });
});

