function square(num){
    return num**2;
}
let square_num = square(10)

console.log("Square of number is : " + square_num)

// 1. Declare variables
let number = 7;


function Prime_number(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

let result = Prime_number(number);
console.log("Prime number is : ",result);

function max_number(a,b){
    if (a > b){
        return a;
    }else{
        return b;
    }
}
console.log("Max number is : ",max_number(30, 40));

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
console.log("The vowels is : ",countVowels("uzair ahmed"));