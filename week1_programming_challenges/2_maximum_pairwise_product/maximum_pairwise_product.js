var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var data = [];

function readLine (line) {
  var result;
  if (line !== "\n") {
    data.push(line);
  }
  if (data.length == 2) {
    solve(data)
  }
}

function solve(data) {
  console.log(max_pairwise_product(data[0], data[1].split(' ')));
  process.exit();
}

function max_pairwise_product(n, A) {
  A = A.sort(function (a, b) { return b - a });
  return A[0] * A[1];
}

module.exports = max_pairwise_product;

