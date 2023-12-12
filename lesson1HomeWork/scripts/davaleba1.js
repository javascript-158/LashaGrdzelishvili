let userName = prompt("შეიყვანეთ სახელი");

let userLastName = prompt("შეიყვანეთ გვარი");

let userAge = prompt("შეიყვანეთ დაბადების წელი");

let userAddress = prompt("შეიყვანეთ საცხოვრებელი ადგილი");


let currentYear = new Date().getFullYear();

Age = currentYear - userAge;



alert("გამარჯობა " + userName + " " + userLastName + " მიხარია რომ უკვე " + Age + " წლის ხარ და " + userAddress + " აქ ცხოვრობ");

