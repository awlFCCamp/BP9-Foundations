// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:

const has_balanced_parens = (str) => {
  const stack = [];
  for (char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(has_balanced_parens("()"));
// true

console.log(has_balanced_parens("(Oh Noes!)("));
// false

console.log(has_balanced_parens("((There's a bonus open paren here.)"));
// false

console.log(has_balanced_parens(")"));
// false

console.log(has_balanced_parens("("));
// false

console.log(has_balanced_parens("(This has (too many closes.) ) )"));
// false

console.log(has_balanced_parens("Hey...there are no parens here!"));
// true
