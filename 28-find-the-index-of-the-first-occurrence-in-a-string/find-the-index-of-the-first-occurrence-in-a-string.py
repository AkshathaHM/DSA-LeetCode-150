
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        haylen = len(haystack)
        needlelen = len(needle)

        if haylen < needlelen:
            return -1

        for i in range(haylen - needlelen + 1):
            j = 0

            while (j < needlelen and
                   haystack[i + j] == needle[j]):
                j += 1

            if j == needlelen:
                return i

        return -1
