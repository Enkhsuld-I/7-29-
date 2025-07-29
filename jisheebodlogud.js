let students = [
  {
    name: "boldo",
    age: 17,
    grade: 11,
    gender: "male",
    balance: 15000,
  },
  {
    name: "dorjoo",
    age: 18,
    grade: 11,
    gender: "male",
    balance: 3000,
  },
  {
    name: "bat",
    age: 16,
    grade: 11,
    gender: "male",
    balance: 20000,
  },
  {
    name: "tsetsgee",
    age: 17,
    grade: 11,
    gender: "female",
    balance: 7500,
  },
  {
    name: "jimsee",
    age: 20,
    grade: 11,
    gender: "female",
    balance: 50000,
  },
];

//bodlogo1
const findAdult = (students) => {
  let filtered = students.filter((student) => {
    if (student.age > 17) {
      return student;
    }
  });
  return filtered;
};
let result1 = findAdult(students);
console.log("bodlogo1--->", result1);

//bodlogo2
const findbygender = (students, target) => {
  let filtered = students.filter((student) => {
    if (student.gender === target) {
      return student;
    }
  });
  return filtered;
};
let result2 = findbygender(students, "female");
console.log("bodlogo2--->", result2);

//bodlogo3
const sortbyage = (students) => {
  let sorted = students.sort((student2, student1) => {
    return student2.age - student1.age;
  });
  return sorted;
};
let result3 = sortbyage(students);
console.log("bodlogo3--->", students);

//bodlogo4
const findbybalance = (students) => {
  let filtered = students.filter((student) => {
    if (student.balance > 10000) {
      return student;
    }
  });
  return filtered;
};
let result4 = findbybalance(students);
console.log("bodlogo4", result4);

//bodlogo5
const addClassCodeToStudents = (students, classcode) => {
  let mapped = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      gender: student.gender,
      balance: student.balance,
      classcode,
    };
  });
  return mapped;
};
let result5 = addClassCodeToStudents(students, "3A");
console.log("bodlogo5---->", result5);
