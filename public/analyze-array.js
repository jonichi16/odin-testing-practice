const analyzeArray = (arr) => {
  const obj = {};

  obj.average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;

  return obj;
};

export default analyzeArray;
