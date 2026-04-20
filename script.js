// ============================================================
//  JavaScript Assignment — script.js
// ============================================================


// ============================================================
//  QUESTION 1: Control Flow & Conditional Logic  (15 Marks)
// ============================================================

console.log("=".repeat(55));
console.log("  Q1 — Control Flow & Conditional Logic");
console.log("=".repeat(55));

function getGrade(score) {
  // Determine the letter grade with a switch statement.
  // We divide by 10 and use Math.floor so every ten-point
  // band maps to exactly one case.
  let grade;

  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // Ternary operator — pass (60+) or fail
  const result = score >= 60 ? "PASSED" : "FAILED";

  console.log(`Score: ${score} → Grade: ${grade} | Status: ${result}`);
}

// Test with a range of scores
getGrade(95);   // A — Passed
getGrade(85);   // B — Passed
getGrade(73);   // C — Passed
getGrade(61);   // D — Passed
getGrade(45);   // F — Failed


// ============================================================
//  QUESTION 2: Type Conversion, Truthy & Falsy  (15 Marks)
// ============================================================

console.log("\n" + "=".repeat(55));
console.log("  Q2 — Type Conversion, Truthy & Falsy");
console.log("=".repeat(55));

// --- Part A: String → Number conversion ---
const stringInput = "25";
const convertedNumber = Number(stringInput);

console.log(`Original value : "${stringInput}" (type: ${typeof stringInput})`);
console.log(`Converted value: ${convertedNumber}  (type: ${typeof convertedNumber})`);

// --- Part B: Truthy / Falsy checks ---
const valuesToTest = [0, "", "hello", null, undefined, NaN];

console.log("\nTruthy / Falsy evaluation:");

function formatValueForLog(value) {
  if (Number.isNaN(value)) return "NaN";
  if (value === undefined) return "undefined";
  if (typeof value === "string") return JSON.stringify(value);
  return String(value);
}

valuesToTest.forEach((value) => {
  if (value) {
    console.log(`  ${formatValueForLog(value)} (${typeof value}) → TRUTHY`);
  } else {
    console.log(`  ${formatValueForLog(value)} (${typeof value}) → FALSY`);
  }
});

/*
  Expected output:
    0         → FALSY   (zero is falsy)
    ""        → FALSY   (empty string is falsy)
    "hello"   → TRUTHY  (non-empty string is truthy)
    null      → FALSY
    undefined → FALSY
    NaN       → FALSY
*/


// ============================================================
//  QUESTION 3: Functions & Logical Operators  (20 Marks)
// ============================================================

console.log("\n" + "=".repeat(55));
console.log("  Q3 — Functions & Logical Operators");
console.log("=".repeat(55));

/**
 * greetingBot
 * @param {string}  name       - The user's name
 * @param {boolean} isMorning  - true if it is morning, false otherwise
 * @returns {string} A personalised greeting
 */
function greetingBot(name, isMorning) {
  // Logical AND (&&) confirms isMorning is truthy before choosing morning greeting.
  // Logical OR  (||) provides a fallback name so the bot never greets an empty string.
  const safeName = name || "Friend";
  return isMorning
    ? `Good morning, ${safeName}!`
    : `Hello, ${safeName}!`;
}

// Test cases
console.log(greetingBot("Alice", true));    // Good morning, Alice!
console.log(greetingBot("Bob", false));     // Hello, Bob!
console.log(greetingBot("Charlie", true));  // Good morning, Charlie!
console.log(greetingBot("", false));        // Hello, Friend!  (fallback name)
console.log(greetingBot("Dana", false));    // Hello, Dana!


// ============================================================
//  QUESTION 4: Objects & Methods  (30 Marks)
// ============================================================

console.log("\n" + "=".repeat(55));
console.log("  Q4 — Objects & Methods");
console.log("=".repeat(55));

// Social media post object
const post = {
  username: "code_with_claude",
  caption:  "Just shipped a full JavaScript assignment! 🚀 #100DaysOfCode",
  likes:    42,
  comments: [
    "Awesome work! 🔥",
    "Can you share the repo?",
    "This is so clean 😍",
  ],

  // Method — increases the like count by 1
  addLike() {
    this.likes += 1;
    console.log(`  New like count: ${this.likes}`);
  },
};

// Display initial state
console.log("Initial post object:", post);

// Call addLike() three times
console.log("\nAdding likes...");
post.addLike();
post.addLike();
post.addLike();

// Object destructuring — extract username and caption
const { username, caption } = post;
console.log(`\nDestructured values:`);
console.log(`  username : ${username}`);
console.log(`  caption  : ${caption}`);
console.log(`  comments : [${post.comments.join(" | ")}]`);


// ============================================================
//  QUESTION 5: Loops, Spread Operator & Pattern  (50 Marks)
// ============================================================

console.log("\n" + "=".repeat(55));
console.log("  Q5 — Loops, Spread Operator & Pattern");
console.log("=".repeat(55));

// --- Part A: Merge arrays with the spread operator ---
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
const combined = [...arrayOne, ...arrayTwo];

console.log("Array 1 :", arrayOne);
console.log("Array 2 :", arrayTwo);
console.log("Merged  :", combined);


// --- Part B: Star triangle pattern using a for loop ---
//
//  Row 1 →             *
//  Row 2 →          *    *
//  Row 3 →       *    *    *
//  Row 4 →    *    *    *    *
//  Row 5 → *    *    *    *    *
//
console.log("\nStar pattern (for loop):");

const totalRows = 5;
for (let row = 1; row <= totalRows; row++) {
  // Tune these two values to match the assignment's spacing precisely.
  const indentUnit = "   "; // spaces added per missing row (controls centering)
  const betweenStars = "    "; // spaces between stars on the same row

  const leadingIndent = indentUnit.repeat(totalRows - row);
  const rowStars = Array(row).fill("*").join(betweenStars);
  console.log(leadingIndent + rowStars);
}


// --- Part C: Count down from 10 to 1 using a while loop ---
console.log("\nCountdown (while loop):");

let count = 10;
const countdownValues = [];

while (count >= 1) {
  countdownValues.push(count);
  count--;
}

console.log("  " + countdownValues.join(" → "));


// ============================================================
//  END OF ASSIGNMENT
// ============================================================
console.log("\n" + "=".repeat(55));
console.log("  All questions complete! — 100 marks");
console.log("=".repeat(55));
