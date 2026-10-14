
var twoSum = function(numbers, target) {
    let n = numbers.length;
    let res = [0, 0];

    let i = 0;
    let j = n - 1;

    while (i < j) {
        let front = numbers[i];
        let back = numbers[j];

        if (front + back === target) {
            res[0] = i + 1;
            res[1] = j + 1;
            break;
        } else if (front + back > target) {
            j--;
        } else {
            i++;
        }
    }

    return res;
};
