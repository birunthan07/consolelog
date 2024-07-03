// question1
function fullname(fristname, lastname) {
    return fristname + " " + lastname;
}
console.log(fullname("uthayakumar", "biranavan"));

// question 2

var question2 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(question2);

// question3
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// question 4
var question4 = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool"

console.log(question4.length);


// question5

const now = new Date();

const currentYear = now.getFullYear();
console.log(` year  ${2024}.`);

const currentMonth = now.getMonth() + 1;
console.log(` month  ${0 - 6}.`);

const currentDate = now.getDate();
console.log(`weekday {friday}.`);

const currentDay = now.getDay();
console.log(`date ${14}.`);


// question 10
const numbers = [1, 2, 3, 4, 5, 6, 7];
const even = numbers.filter(isEven);
function isEven(value) {
    return value % 2 === 0;
}
console.log(even);

// question 11
let number = [1, 2, 3, 4, 5];
let squares = number.map(function (num) {
    return num * num;
});

console.log(squares);

// question9
function checkDrivingEligibility(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age >= 18) {
        console.log(`You are ${age}. You are old enough to drive`);
    } else {
        const yearsToWait = 18 - age;
        console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
    }
}











// question 8
function calculateWeeklyEarnings(hours, ratePerHour) {
    return hours * ratePerHour;
}
let hours = prompt("Enter hours:");

let ratePerHour = prompt("Enter rate per hour:")

let weeklyEarnings = calculateWeeklyEarnings(hours, ratePerHour);
alert("Your weekly earning is " + weeklyEarnings);


// question12
const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        pages: 336,
        publication_year: 1925,
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328,
        publication_year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        pages: 432,
        publication_year: 1813,
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        pages: 180,
        publication_year: 1925,
    },
];

// filter
const filterbooksbypage = books.filter((books) => {
    return books.pages > 100;
});
console.log(filterbooksbypage);

const filterbooksbypages = books.filter((books) => {
    return books.pages < 200;
});
console.log(filterbooksbypages);

const filterbookbypage = books.filter((books) => {
    return books.genre === 'fiction';
});
console.log(filterbookbypage);


// map
const titles = books.map((books) => {
    return books.title;
});
console.log(titles);

const authors = books.map((books) => {
    return books.authors;
});
console.log(authors);


// reduce
const totalnumberbypublicationyear = books.reduce((result, books) => {
    if (typeof result[books.publication_year] === "undefined") {
        result[books.publication_year] = 1;
    } else {
        result[books.publication_year] += 1;
    }
    return result;
}, {});
console.log(totalnumberbypublicationyear);



let x = 8;
let y = 9;
console.log(x == 8 | y == 3);


// question 13
const greets = name => {
    return `Welcome ${name} to the team.`;
};

console.log(greets('biranaav'));  // "Welcome biranaav to the team."
console.log(greets('paaki')); // "Welcome paaki to the team."

//   question 14
const litres = time => {
    return Math.floor(time * 0.5);
};

console.log(litres(0)); // 0
console.log(litres(2)); // 1
console.log(litres(1.4)); // 0



//  question 15
const positiveSum = arr => {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
};

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0

//   part 2
// question 1
//   const num = -1;

// if (num > 0) {
//     console.log("Given number is positive.");
// } else  (num < 0){
//     console.log("Given number is negative.");
// };

// question 2

let num1 = 15;

if (num1 % 2 === 0) {
    console.log("Given number is even number.");
}

if (num1 % 2 !== 0) {
    console.log("Given number is odd number.");
};


// question 3
const greaterNumber = (a, b) => a > b ? a : b;

console.log(greaterNumber(10, 20)); // 20
console.log(greaterNumber(30, 15)); // 30
console.log(greaterNumber(5, 5));   // 5

// question 4
function calculateticketprice(age) {
    if (age <= 12) {
        return 5;
    }
    else if (age <= 18) {
        return 10;
    }
    else if (age <= 60) {
        return 20;
    }
    else (age > 60);{
        return 15;
    };
}
console.log(calculateticketprice(10)); // 5
console.log(calculateticketprice(15)); // 10

// question 5
let year=2029;
let isLeap = isLeapYear(year);
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
};
  
console.log(`The year ${year} is ${isLeap ? '' : 'not '}a leap year.`);

// question 6

function calculateFinalPrice(amount) {
    let discount = calculateDiscount(amount);
    return amount - discount;
}
function calculateDiscount(amount) {
    if (amount >= 100) {
        return 20;
    } else if (amount >= 50) {
        return 10;
    } else {
        return 0;
    }
}
let purchaseAmount = 160;
let discount = calculateDiscount(purchaseAmount);
let finalPrice = calculateFinalPrice(purchaseAmount);

console.log(`The purchase amount is $${purchaseAmount}`);
console.log(`The discount is $${discount}`);
console.log(`The final price after discount is $${finalPrice}`);

// question 7
function greetUser() {
   
    var now = new Date();
    var currentHour = now.getHours();

 
    var greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
   
    console.log(greeting + "!");
}

greetUser();


// question 8

// let secretNumber = Math.floor(Math.random() * 100) + 1;

// function guessNumber() {
//     let userGuess = parseInt(prompt("Guess the secret number between 1 and 100:"));

 
//     if (userGuess > secretNumber) {
//         alert("Too high! Try again.");
//     } else if (userGuess < secretNumber) {
//         alert("Too low! Try again.");
//     } else if (userGuess === secretNumber) {
//         alert("Congratulations! You guessed the correct number.");
//         return;
//     } else {
//         alert("Please enter a valid number.");
//     }

  
//     guessNumber();
// }

// guessNumber();




// part3
// question1


for (let i = 0; i <= 5; i++) {
    console.log(i);
}


// question 2
let sum = 0;

for (let i = 0; i <= 99; i++) {
    sum += i;
}

console.log("Sum of numbers from 0 to 99:", sum);

// question 3

function getGreaterNumber(a, b) {
    return (a > b) ? a : b;
}


let num7 = 5;
let num8 = 10;

let greatersNumber = getGreaterNumber(num7, num8);
console.log("The greater number is:", greaterNumber);





