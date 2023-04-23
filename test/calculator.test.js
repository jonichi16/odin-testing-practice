import { add, subtract, divide, multiply } from '../public/calculator';

it('Return the sum of two numbers', () => {
  const actual = add(2, 2);
  expect(actual).toBe(4);
});

it('Return the difference of two numbers', () => {
  const actual = subtract(2, 2);
  expect(actual).toBe(0);
});

it('Return the quotient of two numbers', () => {
  const actual = divide(2, 2);
  expect(actual).toBe(1);
});

it('Return the product of two numbers', () => {
  const actual = multiply(2, 2);
  expect(actual).toBe(4);
});
