/*
Problem Link: {https://leetcode.com/problems/merge-sorted-array/?envType=study-plan&id=data-structure-i}
*/

/*
  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  /*
  Solution:
    - We start from the end of the array and compare the last element of nums1 and nums2.
    - We put the bigger element at the end of nums1.
    - We repeat this process until we reach the beginning of nums1 or nums2.
    - If we reach the beginning of nums2, we are done.
    - If we reach the beginning of nums1, we copy the remaining elements of nums2 to nums1.
 */

  let i = m - 1;
  let j = n - 1;
  let target = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[target] = nums1[i];
      i--;
    } else {
      nums1[target] = nums2[j];
      j--;
    }

    target--;
  }

  while (j >= 0) {
    nums1[target] = nums2[j];
    j--;
    target--;
  }
}
