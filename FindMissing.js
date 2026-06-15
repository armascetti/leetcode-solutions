function findMissing(arr){
    for(let i = 0; i < arr.length; i++){
        //compare next value with the current value plus 1
        //if it doesnt equal the current value plus 1 return that number
        let currentNum = arr[i]; //1
        let compareNum = arr[i] + 1; //2
        let nextNum = arr[i + 1]; //2
        if(nextNum !== compareNum){
            return compareNum;
        } 
    }
}


console.log(findMissing([1, 2, 3, 5]));


//i want to iterate through the array 
// how can I go one by one until it finds the missing one? 
//subtract the current number from the next number 
//if the difference is greater than 1 
//return current number +1 

//if it needed to be sorted from least to greatest:  let newArr = arr.sort((a, b ) => a - b) 
