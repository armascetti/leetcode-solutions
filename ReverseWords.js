// function reverseWords(str) {
//   // reverse order of words
//   let reverse = str.split(" ").reverse()
//   let join = reverse.join(" ")
//   console.log(join)
// }


//with for loop 

function reverseWords(str){
    let newStr = "";
    let arr = str.split(" ")
    for (let i = arr.length - 1; i >= 0; i--){
        newStr += arr[i] + " ";
    }
    return newStr;
}
console.log(reverseWords("JavaScript is fun"));

// "fun is JavaScript"