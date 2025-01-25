// contoh codingan Stack

class Stack {
    constructor() {
      this.items = [];
    }

    // Menambahkan elemen ke dalam stack
    push(item) {
      this.items.push(item);
    }

    // Menghapus elemen dari stack
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      } else {
        return "Stack is empty";
      }
    }

    // Melihat elemen teratas stack tanpa menghapusnya
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      } else {
        return "Stack is empty";
      }
    }

    // Mengecek apakah stack kosong
    isEmpty() {
      return this.items.length === 0;
    }

    // Menghitung jumlah elemen dalam stack
    size() {
      return this.items.length;
    }
  }

  // Penggunaan stack
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  stack.push(60);
  stack.push(70);
  stack.push(80);
  stack.push(90);

  console.log("tampilkan elemen teratas:", stack.peek());  // Menampilkan elemen teratas
  console.log("ukuruan stack:", stack.size());   // Menampilkan ukuran stack

  console.log("hapus dan tampilkan elemen teratas:", stack.pop());   // Menghapus dan menampilkan elemen teratas
  console.log("Stack size after pop:", stack.size());

  console.log("Is the stack empty?", stack.isEmpty());


// contoh codingan Queue
class Queue {
    constructor() {
      this.items = [];
    }

    // Menambahkan elemen ke dalam queue
    enqueue(item) {
      this.items.push(item);
    }

    // Menghapus elemen dari queue
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift(); // shift() menghapus elemen dari depan
      } else {
        return "Queue is empty";
      }
    }

    // Melihat elemen paling depan tanpa menghapusnya
    front() {
      if (!this.isEmpty()) {
        return this.items[0];
      } else {
        return "Queue is empty";
      }
    }

    // Mengecek apakah queue kosong
    isEmpty() {
      return this.items.length === 0;
    }

    // Menghitung jumlah elemen dalam queue
    size() {
      return this.items.length;
    }
  }

  // Penggunaan queue
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  queue.enqueue(60);
  queue.enqueue(70);
  queue.enqueue(80);
  queue.enqueue(90);

  console.log("depan element:", queue.front());  // Menampilkan elemen paling depan
  console.log("Queue size:", queue.size());      // Menampilkan ukuran queue

  console.log("Dequeue element:", queue.dequeue());  // Menghapus dan menampilkan elemen paling depan
  console.log("Queue size after dequeue:", queue.size());

  console.log("Is the queue empty?", queue.isEmpty());