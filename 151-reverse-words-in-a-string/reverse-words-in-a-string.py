class Solution:
    def reverseWords(self, s: str) -> str:
        # Remove leading/trailing spaces and split by one or more spaces
        words = s.strip().split()
        
        # Reverse the list of words and join with a single space
        return " ".join(reversed(words))