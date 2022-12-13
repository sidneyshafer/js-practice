var dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
};

dog.name;
// 'Pancake'
dog.age = 6;
// 6
dog;
// {name: 'Pancake', legs: 4, isAwesome: true, age: 6}

// Adding methods to objects
// You can save a function as a property to an object, which is called a method
// using dot notation:
dog.bark = function () {
    // this.name retfers to the dog object and retrieves the value assigned to the name property --> this.name = dog.name
    console.log("Woof woof! My name is " + this.name + "!");
};

dog.bark();
// Woof woof! My name is Pancake!

// Sharing a method between multiple objects
var speak = function () {
    console.log(this.sound + "! My name is " + this.name + "!");
};

var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};

cat.speak();
// Miaow! My name is Mittens!

var pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
};

var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
};

pig.speak();
// Oink! My name is Charlie!

horse.speak();
// Neigh! My name is Marie!
