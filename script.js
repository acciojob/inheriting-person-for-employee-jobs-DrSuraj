// Define the Person class
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet
    greet() {
        const message = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
        displayMessage(message);
    }
}

// Define the Employee class, inheriting from Person
export class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the constructor of the parent class (Person)
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method to greet including job title
    jobGreet() {
        const message = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
        displayMessage(message);
    }
}

// Function to display messages on the webpage
function displayMessage(message) {
    const outputDiv = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    outputDiv.appendChild(paragraph);
}

// Example test case
// Creating an instance of Person
const alice = new Person("Alice", 25);
// Calling greet method of Person
alice.greet();

// Creating an instance of Employee
const bob = new Employee("Bob", 30, "Manager");
// Calling jobGreet method of Employee
bob.jobGreet();
