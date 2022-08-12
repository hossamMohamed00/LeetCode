/*
Problem Link : {https://leetcode.com/problems/ransom-note/}
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  let ransomNoteHash = {};
  let magazineHash = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNoteHash[ransomNote[i]]) {
      ransomNoteHash[ransomNote[i]]++;
    } else {
      ransomNoteHash[ransomNote[i]] = 1;
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    if (magazineHash[magazine[i]]) {
      magazineHash[magazine[i]]++;
    } else {
      magazineHash[magazine[i]] = 1;
    }
  }

  for (let key in ransomNoteHash) {
    if (!magazineHash[key] || magazineHash[key] < ransomNoteHash[key]) {
      return false;
    }
  }

  return true;
};

// TESTING HERE
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "baa"));
