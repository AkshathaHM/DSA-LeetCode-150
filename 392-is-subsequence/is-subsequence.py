
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        l1 = len(s)
        l2 = len(t)

        if l1 > l2:
            return False

        if l1 == 0:
            return True

        i = 0
        j = 0

        while i < l1 and j < l2:
            c = s[i]

            if c == t[j]:
                i += 1

            j += 1

            if i == l1:
                return True

        return False
