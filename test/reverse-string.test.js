import reverseString from '../public/reverse-string';

it('Return the reversed of a string', () => {
  const actual = reverseString('string');
  expect(actual).toBe('gnirts');
});
