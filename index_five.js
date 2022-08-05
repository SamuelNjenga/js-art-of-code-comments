// What makes comments BAD?
// (i) Comments used when they are unneeded

// Initial Code
// gets all longest strings
function longestString(inputArray) {
  // Initialize the longest let to index 0
  let length = inputArray[0].length;

  for (let i = 1; i < inputArray.length; i++) {
    // Checks if the current string is longer
    if (length < inputArray[i].length) {
      length = inputArray[i].length;
    }
  }

  // Filters out any values not equal to the longest String
  const strs = inputArray.filter(() => {
    return word.length === length;
  });
  return strs;
}

// The above code is refactored as below
// The comment is different from function variable name
// Typically function names should be verbs and be more descriptive

function getLongestStrings(inputArray) {
  let longestWordLength = inputArray[0].length;

  for (let i = 1; i < inputArray.length; i++) {
    if (longestWordLength < inputArray[i].length) {
      longestWordLength = inputArray[i].length;
    }
  }

  const longestWords = inputArray.filter(
    () => word.length === longestWordLength
  );
  return longestWords;
}
// (ii) Comments are typically used to explain bad code
// (iii) Comments need to be maintained and may mislead
// (iv) Leftover code
// You can comment out code when you are working, testing but not in production
// If you are no longer using a piece of code, delete it, because if you need to go back and get it, that is what version control is for.
// (v) Version control code
// For Example:
/**
 * 2018-07-04: Happy 4th of July (Samuel Njenga)
 * 2018-07-10: Removed finite quote limit (Samuel Njenga)
 */
// The above is taken care of by the commit messages

// (vi) Visual Markers -> Blocks of code explaining what is going on
// For example:
////////////////////////
// Dependencies
////////////////////////

////////////////////////
// Meta Information
////////////////////////

////////////////////////
// Properties
////////////////////////

////////////////////////
// Public Functions
////////////////////////

// Let structure of your classes be what they should be and easy to follow through with no comments

// (vii) TODOs

