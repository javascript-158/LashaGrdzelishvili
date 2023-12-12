// 1) კვადრატული ფუნქცია



function times2(num) {
    let result = num * num;
    console.log(result);
}

times2(3);

// 2)  celsius to fahrenheit

function celsiusToFahrenheit(celsius) {
    let result = (celsius * 9) / 5 + 32
    console.log(result);
}

celsiusToFahrenheit(1);


// 3)



function checker(checkNum, start, finish) {
    let arr = Array.from({length: finish}, (_, a) => a + start);
    // am length სინტაქსი ინტერნეტში ვნახე თუ იქნება მერე საშვალება დეტალურად რომ გავიაროთ

    if (arr.includes(checkNum)){
        console.log('your number is in array')
    } else {
        console.log('your number is not in array')
    }

}

checker(6, 2, 15);


// 4)

function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' წეკი ნაკიანი წელია');
    } else {
        console.log(year + ' წელი არ არის ნაკიანი');
    }
}


checkLeapYear(2024);


// 5

vegetables = "Carrot";

switch(vegetables){
    case "Carrot":
        alert("hello")
        break;
   case "Brocoli":
    alert("welcome")
    break;
   default:
    alert("Neither");

}

