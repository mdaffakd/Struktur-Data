class MyQueue {
    constructor() {
      this.stack1 = []; // Stack utama untuk operasi push dan pop
      this.stack2 = []; // Stack sementara untuk membantu operasi pop
    }
  
    push(x) {
      this.stack1.push(x);
    }
  
    pop() {
      if (this.empty()) {
        return undefined; // Atau throw error, tergantung kebutuhan
      }
  
      // Pindahkan semua elemen dari stack1 ke stack2, kecuali elemen terakhir
      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
      }
  
      const front = this.stack1.pop(); // Elemen terakhir di stack1 adalah elemen depan queue
      
      // Kembalikan elemen dari stack2 ke stack1
      while (this.stack2.length > 0) {
          this.stack1.push(this.stack2.pop())
      }
  
      return front;
    }
  
    peek() {
      if (this.empty()) {
        return undefined; // Atau throw error, tergantung kebutuhan
      }
  
      // Pindahkan semua elemen dari stack1 ke stack2, kecuali elemen terakhir
      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
      }
  
      const front = this.stack1[this.stack1.length - 1]; // Elemen terakhir di stack1 adalah elemen depan queue
  
      // Kembalikan elemen dari stack2 ke stack1
      while (this.stack2.length > 0) {
          this.stack1.push(this.stack2.pop())
      }
  
      return front;
    }
  
    empty() {
      return this.stack1.length === 0;
    }
  }
  
  const queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  console.log(queue.peek()); // Output: 1
  console.log(queue.pop()); // Output: 1
  console.log(queue.empty()); // Output: false