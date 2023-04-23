import ceasarCipher from '../public/ceasar-cipher';

it('Return the correct cipher', () => {
  const actual = ceasarCipher('string', 2);
  expect(actual).toBe('uvtkpi');
});

it('Return the correct cipher with character z', () => {
  const actual = ceasarCipher('lazy', 2);
  expect(actual).toBe('ncba');
});

it('Return the correct cipher with a uppercase character', () => {
  const actual = ceasarCipher('LaZy', 2);
  expect(actual).toBe('NcBa');
});

it('Return the correct cipher with a punctuation', () => {
  const actual = ceasarCipher('Hello, World!', 2);
  expect(actual).toBe('Jgnnq, Yqtnf!');
});

it('Return the correct cipher for a large shift', () => {
  const actual = ceasarCipher('Hello, World!', 75);
  expect(actual).toBe('Ebiil, Tloia!');
});
