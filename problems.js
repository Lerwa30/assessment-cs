const perf = require('execution-time')();

// 1 Sum Zero
const addToZero = (arr) => {
    let value = false;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) {
                if(arr[i] + arr[j] === 0) {
                    value = true;
                }
            }
        }
    }
    return value
}

console.log(addToZero([0, 3, -3, 4, 8, -2]))


perf.start();                     
addToZero([0, 3, -3, 4, 8, -2]);
let results = perf.stop(); 

console.log("addToZero", results.preciseWords);

//Add to Zero is about 33.2 us


// 2 Unique Characters
const hasUniqueChars = (word) => {
    if(new Set(word).size === word.length) {
        return true
    } else { return false }
}

console.log(hasUniqueChars('zelda'))

perf.start();         
hasUniqueChars('zelda')            
let results2 = perf.stop(); 

console.log("hasUniqueChars", results2.preciseWords);

//Has Unique Characters is about 4 us.


// 3 Pangram Sentence
const isPangram = (string) => {
    let lowerStr = string.toLowerCase();
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for(let i = 0; i < letters.length; i++) {
        if(lowerStr.indexOf(letters[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))

perf.start();         
isPangram("The quick brown fox jumps over the lazy dog.")           
let results3 = perf.stop(); 

console.log("isPanagram", results3.preciseWords);

//isPanagram is about 5.3 us.


// 4 Longest Word
const findLongestWord = (arr) => {
    let longestWord = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord) {
            longestWord = arr[i].length
        }
    }
    return longestWord;
}

console.log(findLongestWord(['hi', 'hello', 'spiderman']))

perf.start();         
findLongestWord(['hi', 'hello', 'spiderman'])
let results4 = perf.stop(); 

console.log("longestWord", results4.preciseWords);

//Longest Word is about 2.2 us.