const getMedianPrimeNumbers = require("../getMedianPrimeNumbers");

test("it should return median prime number(s) in array of prime numbers", () => {
  expect(getMedianPrimeNumbers([2, 3, 5, 7, 11, 13, 17])).toEqual([7]);
});
