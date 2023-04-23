const reverseString = (string) => {
  let reversed = '';
  string.split('').forEach((char) => {
    reversed = char + reversed;
  });

  return reversed;
};

export default reverseString;
