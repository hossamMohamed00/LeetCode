/*
Problem Link : {https://leetcode.com/problems/ransom-note/}
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineArr: string[] = magazine.split("");

  let foundedLetterIndex: number = -1;

  for (let i = 0; i < ransomNote.length; i++) {
    foundedLetterIndex = magazineArr.indexOf(ransomNote[i]);

    if (foundedLetterIndex == -1) {
      return false;
    }

    magazineArr.splice(foundedLetterIndex, 1);
  }

  return true;
}

/*
 Runtime: 108 ms, faster than 84.30% of TypeScript online submissions for Ransom Note.
 */

// TESTING HERE
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "baa"));
