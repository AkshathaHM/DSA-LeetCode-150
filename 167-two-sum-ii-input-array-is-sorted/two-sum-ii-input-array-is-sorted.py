
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        n = len(numbers)
        res = [0, 0]

        i = 0
        j = n - 1

        while i < j:
            front = numbers[i]
            back = numbers[j]

            if front + back == target:
                res[0] = i + 1
                res[1] = j + 1
                break

            elif front + back > target:
                j -= 1

            else:
                i += 1

        return res
