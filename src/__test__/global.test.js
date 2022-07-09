const TEXT = "Hello Word";
const FRUITS = ["apple", "melon", "banana"];
const A = 7;
const B = 5;

test("Should contain a 'H' & 'W''", function () {
  expect(TEXT).toMatch(/H.*W/);
});

test("Fruits array should contain a banana", () => {
  expect(FRUITS).toContain("banana");
});

test("A should be greater than B", () => {
  expect(A).toBeGreaterThan(B);
});

test("Should be true", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Test callback", () => {
  reverseString("Hello", (str) => {
    expect(str).toBe("olleH");
  });
});
