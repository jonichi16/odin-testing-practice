const withinRange = (code) =>
  (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

const ceasarCipher = (string, shift) => {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    const code = string.charCodeAt(i) + shift;

    if (!withinRange(string.charCodeAt(i))) {
      result += string.charAt(i);
    } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      result += String.fromCharCode(code);
    } else {
      result += String.fromCharCode(code - 26 * Math.ceil(shift / 26));
    }
  }

  return result;
};

export default ceasarCipher;
