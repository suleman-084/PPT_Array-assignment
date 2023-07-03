{
  /* <aside>
💡 **Question 5**

Given a number , write a program to reverse this number using stack.

**Examples:**

```
Input : 365
Output : 563

Input : 6899
Output : 9986
```

</aside>
 */
}

function reverseNumber(number) {
  const stack = [];
  let reverse = 0;

  // Push each digit of the number onto the stack
  while (number > 0) {
    const digit = number % 10;
    stack.push(digit);
    number = Math.floor(number / 10);
  }

  // Pop each digit from the stack and build the reversed number
  let place = 1;
  while (stack.length > 0) {
    const digit = stack.pop();
    reverse += digit * place;
    place *= 10;
  }

  return reverse;
}

// Example usage:
const number1 = 365;
const reversed1 = reverseNumber(number1);
console.log(reversed1); // Output: 563

const number2 = 6899;
const reversed2 = reverseNumber(number2);
console.log(reversed2); // Output: 9986
