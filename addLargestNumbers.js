const addLargestNumbers = function(data) {
  
  let sum = 0;
  let arrLargestNumbers = []; //just for the sole purpose of printing the largest numbers. Can be removed.

//function to pick the largest from the array

    const pickLargest = function (data) {
      
      let temp = 0;

      data.forEach(function(elem) {

        if (temp < elem) {
        
          temp = elem;
        
        }

      });

      data.splice(data.indexOf(temp), 1);
      
      arrLargestNumbers.push(temp); //just for the sole purpose of printing the largest numbers. Can be removed.

      return temp;

    }

//loop the pickLargest function twice to add the two largest numbers

  for (let j = 0; j < 2; j++)
   {
     sum += pickLargest(data);
    // console.log(data.join(' '));
   }

  console.log(arrLargestNumbers);
    
  return sum;
  
};

//console.log(addLargestNumbers([1, 10]));
//console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));