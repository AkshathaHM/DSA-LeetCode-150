
var isSubsequence = function(s, t) {
    let l1 = s.length;
    let l2 = t.length;

    if (l1 > l2) {
        return false;
    }

    if (l1 === 0) {
        return true;
    }

    let i = 0;
    let j = 0;

    while (i < l1 && j < l2) {
        let c = s[i];

        if (c === t[j]) {
            i++;
        }

        j++;

        if (i === l1) {
            return true;
        }
    }

    return false;
};
