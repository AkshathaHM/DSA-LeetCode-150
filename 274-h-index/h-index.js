/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
    let bucket = new Array(n+1).fill(0);

    for(let i = 0; i < n; i++) {
        let x = citations[i];
        if(x >= n) {
            bucket[n]++;
        } else {
            bucket[x]++;
        }
    }
    let count = 0;
    for(let i = n; i >= 0; i--) {
        count += bucket[i];

        if(count >= i) {
            return i;
        }
    }
    return 0;
};