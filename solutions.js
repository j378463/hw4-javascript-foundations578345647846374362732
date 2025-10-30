// Exercise 1: Formatting and Naming (Code Correction)
let thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
    // code block
}
console.log("Exercise 1 complete");

// Exercise 2: Defining Core Data Types
let greetingMessage = `Hello, World!`;
let piValue = 3.14;
let isActive = true;
console.log(greetingMessage, piValue, isActive);

// Exercise 3: Single-Line Comments
let currentScore = 95; // Stores the player's current score in the game
console.log(currentScore);

// Exercise 4: Equality Comparison
console.log('100' == 100);  // true (value equality, type coercion)
console.log('100' === 100); // false (strict equality, no type coercion)

// Exercise 5: Ternary Operator
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

// Exercise 6: If/Else Structure
let userAge = 16;
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}

// Exercise 8: For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 9: Loop Control
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 7) {
        break;
    }
}

// Exercise 10: Ensuring Execution
let counter = 10;
do {
    console.log("Running once");
} while (counter < 10);

// Exercise 11: Function Definition
function calculateArea(width, height) {
    return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea); // 50

// Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');           // Add to end
fruitList.shift();                 // Remove first item
console.log(fruitList.indexOf('Banana')); // Logs 0

// Exercise 13: Array Copying
let originalData = [1, 2, 3, { name: "test" }];
let clonedData = originalData.slice();
// slice() creates a **shallow copy** of the array.
// Be aware: nested objects are copied by reference, not deeply cloned.
// Modifying clonedData[3].name will also change originalData[3].name
console.log(clonedData);

// Exercise 14: Object Constructor
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log(animalArray);