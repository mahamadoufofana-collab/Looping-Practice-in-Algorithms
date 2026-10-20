# Looping Practice in Algorithms

A clean, beginner-friendly web application built for a college algorithm assignment. It demonstrates **16 core algorithmic problems** across 4 levels of difficulty using pure HTML5, CSS3, and Vanilla JavaScript.

---

## 1. Project Files

The project is structured into three clean, separated files:

* [`index.html`](file:///c:/Users/maham/OneDrive/Desktop/Algoritma/index.html): Defines the structure of the website, including the header, introduction, 16 individual problem cards, input fields, output areas, collapsible "How It Works" sections with pseudocode and trace tables, and the Section 6 Theory & Reflection section.
* [`style.css`](file:///c:/Users/maham/OneDrive/Desktop/Algoritma/style.css): Modern, responsive styling with clean fonts, card layouts, status colors (success/error), monospace code blocks, and mobile-friendly responsive breakpoints.
* [`script.js`](file:///c:/Users/maham/OneDrive/Desktop/Algoritma/script.js): Pure Vanilla JavaScript containing all 16 algorithm implementations, friendly input validation, error handling, and reset functions.

---

## 2. How to Open and Run the Website

Because this project relies **strictly on Vanilla JavaScript** with **no backend, no npm build step, and no external dependencies**:

1. Open your File Explorer and navigate to:
   `c:\Users\maham\OneDrive\Desktop\Algoritma\`
2. Double-click the file named **`index.html`** (or right-click &rarr; *Open with* &rarr; *Google Chrome*, *Microsoft Edge*, or *Mozilla Firefox*).
3. The website will immediately load in your browser, running all algorithms locally with default test inputs!

---

## 3. Where Algorithms Are Located in `script.js`

Every algorithm has a dedicated, beginner-friendly function in [`script.js`](file:///c:/Users/maham/OneDrive/Desktop/Algoritma/script.js):

| Level | Problem # & Name | Run Function | Reset Function |
| :--- | :--- | :--- | :--- |
| **Level 1** | 1. Counting Sequence (1 to N) | `runProblem1()` | `resetProblem1()` |
| | 2. Countdown (N down to 1 + "Start!") | `runProblem2()` | `resetProblem2()` |
| | 3. Sum of Numbers (1 to N with accumulator) | `runProblem3()` | `resetProblem3()` |
| | 4. Multiplication Table (N from 1 to 10) | `runProblem4()` | `resetProblem4()` |
| **Level 2** | 5. Even Number Sum (Condition `i % 2 === 0`) | `runProblem5()` | `resetProblem5()` |
| | 6. Factorial Calculator ($N!$, with $0! = 1$) | `runProblem6()` | `resetProblem6()` |
| | 7. Count & Sum of Digits (Pure arithmetic, $N=0$) | `runProblem7()` | `resetProblem7()` |
| | 8. Prime Number Checker (Divisors up to $\sqrt{N}$) | `runProblem8()` | `resetProblem8()` |
| **Level 3** | 9. Rectangle Star Pattern ($R \times C$) | `runProblem9()` | `resetProblem9()` |
| | 10. Right Triangle Pattern ($i$ stars on row $i$) | `runProblem10()` | `resetProblem10()` |
| | 11. Number Triangle (1 up to row number) | `runProblem11()` | `resetProblem11()` |
| | 12. Multiplication Grid ($N \times N$) | `runProblem12()` | `resetProblem12()` |
| **Level 4** | 13. Find All Prime Numbers (2 to N via $\sqrt{N}$) | `runProblem13()` | `resetProblem13()` |
| | 14. Pascal's Triangle (Calculated from previous row) | `runProblem14()` | `resetProblem14()` |
| | 15. Find Pairs with Target Sum (`[2,4,3,5,7,8,9]`, Target 10) | `runProblem15()` | `resetProblem15()` |
| | 16. Seating Arrangement Analysis (3 rows, tie handling) | `runProblem16()` | `resetProblem16()` |

---

## 4. How to Test Each Problem

Each problem card includes:
* **Pre-filled Default Inputs**: Matches the assignment's exact sample inputs.
* **"Run Algorithm" Button**: Executes the algorithm and displays the formatted result.
* **"Reset" Button**: Clears the output and restores the initial sample values.
* **Input Validation**: Try entering negative values, non-numbers, or zero to see friendly error messages.
* **"How It Works" Details**: Click on the dropdown on each card to view the problem objective, English explanation, pseudocode, loop variable roles, and trace tables.

---

## 5. How HTML, CSS, and JavaScript Work Together

1. **HTML (`index.html`)**: Defines the structure of the document — cards, input fields (`<input>`, `<textarea>`), buttons (`<button>`), and output boxes (`<pre>`). Each element has a unique ID (e.g., `p1-n`, `p1-output`).
2. **CSS (`style.css`)**: Controls the layout, typography, colors, borders, and responsive design across laptops, tablets, and phones.
3. **JavaScript (`script.js`)**:
   - Listens to button clicks via `onclick` attributes.
   - Reads inputs using `document.getElementById('pX-n').value`.
   - Validates that values are numbers and within valid ranges.
   - Executes the required `for` or `while` loop calculations.
   - Updates the web page dynamically using `document.getElementById('pX-output').textContent`.

---

## 6. Theory & Reflection Summary (Assignment Section 6)

### A. Why checking divisors up to $\sqrt{N}$ is sufficient (Problem 8)
Any composite number $N$ can be factored into $N = a \times b$.
If both $a > \sqrt{N}$ and $b > \sqrt{N}$, then:
$$a \times b > \sqrt{N} \times \sqrt{N} = N$$
which is mathematically impossible. Therefore, at least one factor **must be $\le \sqrt{N}$**. If no divisor $\le \sqrt{N}$ exists, no divisor $> \sqrt{N}$ can exist either, proving $N$ is prime in $O(\sqrt{N})$ steps instead of $O(N)$.

### B. Iteration Analysis for Problem 12 & $\frac{N(N+1)}{2}$
* For the full $N \times N$ multiplication grid with $N = 4$:
  Outer loop runs 4 times. For each outer turn, inner loop runs 4 times. Total inner iterations = $4 \times 4 = 16$ ($N^2$).
* When considering unique symmetric pairs or a triangular half (where $j \le i$):
  Row 1 = 1 iteration, Row 2 = 2 iterations, Row 3 = 3 iterations, Row 4 = 4 iterations.
  Sum = $1 + 2 + 3 + 4 = 10 = \frac{N(N+1)}{2}$.

### C. Time Complexity: Problem 13 vs Problem 15
* **Problem 13 (All Primes up to N)**: Outer loop runs $N$ times, inner loop tests up to $\sqrt{num}$. Total time is $\sum_{k=2}^N O(\sqrt{k}) \approx O(N \sqrt{N}) = O(N^{1.5})$.
* **Problem 15 (Target Sum Pairs in Array of size M)**: Two nested loops scanning all pairs with $i < j$. Number of comparisons is $\frac{M(M-1)}{2} = O(M^2)$.
