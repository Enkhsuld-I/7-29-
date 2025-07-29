//map methods
//array-iig uurig n uurchluhgui
//map neg function avna, tuhain function bas neg utga avna
//map method shine array uusgej ugnu, shine array n huuchin arraytai adil length-tei bn
//yamar array uusgehee mapiin return-eer shiidne
let ages = [10, 203, 40, 30, 50];
ages.map((a) => {
  console.log(a);
});

let students = [
  {
    name: "boldo",
    age: 17,
    grade: 11,
    gender: "male",
  },
  {
    name: "dorjoo",
    age: 18,
    grade: 11,
    gender: "male",
  },
  {
    name: "bat",
    age: 16,
    grade: 11,
    gender: "male",
  },
  {
    name: "tsetsgee",
    age: 17,
    grade: 11,
    gender: "female",
  },
];
console.log("======MAP======");
let NewStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age + 1,
    grade: student.grade + 1,
  };
});
console.log(NewStudents);

//FILTER
