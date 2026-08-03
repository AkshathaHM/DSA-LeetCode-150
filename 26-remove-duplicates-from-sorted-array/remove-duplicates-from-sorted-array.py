class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
         n = len(nums)
         j = 1

         for i in range(n):
            if nums[i]!=nums[j-1]:
                nums[j] = nums[i]
                j += 1

         return j