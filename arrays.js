console.log("largest, smallest, reverse, sum of all number in an array remove duplications");
const number =[1,2,3,4,5,6,7,8,7,2,4,9,9];

const rev_number = number.reverse()

const unique = number.filter((value, index) => number.indexOf(value) ===index)

console.log( "The largest number is " + Math.max.apply(null, number)); 
console.log( "The smallest number is " + Math.min.apply(null, number)); 
console.log(rev_number);
console.log(unique);