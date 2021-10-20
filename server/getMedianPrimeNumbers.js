function getMedianPrimeNumbers(nums) {
  let i = 0,
    j = nums.length - 1;
  let output = [];
  while (j - i >= 0) {
    j--;
    i++;
  }
  if (i - 1 === j + 1) output.push(nums[i - 1]);
  else {
    output.push(nums[i - 1]);
    output.push(nums[j + 1]);
  }

  return output;
}
module.exports = getMedianPrimeNumbers;
