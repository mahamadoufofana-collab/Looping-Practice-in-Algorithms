/* ==========================================================================
   LOOPING PRACTICE IN ALGORITHMS - JAVASCRIPT IMPLEMENTATION
   --------------------------------------------------------------------------
   Author: Student College Assignment
   Technology: Pure Vanilla JavaScript (No libraries, No external APIs)
   Description:
     This file contains all 16 algorithms for Levels 1 to 4.
     Each problem has:
       1. A run function: Reads input, validates it, runs the loop, displays result.
       2. A reset function: Restores original default inputs and clears output.
     Simple variable names (n, i, j, sum, count, result) and extensive comments
     are used so any student or lecturer can easily trace the execution.
   ========================================================================== */

// ==========================================================================
// HELPER FUNCTIONS FOR OUTPUT DISPLAY
// ==========================================================================

/**
 * Display text inside an output element.
 * If isError is true, styles the box with a red error border and background.
 */
function displayOutput(elementId, text, isError = false) {
  const outputElement = document.getElementById(elementId);
  if (!outputElement) return;

  outputElement.textContent = text;
  if (isError) {
    outputElement.classList.add("error");
    outputElement.classList.remove("success");
  } else {
    outputElement.classList.remove("error");
    outputElement.classList.add("success");
  }
}

/**
 * Reset an output element back to its initial placeholder state.
 */
function clearOutput(elementId) {
  const outputElement = document.getElementById(elementId);
  if (!outputElement) return;

  outputElement.textContent = 'Click "Run Algorithm" to see the output.';
  outputElement.classList.remove("error", "success");
}


// ==========================================================================
// LEVEL 1: BASIC LOOPING (PROBLEMS 1 - 4)
// ==========================================================================

/* --------------------------------------------------------------------------
   PROBLEM 1: Counting Sequence
   Goal: Display integers from 1 up to N using a forward counting loop.
   -------------------------------------------------------------------------- */
function runProblem1() {
  // Step 1: Read the input value from the user
  const inputVal = document.getElementById("p1-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Input validation (must be a valid integer >= 1)
  if (isNaN(n) || n < 1) {
    displayOutput("p1-output", "Error: Please enter a valid positive integer (N >= 1).", true);
    return;
  }

  // Step 3: Run the loop from 1 to N
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i;
    // Add a comma between numbers, but not after the last number
    if (i < n) {
      result += ", ";
    }
  }

  // Step 4: Display the result
  displayOutput("p1-output", `Counting from 1 to ${n}:\n${result}`);
}

