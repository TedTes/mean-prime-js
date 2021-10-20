const getAllPrimesToNumber = require("../getAllPrimesToNumber");

test("it should return all pirme numbers of a number", () => {
  expect(getAllPrimesToNumber(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
});
