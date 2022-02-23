// Extracting with substr() function

// let stones = 'sticks and stones'.substring(2, 10)
// console.log(stones);

function firstWords(str){
    let index = str.indexOf(" ")
    return str.substring(0, index)
}

console.log(firstWords('Mangoes and oranges'))