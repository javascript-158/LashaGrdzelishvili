// 1) მასისვის შემოჭმებელი

let fruit = ['apple', 'orange', 'kiwi'];
let arrayChecker = Array.isArray(fruit);
console.log(arrayChecker);


// 2)მასვიის პირველი ელემენის გამომტანი

console.log(fruit[0]);

// 3.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის ბოლო ელემენტს.

let lastElement = fruit.length
console.log(fruit[lastElement-1]);


// 4)

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th","st","nd","rd"]

console.log("1" + o[1] + " choice is " + color[0] + '.');

console.log("2" + o[2] + " choice is " + color[1] + '.');

console.log("3" + o[3] + " choice is " + color[2] + '.');


// 5)

let student = {
    firstName: "mate",
    lastName: "gotua",
    age: 30,
    courses: ["java", "phyton", "html"],
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"
    },
};

student.scoure = 100


delete student.address;

student.age = 28

console.log(student);

