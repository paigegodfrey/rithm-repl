// O(n) time
// O(1) space
const rangeInArray = (arr, start = 0, end = arr.length - 1) => {
  start = start < 0 ? 0 : start;
  end = end >= arr.length ? arr.length - 1 : end;
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }

  return sum;
}

// O(n) time
// O(n) space
const sameFrequency = (num1, num2) => {
  let [num1Frequency, num1KeyCount] = buildObj(num1.toString());
  let [num2Frequency, num2KeyCount] = buildObj(num2.toString());

  let maxKeyObj = num1KeyCount > num2KeyCount ? num1Frequency : num2Frequency;
  for (let key in maxKeyObj) {
    if (num1Frequency[key] !== num2Frequency[key]) return false;
  }
  return true;
}

const buildObj = str => {
  let obj = {};
  let keyCount = 0;

  for (let num of str) {
    if (obj[num]) obj[num]++;
    else {
      obj[num] = 1;
      keyCount++;
    }
  }
  return [obj, keyCount];
}