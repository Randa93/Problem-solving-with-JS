// function findMissingLetterIn(givenLetters) {
//     let alpha = "abcdefghijklmnopqrstuvwxyz";
//     let start = alpha.indexOf(givenLetters[0]);

//     for (let i = 0; i < givenLetters.length; i++) {
//       // console.log(alpha[start + i]); // Loop On Alpha
//       // console.log(givenLetters[i]); // Loop On Given Letters
//       // console.log("#####");
//     if (givenLetters[i] !== alpha[start + i]) {
//         return alpha[start + i];
//     }
//     }

//     return "No Missing Letter In Sequence";
// }

//   console.log(findMissingLetterIn("defgi")); // h
//   console.log(findMissingLetterIn("abcdeghi")); // f
//   console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence



// Another solution
function findMissingLetterIn(givenLetters) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(givenLetters[0]); // 3
    let len = givenLetters.length; // 5

    for (let i = start; i < start + len; i++) {
    if (!givenLetters.includes(alpha[i])) {
        return alpha[i];
    }
    }
    return "No Missing Letters";
}

  console.log(findMissingLetterIn("defgi")); // h
  console.log(findMissingLetterIn("abcdeghi")); // f
  console.log(findMissingLetterIn("xyz")); // No Missing Letter In Sequence