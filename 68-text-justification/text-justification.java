
import java.util.*;

class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();

        int n = words.length;
        int i = 0;

        while (i < n) {
            int j = i;
            int letters = 0;

            // Find how many words can fit in this line
            while (j < n &&
                   letters + words[j].length() + (j - i) <= maxWidth) {
                letters += words[j].length();
                j++;
            }

            int gaps = j - i - 1;
            int spaces = maxWidth - letters;
            StringBuilder line = new StringBuilder();

            // Last line or only one word: left-justify
            if (j == n || gaps == 0) {
                for (int k = i; k < j; k++) {
                    line.append(words[k]);

                    if (k < j - 1) {
                        line.append(" ");
                    }
                }

                while (line.length() < maxWidth) {
                    line.append(" ");
                }
            } else {
                int eachSpace = spaces / gaps;
                int extraSpace = spaces % gaps;

                for (int k = i; k < j; k++) {
                    line.append(words[k]);

                    if (k < j - 1) {
                        int count = eachSpace;

                        if (extraSpace > 0) {
                            count++;
                            extraSpace--;
                        }

                        for (int s = 0; s < count; s++) {
                            line.append(" ");
                        }
                    }
                }
            }

            result.add(line.toString());
            i = j;
        }

        return result;
    }
}
