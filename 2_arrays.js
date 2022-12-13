var dinosaurs = [
   "T-Rex",
   "Velociraptor",
   "Stegosaurus",
   "Triceratops",
   "Brachiosaurus",
   "Pteranodon",
   "Apatosaurus",
   "Diplodocus",
   "Compsognathus"
   ];
// undefined
dinosaurs[0]
// 'T-Rex'
dinosaurs[5]
// 'Pteranodon'
dinosaurs
// (9) ['T-Rex', 'Velociraptor', 'Stegosaurus', 'Triceratops', 'Brachiosaurus', 'Pteranodon', 'Apatosaurus', 'Diplodocus', 'Compsognathus']
dinosaurs[0] = "Tyrannosaurus Rex"
// 'Tyrannosaurus Rex'
dinosaurs[0]
// 'Tyrannosaurus Rex'
dinosaurs.length
// 9
dinosaurs[9] = "Philosoraptor"
// 'Philosoraptor'
dinosaurs
// (10) ['Tyrannosaurus Rex', 'Velociraptor', 'Stegosaurus', 'Triceratops', 'Brachiosaurus', 'Pteranodon', 'Apatosaurus', 'Diplodocus', 'Compsognathus', 'Philosoraptor']
var dinosAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10]
// undefined
dinosAndNumbers[2]
// (3) ['triceratops', 'stegosaurus', 3627.5]
dinosAndNumbers[2][1]
// 'stegosaurus'
typeof(dinosAndNumbers[2][2])
// 'number'
dinosAndNumbers[2][2]
// 3627.5
var maniacs = ["Yakko", "Wakko", "Dot"]
// undefined
maniacs.length
// 3
maniacs[maniacs.length - 1]
// 'Dot'
var animals = [];
// undefined
animals.push("Cat")
// 1
animals.push("Dog")
// 2
animals.push("Llama")
// 3
animals.length
// 3
animals[0]
// 'Cat'
animals.unshift("Monkey")
// 4
animals[0]
// 'Monkey'
animals
// (4) ['Monkey', 'Cat', 'Dog', 'Llama']
animals.unshift("Polar Bear")
// 5
animals
// (5) ['Polar Bear', 'Monkey', 'Cat', 'Dog', 'Llama']
animals[2]
// 'Cat'
var lastAnimal = animals.pop()
// undefined
lastAnimal
// 'Llama'
animals.unshift(lastAnimal)
// 5
animals
// (5) ['Llama', 'Polar Bear', 'Monkey', 'Cat', 'Dog']
var firstAnimal = animals.shift()
// undefined
firstAnimal
// 'Llama'
animals
// (4) ['Polar Bear', 'Monkey', 'Cat', 'Dog']

// ADDING ARRAYS
// firstArray.concat(otherArray)
var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"]
// undefined
var scalyAnimals = ["Boa Constrictor", "Godzilla"]
// undefined
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals)
// undefined
furryAndScalyAnimals
// (5) ['Alpaca', 'Ring-tailed Lemur', 'Yeti', 'Boa Constrictor', 'Godzilla']
furryAnimals
// (3) ['Alpaca', 'Ring-tailed Lemur', 'Yeti']
scalyAnimals
// (2) ['Boa Constrictor', 'Godzilla']
var featheredAnimals = ["Macaw", "Dodo"]
// undefined
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals)
// undefined
allAnimals
// (7) ['Alpaca', 'Ring-tailed Lemur', 'Yeti', 'Boa Constrictor', 'Godzilla', 'Macaw', 'Dodo']

// FINDING THE INDEX
var colors = ["red", "green", "blue"]
// undefined
colors.indexOf("blue")
// 2
colors[2]
// 'blue'
colors.indexOf("purple")
// -1
var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"]
// undefined
insects.indexOf("Bee")
// 0
insects.indexOf("Ant")
// 1

// TURN ARRAY INTO STRING
var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"]
// undefined
boringAnimals.join()
// 'Monkey,Cat,Fish,Lizard'
var newAnimals = boringAnimals.join(", ")
// undefined
newAnimals
// 'Monkey, Cat, Fish, Lizard'
var ages = [11, 14, 79]
// undefined
ages.join(" - ")
// '11 - 14 - 79'

// LIFO - LAST IN, FIRST OUT
// FIFO - FIRST IN, FIRST OUT
var landmarks = [];
// undefined
landmarks.push("My house");
// 1
landmarks.push("Front path");
// 2
landmarks.push("Flickering streetlamp");
// 3
landmarks.push("Leaky fire hydrant");
// 4
landmarks.push("Fire station");
// 5
landmarks.push("Cat rescue center");
// 6
landmarks.push("My old school");
// 7
landmarks.push("My friend's house");
// 8
landmarks;
// (8) ['My house', 'Front path', 'Flickering streetlamp', 'Leaky fire hydrant', 'Fire station', 'Cat rescue center', 'My old school', "My friend's house"]
landmarks.pop();
// "My friend's house"
landmarks.pop();
// 'My old school'
landmarks.pop();
// 'Cat rescue center'
landmarks.pop();
// 'Fire station'
landmarks.pop();
// 'Leaky fire hydrant'
landmarks.pop();
// 'Flickering streetlamp'
landmarks.pop();
// 'Front path'
landmarks.pop();
// 'My house'
landmarks;
// []

// DECISION MAKER WITH Math.random() AND Math.floor()
Math.random();
// 0.21102507146831173
Math.random();
// 0.8381919611148108
Math.random() * 10;
// 8.403231164140315
Math.random() * 20;
// 18.378352920516768
Math.random() * 10;
// 2.4091100764965434
Math.floor(9.99999999);
// 9
Math.floor(2.345677899);
// 2
Math.floor(Math.random() * 4);
// 2 ---- could be 0, 1, 2, or 3 (but not 4)
Math.floor(Math.random() * 4);
// 0
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// undefined
randomIndex = Math.floor(Math.random() * 4);
// 1
randomWords[randomIndex];
// 'Cave'
randomWords[Math.floor(Math.random() * 4)];
// 'Cave'

var phrases = [
   "That sounds good!",
   "Yes, you should definitely do that",
   "I'm not sure that's a great idea",
   "Maybe not today?",
   "Computer says no."
];

// Should I have another milkshake?
phrases[Math.floor(Math.random() * 5)];
'That sounds good!'

// Should I do my homework?
phrases[Math.floor(Math.random() * 5)];
'Maybe not today?'

// Should I go to bed early?
phrases[Math.floor(Math.random() * 5)];
'Yes, you should definitely do that'

// RANDOM INSULT GENERATOR
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]; // can also do Math.random() * randomBodyParts.length
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];

var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

randomInsult;
'Your Face is like a Boring Marmot!!!'