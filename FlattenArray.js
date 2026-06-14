function flatten(arr) {
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!Array.isArray(item)) {
            flat.push(item)
        } else {
           flat.push(...flatten(item))
        }
    }
    return flat;
}



console.log(flatten([[1], [2], [3]]));
// [1,2,3]

// Create an empty result array
// Loop through each item in arr

//     IF item is NOT an array
//         add item to result

//     ELSE
//         flatten the nested array

//         add all flattened values
//         into result

// Return result