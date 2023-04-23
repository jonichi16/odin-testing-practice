import capitalize from '../public/capitalize';

it('Capitalize the first character of the string', () => {
  const actual = capitalize('string');
  expect(actual).toBe('String');
});
