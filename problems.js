// O(n) time
// O(n) space
const multiples = (x, n) => {
  if (n === 0) return [];

  let arr = [];
  let i = 1;
  while (i <= n) {
    arr.push(x * i);
    i++;
  }
  return arr;
}

// O(n) time
// O(n) space
const pluck = (arr, key) => {
  let result = [];

  for (let obj of arr) {
    result.push(obj[key]);
  }

  return result;
}

// O(n) time
// O(1) space
const twoHighest = nums => {
  let highest = nums[0];
  let secondHighest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > highest) {
      secondHighest = highest;
      highest = nums[i];
    }
    else if (nums[i] > secondHighest) {
      secondHighest = nums[i];
    }
  }

  return [secondHighest, highest]
}

// O(n) time
// O(1) space
const minMaxKeyInObject = obj => {
  let lowest = Infinity;
  let highest = -Infinity;

  for (let key in obj) {
    if (+key > highest) highest = +key;
    if (+key < lowest) lowest = +key;
  }

  return [lowest, highest];
}

// O(n) time
// O(n) space
const stringFromObject = obj => {
  let result = [];

  for (let key in obj) {
    result.push(key + ' = ' + obj[key]);
  }

  return result.join(', ');
}

// O(n) time
// O(1) space
const countNumbers = arr => {
  let count = 0;

  for (let el of arr) {
    if (+el) count++;
  }

  return count;
}

// O(n) time
// O(n) space
const removeVowels = str => {
  let result = [];

  for (let char of str) {
    if (!('aeiouAEIOU'.includes(char))) result.push(char);
  }

  return result.join('');
}

// O(n) time
// O(n) space
const findTheDuplicate = nums => {
  let frequencies = {};

  for (let num of nums) {
    if (frequencies[num]) {
      return num;
    } else {
      frequencies[num] = 1;
    }
  }
}

// O(n * m) time
// O(1) space
const totalCaps = arr => {
  let count = 0;

  for (let str of arr) {
    for (let char of str) {
      if (char === char.toUpperCase()) count++;
    }
  }

  return count;
}

// O(n) time
// O(n) space
const separate = arr => {
  let newArr = [];

  for (let val of arr) {
    if (val === "cat") newArr.push("cat");
  }
  for (let val of arr) {
    if (val === "water") newArr.push("water");
  }
  for (let val of arr) {
    if (val === "dog") newArr.push("dog");
  }

  return newArr;
}

// O(n) time
// O(1) space
const isAlt = str => {
  for (let i = 0; i < str.length - 1; i++) {
    if ('aeiou'.includes(str[i]) === 'aeiou'.includes(str[i + 1])) return false;
  }
  return true;
}
