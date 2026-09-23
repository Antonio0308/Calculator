# Calculator

A web-based calculator built as part of The Odin Project Foundations curriculum. The main objective of this project is to strengthen core HTML, CSS, and JavaScript skills by creating a functional, interactive application that handles complex state logic.

## 🚀 Features

- Basic Arithmetic Operations: Support for addition, subtraction, multiplication, and division.

- Pair-wise Calculation Logic: Evaluates calculations sequentially in pairs upon pressing operator keys (updating the display and intermediate results step-by-step).

- Division by Zero Handling: Gracefully handles division by zero with a dedicated error message.

- Reset Functionality: A clear/reset button to restore the display and reset internal calculator states.

- Operator Memory: Retains the last selected operator to allow seamless chain operations.

## 🛠️ Built With

- HTML5: Semantic layout for calculator structure and buttons.

- CSS3: Layout styling, alignment, and button formatting.

- JavaScript (ES6+):
  - Event listeners for dynamic user input capture.

  - Mathematical calculation logic and state management.

  - DOM manipulation for live display updates.

## 🧠 Key Learnings & Challenges

Focus was placed on implementing robust application logic and edge-case management:

- Enforcing operational constraints (restricting calculations to pair-wise operations).

- Handling division by zero without breaking the state.

- Decoupling DOM event handling from pure calculation helper functions (add, subtract, multiply, divide).
