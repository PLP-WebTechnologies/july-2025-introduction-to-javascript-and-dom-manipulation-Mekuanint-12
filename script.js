// Part 1: Mastering JavaScript Basics
// Variable declaration and conditionals
const outputDiv = document.getElementById('output');
const submitBtn = document.getElementById('submitBtn');
const userInput = document.getElementById('userInput');

submitBtn.addEventListener('click', () => {
    const inputValue = userInput.value;
    
    // Condition to check input
    if (inputValue) {
        outputDiv.textContent = `You entered: ${inputValue}`;
    } else {
        outputDiv.textContent = "Please enter something.";
    }
});

// Part 2: JavaScript Functions -- The Heart of Reusability
// Function to calculate the square of a number
function square(num) {
    return num * num;
}

// Function to format a string
function formatString(str) {
    return str.trim().toUpperCase();
}

// Example usage
console.log(square(5)); // Outputs: 25
console.log(formatString(" hello ")); // Outputs: "HELLO"

// Part 3: JavaScript Loops -- Embrace the Power of Repetition!
// Using for loop to generate numbers
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log(numbers); // Outputs: [1, 2, 3, 4, 5]

// Using forEach to iterate through an array
numbers.forEach(num => {
    console.log(`Number: ${num}`);
});

// Part 4: Mastering the DOM with JavaScript
// Function to change the output text
function changeOutput(text) {
    outputDiv.textContent = text;
}

// Example of DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    changeOutput("Welcome to the JavaScript Fundamentals Assignment!");
});
