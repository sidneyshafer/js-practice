// CREATING OBJECTS
// Object keys can be created with or wihout quotes
var cat = {
    legs: 3,
    name: "Harmony",
    color: "Purple",
    "full name": "Harmony Snuggly-Pants Morgan"
};

/* ACCESSING VALUES
Using Quotes: */
cat['color'];
// 'Purple'
cat["full name"];
// 'Harmony Snuggly-Pants Morgan'

// DOT NOTATION
cat.name;
// 'Harmony'

Object.keys(cat);
// (4) ['legs', 'name', 'color', 'full name']
Object.keys(dog);
// (4) ['name', 'age', 'color', 'bark']

// ADDING VALUES TO OBJECTS USING QUOTES
var pig = {};

pig["legs"] = 4;
pig["name"] = "Piggy";
pig["age"] = 10;
pig["color"] = "Pink";
pig;
//{legs: 4, name: 'Piggy', age: 10, color: 'Pink'}

// ADDING VALUES TO OBJECTS USING DOT NOTATION
var rabbit = {};

rabbit.name = "Bob";
rabbit.age = 32;
rabbit.job = "Lawn Specialist";
rabbit.isAwesome = true;

rabbit;
// {name: 'Bob', age: 32, job: 'Lawn Specialist', isAwesome: true}

// COMBINING ARRAYS AND OBJECTS
var dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
];

dinosaurs[0];
// {name: 'Tyrannosaurus Rex', period: 'Late Cretaceous'}
dinosaurs[0]['name'];
// 'Tyrannosaurus Rex'
dinosaurs[2].name;
// 'Plateosaurus'

var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "rave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];

friends[0];
// {name: 'Anna', age: 11, luckyNumbers: Array(4)}
friends[1];
// {name: 'Dave', age: 5, luckyNumbers: Array(3)}
friends[0].name;
// 'Anna'
friends[2].luckyNumbers;
// (3) [1, 2, 3]
friends[0].luckyNumbers[2];
// 8

// EXERCISE: KEEPING TRACK OF OWED MONEY
var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;

owedMoney.Jimmy
// 5
owedMoney.Jimmy += 3;
// 8
owedMoney;
// {Jimmy: 8, Anna: 7}

// STORING INFORMATION - NESTED OBJECTS AND LISTS
var movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        format: "Blue-ray"
    }
};

var findingNemo = movies['Finding Nemo'];

findingNemo.duration;
// 100
findingNemo.actors;
// (3) ['Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould']
findingNemo.actors[1];
// 'Ellen DeGeneres'

var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blue-ray"
};

movies["Cars"] = cars;
// {releaseDate: 2006, duration: 117, actors: Array(3), format: 'Blue-ray'}

Object.keys(movies)
// (4) ['Finding Nemo', 'Star Wars: Episode VI - Return of the Jedi', 'Harry Potter and the Goblet of Fire', 'Cars']

// Get number 123 from object
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

myCrazyObject["some array"][2].number;
// 123