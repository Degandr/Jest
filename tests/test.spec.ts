class Calculator {
  private sum(a: number, b: number) {
    return a + b;
  }
  private ded(a: number, b: number) {
    return a - b;
  }
  private div(a: number, b: number) {
    return a / b;
  }
  private mult(a: number, b: number) {
    return a * b;
  }
  getResult(a: number, b: number, c: string) {
    if (c === "+") {
      return this.sum(a, b);
    } else if (c === "-") {
      return this.ded(a, b);
    } else if (c === "/") {
      return this.div(a, b);
    } else if (c === "*") {
      return this.mult(a, b);
    }
  }
}

const mySimplTests = new Calculator();

describe("Jest summation (positive)", function () {
  it("Test_1", function () {
    expect(mySimplTests.getResult(2, 2, "+")).toBe(4);
  });
  it("Test_2", function () {
    expect(mySimplTests.getResult(123, 456, "+")).toBe(579);
  });
});

describe("Jest summation (negative)", function () {
  it("Test_3", function () {
    expect(mySimplTests.getResult(2, 2, "+")).toBe(5);
  });
});

describe("Jest multiplication (positive)", function () {
  it("Test_4", function () {
    expect(mySimplTests.getResult(10, 20, "*")).toBe(200);
  });
});

describe("Jest multiplication (negative)", function () {
  it("Test_5", function () {
    expect(mySimplTests.getResult(44, 11, "*")).toBe(222222);
  });
});

describe("Jest deduction (positive)", function () {
  it("Test_6", function () {
    expect(mySimplTests.getResult(33, 22, "-")).toBe(11);
  });
  it("Test_7", function () {
    expect(mySimplTests.getResult(123456, 12345, "-")).toBe(111111);
  });
});

describe("Jest deduction (negative)", function () {
  it("Test_8", function () {
    expect(mySimplTests.getResult(456, 789, "-")).toBe(123);
  });
});

describe("Jest division (positive)", function () {
  it("Test_9", function () {
    expect(mySimplTests.getResult(121, 11, "/")).toBe(11);
  });
});

describe("Jest division (negative)", function () {
  it("Test_10", function () {
    expect(mySimplTests.getResult(100, 100, "/")).toBe(10);
  });
});
