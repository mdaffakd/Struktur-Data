class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' -> ';
        current = current.next;
      }
      console.log(result + 'null');
    }
  }
  
  const list = new LinkedList();
  list.append(55);
  list.append(66);
  list.append(77);
  list.append(88);
  
  console.log("Original List:");
  list.printList();
  
  list.reverse();
  
  console.log("Reversed List:");
  list.printList();
