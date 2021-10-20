function getAllPrimesToNumber(num) {
  let buffer = [];
  let output = [];
  for (let i = 2; i <= num; i++) {
    buffer[i] = true;
  }

  for (let j = 2; j <= num; j++) {
    if (buffer[j]) {
      for (let k = j * 2; k <= num; k += j) {
        buffer[k] = false;
      }
    }
  }

  for (let i = 2; i < buffer.length; i++)
    if (buffer[i] === true) output.push(i);
  return output;
}

module.exports = getAllPrimesToNumber;
