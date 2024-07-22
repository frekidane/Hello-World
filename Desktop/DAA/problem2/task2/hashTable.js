class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function findStudentById(students, targetId) {
    let studentMap = {};

    // Populate the hashtable
    for (let student of students) {
        studentMap[student.id] = student;
    }

    // Check if targetId exists in the hashtable
    if (studentMap[targetId]) {
        return studentMap[targetId];
    } else {
        return null; // Student with the given ID not found
    }
}

// Example usage:
let students = [
    new Student(101, "Alice"),
    new Student(204, "Bob"),
    new Student(307, "Charlie"),
    new Student(409, "David"),
    new Student(512, "Eve")
];

let targetId = 307;
let resultStudent = findStudentById(students, targetId);

if (resultStudent) {
    console.log(`Student found: ${resultStudent.name}`);
} else {
    console.log("Student not found.");
}
