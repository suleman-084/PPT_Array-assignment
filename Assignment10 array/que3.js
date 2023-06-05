//  **Question 3**

// ****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

function printAllSubsets(set) {
  const subsets = [];
  backtrack(set, 0, "", subsets);
  return subsets;
}

function backtrack(set, index, currentSubset, subsets) {
  subsets.push(currentSubset);

  for (let i = index; i < set.length; i++) {
    backtrack(set, i + 1, currentSubset + set[i], subsets);
  }
}

// Test the function
console.log(printAllSubsets("abc"));
console.log(printAllSubsets("abcd"));
