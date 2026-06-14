function wordFrequency(sentence) {
  // return object of word counts
    let count = {}
    let arr = sentence.split(" ")
    for (let i = 0; i < arr.length; i++){
        if(!count[arr[i]]){
            //if the key isnt already in the object give it the value of 1 
            count[arr[i]] = 1;
        } else {
            count[arr[i]]++; 
            //it the key is already in then I want to increment the count value 
        }
    }
    return count; 
}

console.log(wordFrequency("cat dog cat bird"));

// {
//   cat: 2,
//   dog: 1,
//   bird: 1
// }

//take a string 
// I need to count how many times the word is included in this string 
// place it into an object with a key, value pair 
//return the object 