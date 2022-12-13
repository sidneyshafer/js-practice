// if and else if statements
/*
if (condition1) {
    console.log("Do this if condition 1 is true");
} else if (condition2) {
    console.log("Do this if condition 2 is true");
} else {
    console.log("Do this otherwise.")
}
*/
var lemonChicken = false;
var beefWithBlackBeans = true;
var sweetAndSourPork = true;

if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBeans) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("Ok, I'll have the pork.");
} else {
    console.log("Well, I guess I'll have rice then.")
}

// while loops
/*
i= 0
while (condition) {
    console.log("Do something");
    i++
}
*/
var sheepCounted = 0;
while (sheepCounted < 10) {
    console.log("I have " + sheepCounted + " sheep!");
    sheepCounted++;
}
console.log("Zzzzzzzzz");

// for loops
/* 
for (setup; condition; increment) {
    console.log("Do something");
} 
*/
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have " + sheepCounted + " sheep!")
}
console.log("Zzzzzzzzz");

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    console.log("Hello!")
}

var animals = ["Lion", "Flamingo", "Polar Bear", "Hippo"];
for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".");
}

var name = "Sidney";
for (var i = 0; i < name.length; i++) {
    console.log("My name contains the letter " + name[i] + ".")
}

// Print powers of 2 below 10,000:
for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}

// Print powers of 3 below 10,000
for (var i = 3; i < 10000; i *= 3) {
    console.log(i)
}

var animals = ["Cat", "Fish", "Lemur", "Dragon"];
console.log(animals)
for (var i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i]
};
console.log(animals)