function resetProblem1() {
  document.getElementById("p1-n").value = "10";
  clearOutput("p1-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 2: Countdown
   Goal: Display N down to 1, followed by "Start!".
   -------------------------------------------------------------------------- */
function runProblem2() {
  // Step 1: Read input
  const inputVal = document.getElementById("p2-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n) || n < 1) {
    displayOutput("p2-output", "Error: Please enter a valid positive integer (N >= 1).", true);
    return;
  }

  // Step 3: Decrementing loop from n down to 1
  let result = "";
  for (let i = n; i >= 1; i--) {
    result += i + ", ";
  }
  // Append the final launch word
  result += "Start!";

  // Step 4: Display the result
  displayOutput("p2-output", `Countdown from ${n}:\n${result}`);
}

function resetProblem2() {
  document.getElementById("p2-n").value = "5";
  clearOutput("p2-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 3: Sum of Numbers
   Goal: Calculate the sum from 1 to N using a loop and an accumulator.
   -------------------------------------------------------------------------- */
function runProblem3() {
  // Step 1: Read input
  const inputVal = document.getElementById("p3-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n) || n < 1) {
    displayOutput("p3-output", "Error: Please enter a valid positive integer (N >= 1).", true);
    return;
  }

  // Step 3: Loop with accumulator
  let sum = 0;
  let formulaParts = [];

  for (let i = 1; i <= n; i++) {
    sum = sum + i; // accumulator step
    formulaParts.push(i);
  }

  // Step 4: Display readable output with calculation steps
  let equation = formulaParts.join(" + ") + " = " + sum;
  // If n is large (e.g. > 15), show a condensed representation so it's clean
  if (n > 15) {
    equation = `1 + 2 + ... + ${n} = ${sum}`;
  }

  displayOutput("p3-output", `Calculation: ${equation}\nTotal Sum: ${sum}`);
}

function resetProblem3() {
  document.getElementById("p3-n").value = "5";
  clearOutput("p3-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 4: Multiplication Table
   Goal: Display the table of N from 1 to 10.
   -------------------------------------------------------------------------- */
function runProblem4() {
  // Step 1: Read input
  const inputVal = document.getElementById("p4-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n)) {
    displayOutput("p4-output", "Error: Please enter a valid number for N.", true);
    return;
  }

  // Step 3: Loop from 1 to 10
  let table = `Multiplication Table for ${n}:\n`;
  for (let i = 1; i <= 10; i++) {
    let product = n * i;
    table += `${n} x ${i} = ${product}\n`;
  }

  // Step 4: Display the table
  displayOutput("p4-output", table.trim());
}

function resetProblem4() {
  document.getElementById("p4-n").value = "7";
  clearOutput("p4-output");
}


// ==========================================================================
// LEVEL 2: INTERMEDIATE LOOPING (PROBLEMS 5 - 8)
// ==========================================================================

/* --------------------------------------------------------------------------
   PROBLEM 5: Even Number Sum
   Goal: Sum all even numbers from 1 to N using a condition (if statement).
   -------------------------------------------------------------------------- */
function runProblem5() {
  // Step 1: Read input
  const inputVal = document.getElementById("p5-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n) || n < 1) {
    displayOutput("p5-output", "Error: Please enter an integer N >= 1.", true);
    return;
  }

  // Step 3: Loop from 1 to n and check if even
  let sum = 0;
  let evenNumbers = [];

  for (let i = 1; i <= n; i++) {
    // Condition: check if the number is even using modulo 2
    if (i % 2 === 0) {
      sum = sum + i;
      evenNumbers.push(i);
    }
  }

  // Step 4: Display output
  if (evenNumbers.length === 0) {
    displayOutput("p5-output", `No even numbers found between 1 and ${n}.\nSum = 0`);
  } else {
    let listStr = evenNumbers.join(" + ");
    if (evenNumbers.length > 15) {
      listStr = `${evenNumbers.slice(0, 5).join(" + ")} + ... + ${evenNumbers[evenNumbers.length - 1]}`;
    }
    displayOutput(
      "p5-output",
      `Even numbers found: [${evenNumbers.join(", ")}]\n` +
      `Calculation: ${listStr} = ${sum}\n` +
      `Total Sum of Even Numbers: ${sum}`
    );
  }
}

function resetProblem5() {
  document.getElementById("p5-n").value = "10";
  clearOutput("p5-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 6: Factorial Calculator
   Goal: Calculate N factorial (N!), including special case 0! = 1.
   -------------------------------------------------------------------------- */
function runProblem6() {
  // Step 1: Read input
  const inputVal = document.getElementById("p6-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input (must be non-negative)
  if (isNaN(n) || n < 0) {
    displayOutput("p6-output", "Error: Factorial is only defined for non-negative integers (N >= 0).", true);
    return;
  }

  // Step 3: Handle the special case 0! = 1
  if (n === 0) {
    displayOutput("p6-output", "Special Case:\n0! = 1 (by mathematical definition).");
    return;
  }

  // Guard against JavaScript integer overflow for display
  if (n > 20) {
    displayOutput("p6-output", "Note: For N > 20, numbers exceed JavaScript standard precision. Please enter N <= 20.", true);
    return;
  }

  // Step 4: Calculate factorial using a loop
  let result = 1;
  let steps = [];

  for (let i = 1; i <= n; i++) {
    result = result * i;
    steps.push(i);
  }

  // Step 5: Display output
  const stepString = steps.reverse().join(" x ");
  displayOutput("p6-output", `${n}! = ${stepString} = ${result}`);
}

function resetProblem6() {
  document.getElementById("p6-n").value = "5";
  clearOutput("p6-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 7: Count and Sum of Digits
   Goal: Calculate number of digits and their sum WITHOUT converting to a string.
         Properly handle N = 0.
   -------------------------------------------------------------------------- */
function runProblem7() {
  // Step 1: Read input
  const inputVal = document.getElementById("p7-n").value.trim();
  let n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n)) {
    displayOutput("p7-output", "Error: Please enter a valid integer for N.", true);
    return;
  }

  // Step 3: Arithmetic calculation variables
  let temp = Math.abs(n); // Work with positive value
  let count = 0;
  let sum = 0;
  let extractedDigits = [];

  // Step 4: Handle Special Case: N = 0
  if (temp === 0) {
    count = 1;
    sum = 0;
    extractedDigits.push(0);
  } else {
    // Step 5: Extract digits purely using arithmetic (modulo % and division /)
    while (temp > 0) {
      let digit = temp % 10;            // Extracts the last digit
      sum = sum + digit;                // Accumulate digit sum
      count = count + 1;                // Increment digit count
      extractedDigits.push(digit);      // Keep track of extracted digits for explanation
      temp = Math.floor(temp / 10);     // Remove the last digit
    }
  }

  // Reverse extracted digits to show in original left-to-right order
  extractedDigits.reverse();

  // Step 6: Display the output
  displayOutput(
    "p7-output",
    `Original Number: ${n}\n` +
    `Digits extracted arithmetically: [${extractedDigits.join(", ")}]\n` +
    `Number of Digits: ${count}\n` +
    `Sum of Digits: ${sum} (${extractedDigits.join(" + ")} = ${sum})`
  );
}

function resetProblem7() {
  document.getElementById("p7-n").value = "12345";
  clearOutput("p7-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 8: Prime Number Checker
   Goal: Determine whether N is prime.
         Numbers below 2 must not be prime.
         Check divisors only up to the square root of N.
   -------------------------------------------------------------------------- */
function runProblem8() {
  // Step 1: Read input
  const inputVal = document.getElementById("p8-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n)) {
    displayOutput("p8-output", "Error: Please enter a valid integer.", true);
    return;
  }

  // Step 3: Numbers below 2 are NOT prime by definition
  if (n < 2) {
    displayOutput(
      "p8-output",
      `${n} is NOT a prime number.\nReason: Prime numbers must be greater than or equal to 2.`
    );
    return;
  }

  // Step 4: Check divisors from 2 up to the square root of N
  const sqrtN = Math.floor(Math.sqrt(n));
  let isPrime = true;
  let firstDivisor = null;

  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      isPrime = false;
      firstDivisor = i;
      break; // Stop early because a divisor has been found
    }
  }

  // Step 5: Display the result with explanation
  if (isPrime) {
    displayOutput(
      "p8-output",
      `Result: ${n} is a PRIME NUMBER! ✨\n` +
      `Divisor check: Tested numbers from 2 up to floor(√${n}) = ${sqrtN}.\n` +
      `No divisors were found, so ${n} is prime.`
    );
  } else {
    const pairedDivisor = n / firstDivisor;
    displayOutput(
      "p8-output",
      `Result: ${n} is NOT a prime number (it is a composite number).\n` +
      `Reason: It is divisible by ${firstDivisor} (${firstDivisor} x ${pairedDivisor} = ${n}).`
    );
  }
}

function resetProblem8() {
  document.getElementById("p8-n").value = "29";
  clearOutput("p8-output");
}


// ==========================================================================
// LEVEL 3: NESTED LOOPS (PROBLEMS 9 - 12)
// ==========================================================================

/* --------------------------------------------------------------------------
   PROBLEM 9: Rectangle Star Pattern
   Goal: Generate R rows and C stars per row using nested loops.
   -------------------------------------------------------------------------- */
function runProblem9() {
  // Step 1: Read rows and columns
  const rVal = document.getElementById("p9-r").value.trim();
  const cVal = document.getElementById("p9-c").value.trim();
  const rows = parseInt(rVal, 10);
  const cols = parseInt(cVal, 10);

  // Step 2: Validate inputs
  if (isNaN(rows) || rows < 1 || isNaN(cols) || cols < 1) {
    displayOutput("p9-output", "Error: Rows and Columns must both be positive integers (>= 1).", true);
    return;
  }

  // Step 3: Nested loops to build rectangle
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    let rowStr = "";
    for (let j = 1; j <= cols; j++) {
      rowStr += "* ";
    }
    pattern += rowStr.trimEnd() + "\n";
  }

  // Step 4: Display pattern
  displayOutput("p9-output", pattern.trimEnd());
}

function resetProblem9() {
  document.getElementById("p9-r").value = "4";
  document.getElementById("p9-c").value = "6";
  clearOutput("p9-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 10: Right Triangle Pattern
   Goal: Generate a triangle where row i contains i stars.
   -------------------------------------------------------------------------- */
function runProblem10() {
  // Step 1: Read input
  const inputVal = document.getElementById("p10-rows").value.trim();
  const rows = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(rows) || rows < 1) {
    displayOutput("p10-output", "Error: Number of rows must be a positive integer (>= 1).", true);
    return;
  }

  // Step 3: Nested loop
  // Outer loop: row index i from 1 to rows
  // Inner loop: star index j from 1 to i
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    let rowStr = "";
    for (let j = 1; j <= i; j++) {
      rowStr += "* ";
    }
    pattern += rowStr.trimEnd() + "\n";
  }

  // Step 4: Display pattern
  displayOutput("p10-output", pattern.trimEnd());
}

function resetProblem10() {
  document.getElementById("p10-rows").value = "5";
  clearOutput("p10-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 11: Number Triangle
   Goal: Generate rows containing the numbers from 1 up to the row number.
   -------------------------------------------------------------------------- */
function runProblem11() {
  // Step 1: Read input
  const inputVal = document.getElementById("p11-rows").value.trim();
  const rows = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(rows) || rows < 1) {
    displayOutput("p11-output", "Error: Number of rows must be a positive integer (>= 1).", true);
    return;
  }

  // Step 3: Nested loop
  // Outer loop: row counter i from 1 to rows
  // Inner loop: column counter j from 1 to i
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    let rowStr = "";
    for (let j = 1; j <= i; j++) {
      rowStr += j + " ";
    }
    pattern += rowStr.trimEnd() + "\n";
  }

  // Step 4: Display pattern
  displayOutput("p11-output", pattern.trimEnd());
}

function resetProblem11() {
  document.getElementById("p11-rows").value = "5";
  clearOutput("p11-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 12: Multiplication Grid
   Goal: Create an N by N multiplication table using nested loops.
   -------------------------------------------------------------------------- */
function runProblem12() {
  // Step 1: Read input
  const inputVal = document.getElementById("p12-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n) || n < 1 || n > 20) {
    displayOutput("p12-output", "Error: Please enter a grid dimension between 1 and 20.", true);
    return;
  }

  // Step 3: Nested loops for N x N grid
  let grid = "";

  // Optional: Build a clean header row
  let header = "    ";
  for (let col = 1; col <= n; col++) {
    header += String(col).padStart(4, " ");
  }
  grid += header + "\n" + "    " + "-".repeat(n * 4) + "\n";

  // Nested loops for rows and columns
  for (let i = 1; i <= n; i++) {
    let rowStr = String(i).padStart(2, " ") + " |";
    for (let j = 1; j <= n; j++) {
      let product = i * j;
      rowStr += String(product).padStart(4, " ");
    }
    grid += rowStr + "\n";
  }

  const totalInnerIterations = n * n;
  grid += `\nTotal cells computed: ${n} x ${n} = ${totalInnerIterations} iterations.`;

  // Step 4: Display grid
  displayOutput("p12-output", grid);
}

function resetProblem12() {
  document.getElementById("p12-n").value = "4";
  clearOutput("p12-output");
}


// ==========================================================================
// LEVEL 4: ANALYTICAL AND COMPLEX PROBLEMS (PROBLEMS 13 - 16)
// ==========================================================================

/* --------------------------------------------------------------------------
   PROBLEM 13: Find All Prime Numbers
   Goal: Display all primes from 2 through N using square-root divisor method.
   -------------------------------------------------------------------------- */
function runProblem13() {
  // Step 1: Read input
  const inputVal = document.getElementById("p13-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n) || n < 2) {
    displayOutput("p13-output", "Error: N must be an integer >= 2.", true);
    return;
  }

  // Step 3: Outer loop tests each number from 2 to N
  let primes = [];

  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    let limit = Math.floor(Math.sqrt(num));

    // Inner loop tests divisors up to square root of num
    for (let d = 2; d <= limit; d++) {
      if (num % d === 0) {
        isPrime = false;
        break; // Not prime, exit inner loop
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  // Step 4: Display prime numbers found
  displayOutput(
    "p13-output",
    `Prime numbers between 2 and ${n} (Total: ${primes.length}):\n\n` +
    primes.join(", ")
  );
}

function resetProblem13() {
  document.getElementById("p13-n").value = "30";
  clearOutput("p13-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 14: Pascal’s Triangle
   Goal: Generate first N rows using values from previous row (not hard-coded).
   -------------------------------------------------------------------------- */
function runProblem14() {
  // Step 1: Read input
  const inputVal = document.getElementById("p14-n").value.trim();
  const n = parseInt(inputVal, 10);

  // Step 2: Validate input
  if (isNaN(n) || n < 1 || n > 20) {
    displayOutput("p14-output", "Error: Please enter a row count N between 1 and 20.", true);
    return;
  }

  // Step 3: Build Pascal's triangle row by row
  let triangle = [];

  for (let i = 0; i < n; i++) {
    let currentRow = [];
    for (let j = 0; j <= i; j++) {
      // First and last numbers of any row are always 1
      if (j === 0 || j === i) {
        currentRow.push(1);
      } else {
        // Interior number is sum of two numbers directly above in previous row
        let prevRow = triangle[i - 1];
        let val = prevRow[j - 1] + prevRow[j];
        currentRow.push(val);
      }
    }
    triangle.push(currentRow);
  }

  // Step 4: Format as a centered or readable triangle string
  let output = `Pascal's Triangle (${n} rows):\n\n`;
  for (let i = 0; i < triangle.length; i++) {
    // Add visual indentation for pyramid look
    let padding = "  ".repeat(n - i - 1);
    let rowText = triangle[i].join("   ");
    output += `Row ${i + 1}: ${padding}${rowText}\n`;
  }

  // Step 5: Display output
  displayOutput("p14-output", output);
}

function resetProblem14() {
  document.getElementById("p14-n").value = "5";
  clearOutput("p14-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 15: Find Pairs with a Target Sum
   Goal: Given array [2, 4, 3, 5, 7, 8, 9] and target 10, display each unique
         pair at different indices whose sum equals 10.
   -------------------------------------------------------------------------- */
function runProblem15() {
  // Step 1: Read array and target
  const arrStr = document.getElementById("p15-arr").value.trim();
  const targetVal = document.getElementById("p15-target").value.trim();
  const target = parseInt(targetVal, 10);

  // Step 2: Parse array
  let arr = arrStr.split(",").map(item => parseInt(item.trim(), 10));
  if (arr.some(isNaN) || isNaN(target)) {
    displayOutput("p15-output", "Error: Please enter a valid comma-separated list of numbers and a target integer.", true);
    return;
  }

  // Step 3: Search for unique pairs at different indices (i < j)
  let foundPairs = [];
  let stepsLog = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currentSum = arr[i] + arr[j];
      if (currentSum === target) {
        foundPairs.push({
          num1: arr[i],
          num2: arr[j],
          index1: i,
          index2: j
        });
        stepsLog.push(`Found pair (${arr[i]}, ${arr[j]}) at index [${i}] and [${j}] => ${arr[i]} + ${arr[j]} = ${target}`);
      }
    }
  }

  // Step 4: Display results
  if (foundPairs.length === 0) {
    displayOutput("p15-output", `No pairs found in [${arr.join(", ")}] that sum to ${target}.`);
  } else {
    let resultText = `Target Sum: ${target}\n`;
    resultText += `Input Array: [${arr.join(", ")}]\n`;
    resultText += `Unique Pairs Found (${foundPairs.length}):\n`;
    for (let p of foundPairs) {
      resultText += `  • (${p.num1}, ${p.num2}) at indices [${p.index1}, ${p.index2}]\n`;
    }
    displayOutput("p15-output", resultText.trim());
  }
}

function resetProblem15() {
  document.getElementById("p15-arr").value = "2, 4, 3, 5, 7, 8, 9";
  document.getElementById("p15-target").value = "10";
  clearOutput("p15-output");
}


/* --------------------------------------------------------------------------
   PROBLEM 16: Seating Arrangement Analysis
   Goal: Given 3 rows:
         Row 1: O X O O
         Row 2: X X O O
         Row 3: O O X O
         Count empty and occupied seats, compute occupancy percentage,
         and identify the row with the most occupied seats with clear tie handling.
   -------------------------------------------------------------------------- */
function runProblem16() {
  // Step 1: Read the grid from the textarea
  const gridText = document.getElementById("p16-grid").value.trim();
  const rawRows = gridText.split("\n").filter(line => line.trim().length > 0);

  if (rawRows.length === 0) {
    displayOutput("p16-output", "Error: Seating grid cannot be empty.", true);
    return;
  }

  // Step 2: Parse each row into an array of seats
  let totalEmpty = 0;
  let totalOccupied = 0;
  let rowStatistics = []; // Stores details for each row

  for (let r = 0; r < rawRows.length; r++) {
    // Split on whitespace to get individual seat characters
    let seats = rawRows[r].trim().split(/\s+/);
    let rowEmpty = 0;
    let rowOccupied = 0;

    for (let c = 0; c < seats.length; c++) {
      let seat = seats[c].toUpperCase();
      if (seat === "X") {
        rowOccupied++;
      } else if (seat === "O") {
        rowEmpty++;
      }
    }

    totalEmpty += rowEmpty;
    totalOccupied += rowOccupied;

    rowStatistics.push({
      rowNumber: r + 1,
      seats: seats.join(" "),
      occupied: rowOccupied,
      empty: rowEmpty,
      total: rowOccupied + rowEmpty
    });
  }

  const totalSeats = totalEmpty + totalOccupied;
  if (totalSeats === 0) {
    displayOutput("p16-output", "Error: No valid seats found. Use 'O' for empty and 'X' for occupied.", true);
    return;
  }

  // Step 3: Calculate Occupancy Percentage
  const occupancyPercentage = ((totalOccupied / totalSeats) * 100).toFixed(2);

  // Step 4: Identify row(s) with the most occupied seats
  let maxOccupied = -1;
  for (let r = 0; r < rowStatistics.length; r++) {
    if (rowStatistics[r].occupied > maxOccupied) {
      maxOccupied = rowStatistics[r].occupied;
    }
  }

  // Collect all rows that achieved this maximum (Handles Ties!)
  let topRows = rowStatistics.filter(row => row.occupied === maxOccupied);

  // Step 5: Format the tie-handling explanation and final output
  let tieExplanation = "";
  if (topRows.length === 1) {
    tieExplanation = `Row with Most Occupied Seats: Row ${topRows[0].rowNumber} (${topRows[0].occupied} occupied seats). No tie occurred.`;
  } else {
    let tiedRowNames = topRows.map(r => `Row ${r.rowNumber}`).join(", ");
    tieExplanation = `Tie Detected! The following rows share the highest occupied count (${maxOccupied} occupied seats):\n  -> ${tiedRowNames}.\n` +
      `Tie-Handling Rule: All tied rows are explicitly identified and reported together so no data is omitted.`;
  }

  // Construct comprehensive report
  let report = "=== SEATING ARRANGEMENT ANALYSIS REPORT ===\n\n";
  report += "Row Breakdown:\n";
  for (let stat of rowStatistics) {
    report += `  • Row ${stat.rowNumber} [${stat.seats}]: Occupied = ${stat.occupied}, Empty = ${stat.empty} (Total: ${stat.total})\n`;
  }
  report += "\nOverall Summary:\n";
  report += `  • Total Seats: ${totalSeats}\n`;
  report += `  • Total Occupied Seats (X): ${totalOccupied}\n`;
  report += `  • Total Empty Seats (O): ${totalEmpty}\n`;
  report += `  • Occupancy Percentage: ${occupancyPercentage}%\n\n`;
  report += tieExplanation;

  // Step 6: Display report
  displayOutput("p16-output", report);
}

function resetProblem16() {
  document.getElementById("p16-grid").value = "O X O O\nX X O O\nO O X O";
  clearOutput("p16-output");
}


// ==========================================================================
// AUTOMATIC INITIALIZATION: RUN DEFAULT INPUTS ON PAGE LOAD
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
  // Run all 16 problems with their default inputs so the user immediately
  // sees working results when they open the page!
  runProblem1();
  runProblem2();
  runProblem3();
  runProblem4();
  runProblem5();
  runProblem6();
  runProblem7();
  runProblem8();
  runProblem9();
  runProblem10();
  runProblem11();
  runProblem12();
  runProblem13();
  runProblem14();
  runProblem15();
  runProblem16();
});
