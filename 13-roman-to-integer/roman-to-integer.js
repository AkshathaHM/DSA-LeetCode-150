/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            ans -= romanMap[s[i]];
        } else {
            ans += romanMap[s[i]];
        }
    }

    return ans;
};