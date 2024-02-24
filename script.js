// Define the Person class in one file
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Import the Person class in another file
// If you're using modules, ensure proper import/export syntax
// Example: import { Person } from './person.js';

// Define the Employee class in the same file where Person is imported or defined
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Test the classes
const alice = new Person("Alice", 25);
alice.greet(); // Output: Hello, my name is Alice, I am 25 years old.

const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
