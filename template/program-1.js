// Sort the string According to the frequency of character
// Write a program to sort a string according to the frequency of character and return the final string.
// If two character have same frequency then sort them in reverse lexicographical order.
// Input: "tree"
// Output: "eetr"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is a valid answer.
// Input: "cccaaa"
// Output: "cccaaa"
// Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Input: "hello world"
// Output: "llloohe wrd"
// Explanation: 'l' appears twice while 'o', 'h', 'e', 'w', 'r' and 'd' all appear once.

function sortStringByFrequency(inputString) {
    // Step 1: Create a map to store character frequencies
    const charFrequency = new Map();

    // Count character frequencies
    for (const char of inputString) {
        if (char.match(/[a-zA-Z0-9]/)) { // Consider only alphanumeric characters
            charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
        }
    }

    // Step 2: Sort characters based on frequencies
    const sortedChars = [...charFrequency.keys()].sort((a, b) =>
        charFrequency.get(b) - charFrequency.get(a)
    );

    // Step 3: Generate the final sorted string
    let sortedString = '';
    for (const char of sortedChars) {
        sortedString += char.repeat(charFrequency.get(char));
    }

    return sortedString;
}

// Example usage:
const inputStr = "hello world";
const result = sortStringByFrequency(inputStr);
console.log(result);
