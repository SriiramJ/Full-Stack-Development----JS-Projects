// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

//Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
  let count = 0;
  let vow = "aeiouAEIOU";
  for (const char of str) {
    if (vow.includes(char)) {
      count++;
    }
  }
  return count; 
}