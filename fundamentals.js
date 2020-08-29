// O(N + M) time
// O(1) space
const appendToString = (str1, str2) => str1 + str2;

// O(N + M) time
// O(1) space
const prependToString = (str1, str2) => str2 + str1;

// O(1) time
// O(1) space
const charAt = (str, idx) => str[idx] || '';

// O(N) time
// O(1) space
const stringIncludes = (str, target) => {
  for (let char of str) {
    if (char === target) return true;
  }
  return false;
}

// O(N) time
// O(1) space
const stringIndexOf = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return -1;
}

// O(N) time
// O(1) space
const stringLastIndexOf = (str, char) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) return i;
  }
  return -1;
}

// O(n^2) time => where n is numTimes
// O(1) space
const repeat = (str, numTimes) => {
  let result = '';
  let count = 0;

  while (count < numTimes) {
    result += str;
    count++;
  }
  return result;
}

// O(n) time
// O(n) space
const repeatBetter = (str, numTimes) => {
  if (numTimes <= 0) return '';

  let result = [...str];
  let count = 1;

  while (count < numTimes) {
    result.push(str);
    count++;
  }
  return result.join('');
}

// O(n) time
// O(1) space
const removeFromString = (str, idx, numRemove) => {
  return str.slice(0, idx) + str.slice(idx + numRemove);
}


// O(n) time
// O(1) space
const includes = (nums, target) => {
  for (let num of nums) {
    if (num === target) return true;
  }
  return false;
}

// O(n) time
// O(1) space
const indexOf = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}

// O(n) time
// O(1) space
const lastIndexOf = (nums, target) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) return i;
  }
  return -1;
}

// O(n) time
// O(1) space
const max = nums => {
  let highest = -Infinity;
  for (let num of nums) {
    highest = num > highest ? num : highest;
  }
  return highest;
}

// O(n) time
// O(1) space
const min = nums => {
  let lowest = Infinity;
  for (let num of nums) {
    lowest = num < lowest ? num : lowest;
  }
  return lowest;
}

// O(n) time
// O(n) space
const slice = (nums, start, end) => {
  if (start >= nums.length) return [];

  let result = [];
  end = !end && end > nums.length ? nums.length : end;

  let i = start;
  while (start < end) {
    result.push(nums[start]);
    i++;
  }
  return result;
}

// O(n) time
// O(1) space
const countValues = (nums, target) => {
  let count = 0;
  for (let num of nums) {
    if (num === target) count++;
  }
  return count;
}

// O(n) time
// O(n) space
const keys = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

// O(n) time
// O(n) space
const values = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

// O(n) time
// O(1) space
const squareEvenNumbers = nums => {
  return nums.reduce((acc, num) => {
    if (num % 2 === 0) acc += num ** 2;
    return acc;
  }, 0);
}

// O(n) time
// O(n) space
const entries = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

