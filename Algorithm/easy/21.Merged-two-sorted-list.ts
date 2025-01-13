// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let preNode: ListNode = new ListNode(-1);
  let pointerNode: ListNode = preNode

  while (list1 != null && list2 != null) {
      if (list1.val <= list2.val) {
          pointerNode.next = list1;
          list1 = list1.next
      } else {
          pointerNode.next = list2;
          list2 = list2.next
      }

      pointerNode = pointerNode.next;
  }
  
  if (list1 !== null) {
      pointerNode.next = list1
  } else {
      pointerNode.next = list2
  }

  return preNode.next;
};


