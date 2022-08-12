/*
Problem Link: {https://leetcode.com/problems/middle-of-the-linked-list/}
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Solution 1
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

/*
When traversing the list with a pointer slow, make another pointer fast that traverses twice as fast. 
When fast reaches the end of the list, slow must be in the middle.
*/

// Solution 2
// function middleNode(head: ListNode | null): ListNode | null {
//   let result = [head]

//   while(result[result.length -1].next != null) {
//     result.push(result[result.length -1].next)
//   }

// 	// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
//   return result[Math.trunc(result.length / 2)]
// };
