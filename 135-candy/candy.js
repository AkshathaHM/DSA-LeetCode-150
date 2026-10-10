/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length === 0) {
        return 0;
    }

    let res = 1;
    let up = 0;
    let down = 0;
    let peak = 0;

    for (let i = 1; i < ratings.length; i++) {
        let prev = ratings[i - 1];
        let cur = ratings[i];

        if (prev < cur) {
            up++;
            down = 0;
            peak = up;
            res += 1 + up;
        } else if (prev === cur) {
            up = 0;
            down = 0;
            peak = 0;
            res += 1;
        } else {
            up = 0;
            down++;
            res += 1 + down;
            if (peak >= down) {
                res--;
            }
        }
    }

    return res;
};