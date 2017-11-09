'use strict'
console.log('Ex 52 Solution');
/*
     Write the function sortStudentsByName(students)
*/ 


/*  // Create a students array
     Read student names until “quit” is entered and populate the
        students array with student objects*/
function getStudents() {
    var input = prompt('Please enter youre name');
    var students = [];
    // var student = {};
    while (input !== 'quit') {
        var student = {};
        student.name = input;
        student.grade1 = +prompt('Please enter grade 1: ');
        student.grade2 = +prompt('Please enter grade 2: ');
        student.grade3 = +prompt('Please enter grade 3: ');
        students.push(student);
        input = prompt('Please enter youre name');
    }
    return students;
}
var students = getStudents();
console.log('expected arr of students obj: ', students);

/*   Read 3 grades for each student
     Calc avg for each student*/
function getAvrages(inputs) {
    var avgOfInputs = []
    for (var i = 0; i < inputs.length; i++) { 
        var avgOfInput = [(inputs[i].grade1 + inputs[i].grade2 + inputs[i].grade3) / 3]
        // console.log('expected av of input i: ', avgOfInput);
        avgOfInputs.push(avgOfInput);
        // console.log('expected arr of avrages: ', avgOfInputs);
    }
    return avgOfInputs;
}
var studentsAvrages = getAvrages(students);
// console.log('expected avg of each student in a new arr: ', studentsAvrages);      

//   Write the function findWorstStudent(students)
function findWorstStudent(inputs) {
    var worstAvgCount = Infinity;
    for (var i = 0; i < inputs.length; i++){ 
        var avgOfInput = [(inputs[i].grade1 + inputs[i].grade2 + inputs[i].grade3) / 3]
        // console.log('expected av of input i: ', avgOfInput);
        if (avgOfInput < worstAvgCount) {
            worstAvgCount = avgOfInput
            var worstAvrage = inputs[i];
        }
    }
    return worstAvrage;
}
var worstStudent = findWorstStudent(students);
// console.log('expected worst student: ', worstStudent);

//   Write the function sortStudentsByGrade(students)
function sortStudentsByGrade(inputs) {
    var sortByGrads = [];
    // var gradeSum = Infinity;
    for (var i = 0; i < inputs.length; i++) { 
        var gradeCal = inputs[i].grade1 + inputs[i].grade2 + inputs[i].grade3
        // console.log('expected sum of grades in idx: ', gradeCal);
        sortByGrads.push(gradeCal);
    }
    sortByGrads.sort()
    return sortByGrads;
}
console.log('sorted arr of students: ', sortStudentsByGrade(students));

console.log('DONE!')