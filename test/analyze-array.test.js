import analyzeArray from '../public/analyze-array';

it('return the correct object', () => {
  const actual = analyzeArray([1, 8, 3, 4, 2, 6]);
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(actual).toEqual(object);
});
