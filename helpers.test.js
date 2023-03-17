const { mean, median, mode } = require("./helpers");


describe("mean function tests", () => {
  test("return the mean of an array of numbers", () => {
    const result = mean([1,2,3,4,5])
    expect(result).toEqual(3)
  });

  test("return the mean of an array of negative numbers", () => {
    const result = mean([-4,-3,-2,-1])
    expect(result).toEqual(-2.5)
  });

  test("return 0 if array is empty", () => {
    const result = mean([])
    expect(result).toEqual(0)
  });
});

describe("median function tests", () => {
  test("return the median of an array of numbers", () => {
    const result = median([1,2,3,4,5,6,7]);
    expect(result).toEqual(4)
  });

  test("return the median of an array of negative numbers", () => {
    const result = median([-1,-2,-3,-4,-5,-6,-7, -8]);
    expect(result).toEqual(-4.5)
  })

  test("return 0 if array is empty", () => {
    const result = median([]);
    expect(result).toEqual(0)
  })
})

describe("mode function tests", () => {
  test("return the mode of an array of numbers", () => {
    const result = mode([1,2,3, 3,4,5,4,4,4,6,7]);
    expect(result).toEqual(4)
  });

  test("return the mode of an array of negative numbers", () => {
    const result = mode([-1,-3,-3,-4,-5,-6,-7, -8]);
    expect(result).toEqual(-3)
  })

  test("return 0 if array is empty", () => {
    const result = mode([]);
    expect(result).toEqual(0)
  })
})