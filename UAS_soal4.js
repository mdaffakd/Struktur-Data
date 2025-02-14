class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null; // Node sebelumnya (awalnya null)
  let curr = head; // Node saat ini (awalnya head)
  let nextTemp = null; // Node sementara untuk menyimpan node berikutnya

  while (curr !== null) {
    nextTemp = curr.next; // Simpan node berikutnya
    curr.next = prev;     // Ubah pointer next node saat ini ke node sebelumnya
    prev = curr;         // Pindahkan prev ke node saat ini
    curr = nextTemp;     // Pindahkan curr ke node berikutnya
  }

  return prev; // prev sekarang menunjuk ke head dari linked list yang dibalik
}

// Membangun linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = reverseList(head);

let current = reversedHead;
while (current !== null) {
  console.log(current.val); // Output: 5, 4, 3, 2, 1
  current = current.next;
}