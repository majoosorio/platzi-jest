const randomString = require("../index");

describe("probar funcionalidades de randomStrings", () => {
  test("probar la funcionalidad", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("COMPROBAR QUE NO EXISTE UNA CIUDAD", () => {
    expect(randomString()).not.toBe("Cali");
  });
});
