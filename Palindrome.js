
var isPalindrome = function (x) {
  let reverseStr = ""
  let xStr = x.toString()

  for (let i of xStr) {
    reverseStr = i + reverseStr
  }
  return reverseStr === xStr
};


