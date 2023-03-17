function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

const mean = (arr) => {
  if (arr.length === 0) return 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++){
    ans += Number(arr[i]);
  }
  return ans / arr.length;
}

const median = (arr) => {
  if (arr.length === 0) return 0;
  const middleIdx = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return arr[middleIdx];
  }
  return (arr[middleIdx] + arr[middleIdx - 1]) / 2
}

const mode = (arr) => {
  if (arr.length === 0) return 0;
  let freq = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freq) {
    if (freq[key] > count) {
      mostFrequent = key;
      count = freq[key];
    }
  }

  return Number(mostFrequent);
}


const convertToNumArrAndValidate = (arr) => {
  const numArr = [];
  for (let i = 0; i < arr.length; i++){ 
    let valToNum = Number(arr[i]);

    if (valToNum === typeof NaN) {
      return new Error(`${valToNum} is not a valid number`)
    }
    numArr.push(valToNum);
  }
  return numArr;
}

module.exports = { mean, median, mode, convertToNumArrAndValidate };