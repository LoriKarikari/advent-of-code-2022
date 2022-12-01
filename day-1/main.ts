const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8').split('\n\n');

const numbers = data.map((group) => {
  return group.split('\n').map(Number);
});

const sums = numbers.map((group) => {
  return group.reduce((a, b) => a + b);
});

const most = Math.max(...sums);

const topThreeSum = sums
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);

console.log('Most:', most, 'Sum of top three:', topThreeSum);
