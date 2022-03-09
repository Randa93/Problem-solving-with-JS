// Loop Solution

// function longestWordIn(sentence) {
// let splArray = sentence.split(" ");
// let longestLen = 0;
// let longestWord;

// for (let i = 0; i < splArray.length; i++) {
//     if (splArray[i].length > longestLen) {
//     longestWord = splArray[i];
//     longestLen = splArray[i].length;
//     }
// }

// return longestWord;
// }
console.log(longestWordIn("i love programmming with elzero web school to much"))
// // Reduce Solution

// function longestWordIn(sentence) {
// let longestWord = sentence.split(" ").reduce(function (longest, current) {
//     console.log(longest);
//     console.log(current);
//     console.log("#".repeat(10));
//     return current.length > longest.length ? current : longest;
// });

// return longestWord;
// }

// Arrow Function Version

function longestWordIn(sentence) {
let longestWord = sentence.split(" ").reduce((l, c) => (c.length > l.length ? c : l));
return longestWord;
}
