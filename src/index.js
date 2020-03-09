
exports.min = function min (array) {
  if (array !== undefined && Array.isArray(array) && array.length) {
    return Math.min(...array);
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array !== undefined && Array.isArray(array) && array.length) {
    return Math.max(...array);
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array !== undefined && Array.isArray(array) && array.length) {
    return array.reduce((a, e) => a + e, 0) / array.length;
  } else {
    return 0;
  }
}

//console.log(min([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]));
