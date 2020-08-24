// write a function that returns the longest name {first and last} in the given array of objects

const LongestName = function(instructors) {
  
  let firstAndLastName = [];
  let temp = 0;
  let i = 0;

  for (let i = 0; i < instructors.length; i++) {
    
    firstAndLastName.push(instructors[i].first + " " + instructors[i].last);

  }
  

    firstAndLastName.forEach(function(elem, index){

      if (temp < elem.length) {

        temp = elem.length;
        i = index;

      }

    });

  //console.log(firstAndLastName);

  return(firstAndLastName[i]);

};

console.log(LongestName([
  {first: "Samuel", last: "Sanderson"},
  {first: "Jeremiah", last: "Web"},
  {first: "Ophilia", last: "Rich"},
  {first: "Donald", last: "kant"}
]));
console.log(LongestName([
  {first: "Matthew", last: "Eberty"},
  {first: "David", last: "John"},
  {first: "Domascus", last: "Anderson"}
]));