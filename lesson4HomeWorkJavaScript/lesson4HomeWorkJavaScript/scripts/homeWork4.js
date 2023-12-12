// 1)

let arrayOfNums = [15, 18, 19, 24, 19, 55, 61, 111, 88, 41];

for (let num = 0; num < arrayOfNums.length; num++){
    if((num+1) % 3 == 0){
        console.log(arrayOfNums[num]);
    };
}


// 2)

let tenToOne = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < tenToOne.length; i++){
    console.log(tenToOne[i]);

}


// 3)

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']


for(let name = names.length-1; name >= 0; name--){
    if(names[name]==='Bob'){
        names.splice(name,1)
    }
}

console.log(names);

const newArr = names.filter(object => {
    return object !== 'Bob';
  });

  console.log(newArr);



// 4)

function numberPower(number, power){
    resullt = number**power
    console.log(resullt);
}

numberPower(2,4);

// 5)


const newArray = Array.from({length: 100}, (_, i) => i + 1)

function FizzBuzz(array) {
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
  
      if (number % 3 === 0 && number % 5 === 0) {
        console.log(`${number} FizzBuzz`);
      } else if (number % 3 === 0) {
        console.log(`${number} Fizz`);
      } else if (number % 5 === 0) {
        console.log(`${number} Buzz`);
      } else {
        console.log(number);
      }
    }
  }

  FizzBuzz(newArray);

//   6)

function factorialCalculator(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialCalculator(n - 1);
    }
  }
console.log(factorialCalculator(5));

// 7)
let word = ""

function upperCase(word){
   return word[0].toUpperCase() + word.substring(1);;
}

console.log(upperCase("javascript"));


// 8

function blankStringChecker(testString){
    if (typeof testString !== 'string' || testString.length === 0) {
        return 'this string is blank'; 
      }else{
        return "this string is not blank";
      }
}

console.log(blankStringChecker("llll"));


