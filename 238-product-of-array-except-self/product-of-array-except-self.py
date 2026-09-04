class Solution:
    def productExceptSelf(self, nums):
        n = len(nums)
        ans = [1] * n

        curr = 1

        for i in range(1, n):
            curr *= nums[i - 1]
            ans[i] *= curr

        curr = 1

        for i in range(n - 2, -1, -1):
            curr *= nums[i + 1]
            ans[i] *= curr

        return ans