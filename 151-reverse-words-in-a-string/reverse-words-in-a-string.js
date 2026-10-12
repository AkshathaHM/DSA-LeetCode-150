/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Remove leading/trailing spaces and split by one or more spaces
    const words = s.trim().split(/\s+/);
    
    // Reverse the array of words and join with a single space
    return words.reverse().join(" ");
};