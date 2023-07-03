{
  /* <aside>
💡 **Question 6**

Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

**Example 1:**

```
Input: S = "231*+9-"
Output: -4
Explanation:
After solving the given expression,
we have -4 as result.

```

**Example 2:**

```
Input: S = "123+*8-"
Output: -3
Explanation:
After solving the given postfix
expression, we have -3 as result.
```

</aside>
 */
}

function evaluatePostfixExpression(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (isNumeric(char)) {
      stack.push(Number(char));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      let result;

      switch (char) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

function isNumeric(char) {
  return !isNaN(parseFloat(char)) && isFinite(char);
}

// Example usage:
const S1 = "231*+9-";
console.log("Result:", evaluatePostfixExpression(S1)); // Output: -4

const S2 = "123+*8-";
console.log("Result:", evaluatePostfixExpression(S2)); // Output: -3
