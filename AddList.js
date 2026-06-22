// // Prompt:

// //   - Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum.
// //   - Assume all parameters will be numbers.
// //   - If called with no arguments, return 0 (zero).

// //   Examples:

// //   add(1) //=> 1
// //   add(1,50,1.23) //=> 52.23
// //   add(7,-12) //=> -5


// function addList(...nums){
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++){
//         sum += nums[i]
//     }
//     return sum 
// }



function firstUniqueChar(str) {
   let count = {};
   for (let i = 0; i < str.length; i++) {
      let word = str[i]
      if (count[word]) {
         count[word] += 1;
      } else {
         count[word] = 1;
      }
   }
   for (j = 0; j < str.length; j++) {
      let char = str[j];
      if (count[char] === 1) {
         return char;
      }

   }
   return null;
}

console.log(firstUniqueChar("loveleetcode")); // "v"