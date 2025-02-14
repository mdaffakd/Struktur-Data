function isValid(s) {
    const stack = [];
    const matchingBrackets = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (matchingBrackets[char]) {
        // Jika karakter adalah kurung penutup
        if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
          return false; // Tidak valid jika stack kosong atau kurung penutup tidak sesuai dengan kurung pembuka teratas
        }
      } else {
        // Jika karakter adalah kurung pembuka
        stack.push(char);
      }
    }
  
    return stack.length === 0; // Valid jika stack kosong (semua kurung telah dipasangkan)
  }
  
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("(]")); // Output: false
  console.log(isValid("([{}])")); // Output: true
  console.log(isValid("({[}]")); // Output: false