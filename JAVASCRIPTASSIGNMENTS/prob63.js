function sum(a) {
    let currentSum = a;
    return function(b) {
      return a+b;
    };
  }
  alert( sum(1) (2) );
  alert( sum(5) (-1) );