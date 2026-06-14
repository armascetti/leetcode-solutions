
// for numbers 1-100

// 3 => Fizz
// 5 => Buzz
// 3 and 5 => FizzBuzz

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FIZZBUZZ");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}


console.log(fizzBuzz(15))