
exports.min = function min (array) {
  let min;
  if (typeof array !== 'undefined' && array.length > 0) {
    min = array[0];
    for (let i = 0; i < array.length; i ++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
  }
  else {
    min = 0;
  }
  return min;
}

exports.max = function max (array) {
  let max;
  if (typeof array !== 'undefined' && array.length > 0) {
    max = array[0];
    for (let i = 0; i < array.length; i ++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
  }
  else {
    max = 0;
  }
  return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  let res = 0;
  if (typeof array !== 'undefined' && array.length > 0) {
    for (let i = 0; i < array.length; i ++) {
      sum += array[i];
    }
    res = sum / array.length;
  }
  return res;
}