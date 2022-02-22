// let myStr = "Cheartse".indexOf("s1")
// console.log(myStr);

// Function to find string locations in a text irrespective of case
// 
function indexOfIgnoreCase(str1, str2) {
    let index = str1.toLowerCase().indexOf(str2.toLowerCase())
    return index
}
console.log(indexOfIgnoreCase('astronomical COnjunction', 'J'));

