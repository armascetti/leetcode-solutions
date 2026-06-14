function findLargest(arr) {
//   // return largest number
  return Math.max(...arr)
   }
//the spread operator takes it out of the array which allows MAth.max to check the numbers 


//without a for loop 

function findLargest(arr){
    let largest = arr[0]
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}
console.log(findLargest([3,8,1,12,5]));

// 12

//iterate through the array 
// while going it i want to replace it everytime a large num comes through 
// return that largest number 