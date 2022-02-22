// indexOf with search position
// let n1 = 'White Rabbit'.indexOf('it', 1);
// let n2 = 'White Rabbit'.indexOf('it', 3);
// console.log(n1, n2);

// let myStr = 'Bnklue Monkeys'.indexOf('nk', 1);
// let myStr1 = 'Bnklue Monkeys'.indexOf('nk', 3);
// console.log(myStr, myStr1);

// Function that returns the sescond string fromsome wird stuff I don't even get

function secondIndexOf(str1, str2) {
    let secondIndex = str1.indexOf(str2)
    return str1.indexOf(str2, secondIndex+1)
}
console.log(secondIndexOf('Apples and Orangles', 'Apples and Orangles'))