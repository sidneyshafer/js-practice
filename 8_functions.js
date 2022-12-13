// Functions

/* BASIC SYNTAX:
function () {
    console.log("Do something");
};
*/
var firstFunction = function () {
    console.log("Hello World!");
};
// Call function
firstFunction()

/* FUNCTION WITH ONE ARGUMENT
function (argument) {
    console.log("My argument was: " + argument);
} ;
*/
var sayHelloTo = function(name) {
    console.log("Hello " + name + "!");
};

sayHelloTo("Sidney")

// Draw cats
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(6);

/* PASSING MULTIPLE ARGUMENTS
function (argument1, argument2) {
    console.log("My first argument was: " + argument);
    console.log("My second argument was: " + argument);
};
*/

var printMultipleTimes = function(howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
printMultipleTimes(5, "^_^");
printMultipleTimes(3, "(>_<)");

// RETURNING VALUES FROM FUNCTIONS
var double = function (number) {
    return number * 2;
};
console.log(double(3));
double(3) + double(5);
console.log(double(double(3)))

// INSULT GENERATOR
generateRandomInsult = function() {
    var randomWords = [
        "Planet", 
        "Worm", 
        "Flower", 
        "Computer", 
        "Fly", 
        "Marmot", 
        "Stick", 
        "Monkey", 
        "Rat"
    ];
    var randomBodyParts = ["Face", "Nose", "Hair", "Eye", "Tongue"];
    var randomAdjectives = ["Smelly", "Boring", "Tired", "Fast", "Sluggish", "Poopy", "Stupid", "Loud"];

    var pickRandomWord = function(words) {
        return words[Math.floor(Math.random() * words.length)];
    };

    // Join random strings together
    var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";

    return randomString;
};

console.log(generateRandomInsult())

// Leaving funcion early with return statement
// return statement leaves function immediatly
var fifthLetter = function(name) {
    if (name.length < 5) {
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
};
console.log(fifthLetter("Sidney"));
console.log(fifthLetter("Sid"));

// Using return instead of if..else
var medalForScore = function(score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold";
};
console.log(medalForScore(2));
console.log(medalForScore(8));

// LONGHAND FUNCTION
// *** Function expression
var double = function(number) {
    return number * 2;
};
// SHORTHAND FUNCTION
// *** Function declaration
function double(number) {
    return number * 2;
};

// PROGRAMMING CHALLENGES
function sum(num1, num2) {
    return num1 + num2;
};
function multiply(num1, num2) {
    return num1 * num2;
};
console.log(sum(multiply(36325, 9824),777));

// Comparing Arrays
arrayOfNumbers1 = [1,2,3];
arrayOfNumbers2 = [1,2,3];
arrayOfNumbers3 = [4,5,6,7];
arrayOfNumbers4 = [4,5,6];
function areArraysSame(a1, a2) {
    if (a1.length != a2.length) {
        return false;
    }
    for (i = 0; i < a1.length; i++){
        for (i = 0; i < a2.length; i++) {
            if (a1[i] === a2[i]) {
                return true;
            }
        }
    }
    return false;
};
console.log(areArraysSame(arrayOfNumbers1, arrayOfNumbers2));
console.log(areArraysSame(arrayOfNumbers2, arrayOfNumbers3));
console.log(areArraysSame(arrayOfNumbers1, arrayOfNumbers4));