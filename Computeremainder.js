function countOccurrences(arr){
    let count = {};
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        if(count[item]){
            count[item]++; 
        } else {
            count[item] = 1;  
        }
    }
    return count 
}

console.log(countOccurrences(["apple", "banana", "apple"]))
