class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        ans = 0
        end = 0
        farthest = 0

        for i in range(n-1):
            farthest = max(farthest, nums[i] + i);

            if farthest >= n - 1:
                ans += 1
                return ans

            if i == end:
                ans += 1
                end = farthest

        return ans