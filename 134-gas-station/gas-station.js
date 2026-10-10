/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    if (totalCost > totalGas) {
        return -1;
    }

    let pos = 0;
    let currSum = 0;

    for (let i = 0; i < gas.length; i++) {
        currSum += gas[i] - cost[i];

        if (currSum < 0) {
            currSum = 0;
            pos = i + 1;
        }
    }

    return pos;
};