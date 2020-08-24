// write a function that returns the sum of all the numbers that are either 'even', or 'odd'

const conditionalAdding = function(values, condition) {

  let sum = 0;

  const calculate = function(num, even) {

    tempEven = 0;
    tempOdd = 0;

    if(num % 2 === 0) {

      tempEven += num;

    } else {
      
      tempOdd += num;
    }

    if(even) {
      return tempEven;
    } else {
      return tempOdd;
    }

 };
  

  if (condition === "even") {
 
    values.forEach(function(elem){

     sum += calculate(elem, true);

    });

  } else if (condition === "odd") {

    values.forEach(function(elem){

      sum += calculate(elem, false);
 
     });

  }

  return sum;

};

//console.log(conditionalAdding([1, 2, 3, 4, 5, 6], "even"));
//console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
//console.log(conditionalAdding([], "odd"));