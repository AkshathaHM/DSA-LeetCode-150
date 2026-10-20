
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLen = 0;
    let charMap = {};

    let left = 0;

    for (let right = 0; right < n; right++) {
        if (!(s[right] in charMap) || charMap[s[right]] < left) {
            charMap[s[right]] = right;
            maxLen = Math.max(maxLen, right - left + 1);
        } else {
            left = charMap[s[right]] + 1;
            charMap[s[right]] = right;
        }
    }

    return maxLen;
};
