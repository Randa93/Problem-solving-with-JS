// function removeDuplicateWordsFrom(sentence) {
// let wordsList = sentence.split(" ");
// let result = [];
// for (let i = 0; i < wordsList.length; i++) {
//     if (result.indexOf(wordsList[i]) === -1) {
//     result.push(wordsList[i]);
//     }
// }
// return result.join(" ");
// }

// console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
// // Hello Elzero Web School


// //solution Two
// function removeDuplicateWordsFrom(sentence) {
// let wordsList = sentence.split(" ");
// console.log(wordsList);
// let newSet = new Set(wordsList);
// console.log(newSet);
//   // let arrayFromSet = [...newSet];
// let arrayFromSet = Array.from(newSet);
// console.log(arrayFromSet);
// let joinWords = arrayFromSet.join(" ");
// console.log(joinWords);
// return joinWords;
// }

// console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
// // Hello Elzero Web School


//In One Row 
function removeDuplicateWordsFrom(sentence) {
return [...new Set(sentence.split(" "))].join(" ");
}

console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
// Hello Elzero Web School
