// Sample JSON data as a string
let jsonData = '{"name": "Tom", "age": 20, "grade": "A"}';

// Read JSON data (parse JSON string to JavaScript object)
let student = JSON.parse(jsonData);
console.log("Parsed JSON object:", student);

// Modify the object
student.age = 21;
student.grade = "A+";

// Write JSON data (convert JavaScript object to JSON string)
let updatedJsonData = JSON.stringify(student);
console.log("Updated JSON string:", updatedJsonData);
