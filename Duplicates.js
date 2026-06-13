
function containsDuplicates(arr) {
    let counts = {};
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (!counts[arr[i]]) {
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]]++;
        }

    }
    for (let key in counts) {
        if (counts[key] > 1) {
            console.log(counts[key])
            duplicates.push(Number(key))
        }
    }
    return duplicates

}

console.log(containsDuplicates([2, 4, 4, 5]))