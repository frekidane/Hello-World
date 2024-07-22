class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function binarySearch(studentList, targetId) {
    let left = 0;
    let right = studentList.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (studentList[mid].id === targetId) {
            return studentList[mid];
        } else if (studentList[mid].id < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

let students = [
    new Student(1443, "Fre"),
    new Student(9977, "Afomya"),
    new Student(1638, "Seble"),
    new Student(1447, "Haylish"),
    new Student(1412, "Betty")
];

let targetId = 1638;
let resultStudent = binarySearch(students, targetId);

if (resultStudent) {
    console.log(`Student found: ${resultStudent.name}`);
} else {
    console.log("Student not found.");
}
