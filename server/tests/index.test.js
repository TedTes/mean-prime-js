const index = require("../index.js");
const request = require("supertest");

test("", async () => {
  const res = await request(index).get(`/?number=${18}`);
  expect(res.statusCode).toEqual(200);

  expect(res.body).toEqual([7]);
});
