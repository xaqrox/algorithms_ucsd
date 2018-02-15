var max_pairwise_product = require('./maximum_pairwise_product.js');

function naive_solution(n, A) {
  var product = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i != j) {
        product = Math.max(product, A[i] * A[j]);
      }
    }
  }
  return product;
}

function getRandomInt(max, min) {
  min = min || 0;
  return Math.floor(Math.random() * (max - min)) + min;
}

var N = 10;
var M = 100000;
var n = 0;
var A = [];
var naive;
var mine;

while (true) {
  n = getRandomInt(N, 2);
  console.log(n, 'n');
  A = [];
  for (var i = 0; i < n; i++) {
    A.push(getRandomInt(M));
  }
  naive = naive_solution(n, A);
  mine = max_pairwise_product(n, A);
  console.log(A);
  console.log(naive + " " + mine);
  if (naive == mine) {
    console.log('OK');
  }
  else {
    console.log('WRONG');
    process.exit();
  }
}


