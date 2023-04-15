const perf = require('execution-time')();

//Step 1: Runtime Analysis

//Extra Large Array Runtime:
// Insert function - 780.26 ms 
// Append function - 1.93 ms 

//Large Array Runtime:
// Insert function - 6.62 ms
// Append function - 396 us

//Medium Array Runtime:
// Insert function - 154.38 ms
// Append function - 105.42 ms 

//Small Array Runtime:
// Insert function - 27.80 ms
// Append function - 60.58 ms

//Tiny Array Runtime:
// Insert function - 15.46 us
// Append function - 42.29 us

//The function that uses unshift is generally slower than the function that uses push because unshift has to shift all elements one spot to the left when a new element is added.

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
