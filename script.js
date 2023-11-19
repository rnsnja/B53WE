// scope chaining

if (true) {
  let outScope = 25;
  // console.log(inscope); // not accesible
  if (true) {
    let inscope = 30;
    console.log(outScope);
    console.log(inscope);
  }
}
//{

let value = 20;
function valueByTwo() {
  console.log(value * 2);
}
valueByTwo();

//}
// shadow property scoping
if (true) {
  const shadow = "sanjay";
  if (true) {
    const shadow = "Ashok";
    console.log("Inner Shadow", shadow);
  }
  console.log("Outer Shadow", shadow);
}

// spread operators

let Batch53Stud = ["Ashish", "Aswin", "Jinu", "Subash", "Cholan"];
let Batch54Stud = ["Sanjay", "pradeep", "subbu", "ashik ", "arul"];
console.log(Batch53Stud);
console.log(Batch54Stud);
let allStudents = ["prashanth", ...Batch53Stud, ...Batch54Stud];
console.log(allStudents);

// rest operator
function takeArguments(arg1, arg2, ...restvalues) {
  console.log(arg1);
  console.log(arg2);
  console.log(restvalues);
}
takeArguments(2, 5, 7, 8, 9, 10, 15);

// array & object destructure
const studentsArr = ["Ashish", "Aswin", "Jinu", "Subash", "Cholan"];
console.log(studentsArr);

const [student1, student2, , ...restofStudents] = studentsArr;
console.log(student1);
console.log(student2);
console.log(restofStudents);

// destucturing nested array
const nestedArray = [1, 2, 3, [5, 10], 4, 6];
const [, , , [value5, value10]] = nestedArray;
console.log(value5);
console.log(value10);

const studObj = {
  firstName: "sanjay",
  lastName: "guvi",
  designation: "FSD-Mentor",
  type: "online",
  companyAddr: {
    state: "TamilNadu",
    country: "India",
  },
};
console.log(studObj.companyAddr.state);
console.log(studObj.firstName);

const {
  designation,
  lastName,
  firstName: mentorName,
  companyAddr: { state, country: nationalName },
} = studObj;

console.log(designation);
console.log(lastName);
console.log(mentorName);
console.log(state);
console.log(nationalName);
// Object property shorthand,

const studName = "sanjay";
const studage = 26;

const sampleStudentObj = {
  // short hand property
  studName,
  studAge: studage,
};

console.log(sampleStudentObj);
