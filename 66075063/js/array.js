// List / Array
let list = [1, 2, 3, 4, 5];
console.log("Original list:", list);

// Add an element
list.push(6);
console.log("After adding an element:", list);

// Remove an element
list.splice(2, 1); // Removes the element at index 2
console.log("After removing an element:", list);

// Modify an element
list[0] = 10;
console.log("After modifying an element:", list);

// Dictionary / Object
let student = {
  name: "Tom",
  age: 20,
  grade: "A",
};
console.log("Student object:", student);

// Modify the object
student.age = 21;
student.grade = "A+";
console.log("Modified student object:", student);

// Tuple (using an array to simulate a tuple)
const tuple = [1, "hello", true];
console.log("Tuple:", tuple);

// Set
let set = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("Set with unique values:", set);
