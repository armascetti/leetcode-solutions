var isValid = function (s) {
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i])
    } else {
      if (arr[arr.length - 1] === pairs[s[i]]) {
        arr.pop()
      }
      else return false
    }
  }
  return arr.length === 0 ? true : false
};