const TEXT = "Hello Word";
const FRUITS = ["apple", "melon", "banana"];
const A = 7;
const B = 5;

beforeEach(() => console.log("Starting test..."));
beforeAll(() => console.log("Setting up tests"));

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

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("String not present"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Test promise", () => {
  return reverseString2("Hello").then((string) => {
    expect(string).toBe("olleH");
  });
});

test("Test async/await", async () => {
  const str = await reverseString2("Hello");
  expect(str).toBe("olleH");
});

afterEach(() => console.log("❤💌💟"));
afterAll(() => console.log("Done 😁"));
