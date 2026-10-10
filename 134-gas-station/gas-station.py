class Solution:
    def canCompleteCircuit(self, gas: list[int], cost: list[int]) -> int:
        total_gas = 0
        total_cost = 0

        for i in range(len(gas)):
            total_gas += gas[i]
            total_cost += cost[i]

        if total_cost > total_gas:
            return -1

        pos = 0
        curr_sum = 0
        for i in range(len(gas)):
            curr_sum += gas[i] - cost[i]

            if curr_sum < 0:
                curr_sum = 0
                pos = i + 1

        return pos