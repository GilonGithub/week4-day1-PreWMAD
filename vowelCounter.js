// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  
  let arr = data.split('');
  let count = 0;

  arr.forEach(function(elem){

    if(elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u') {

      count += 1;
    }

  });
  
  return count;

};

console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));