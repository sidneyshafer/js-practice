// Single line comments
/*
Multi-line
comments
*/

let age;
// undefined
age = 15
// 15
age = 15
// 15
myAge = age + age
// 30
myAge
// 30
30 + (5 - 2)
// 33
myName = 'Sidney'
// 'Sidney'
lastName = 'Shafer'
// 'Shafer'
fullName = myName + ' ' + lastName
// 'Sidney Shafer'
fullName.length
// 13
fullName.slice
// ƒ slice() { [native code] }
fullName.slice(0,3)
// 'Sid'
fullName.slice(1,4)
// 'idn'
isHappy = true
// true
isSad = false
// false
true && false
// false
true && true
// true
2 == 2
// true
2 != 3
// true
5 == 10
// false
var codeWord1 = "are";
// undefined
var codeWord2 = "tubas";
// undefined
var codeWord3 = "unsafe"
// undefined
var codeWord4 = "?!";
// undefined
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];
// 'run!'
fruits = ["Banana", "Orange", "Peach"]
// (3) ['Banana', 'Orange', 'Peach']
veggies = ["Spinach", "Beans", "Carrots"]
// (3) ['Spinach', 'Beans', 'Carrots']
produce = fruits + veggies
// 'Banana,Orange,PeachSpinach,Beans,Carrots'
nestedList = [fruits[veggies]]
// [undefined]0: undefinedlength: 1[[Prototype]]: Array(0)
fruits[2]
// 'Peach'
longString = 'This is a very long string that has lots of words';
// 'This is a very long string that has lots of words'
longString.slice(0, 7)
// 'This is'
myName.toUpperCase()
// 'SIDNEY'
var sillyString = "heLLO THERE hoW aRE yoU TODay"
// undefined
var sillyString = sillyString.toLowerCase()
// undefined
var firstCharacter = lowerString[0]
// VM2578:1 Uncaught ReferenceError: lowerString is not defined
//     at <anonymous>:1:22
// (anonymous) @ VM2578:1
var sillyString = "heLLO THERE hoW aRE yoU TODay"
// undefined
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()
// 'Hello there how are you today'
var hasApple = true;
// undefined
var hasOrange = false;
// undefined
hasApple && hasOrange
// false
hasApple || hasOrange
// true
var isWeekend = true;
// undefined
var needToShower = !isWeekend
// undefined
needToShower
// false
!needToShower
// true
hadShower = true;
// true
var hasOrange = true;
// undefined
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
//undefined
shouldGoToSchool
// false
var height = 65
// undefined
var heightRestriction = 60
// undefined
height > heightRestriction
// true
height < heightRestriction
// false
var heightRestriction = 60
// undefined
var height = 60
// undefined
height >= heightRestriction
// true
height <= heightRestriction
// true
height > heightRestriction
// false
height < heightRestriction
// false
var secretNumber = 5
// undefined
secretNumber === 2
// false
secretNumber === 5
// true
var myString = 'Sid'
// undefined
myString === 'Sidney'
// false
myString === 'Sid'
// true
var stringNumber = '5'
// undefined
stringNumber = 5
// 5
var stringNumber = '5'
// undefined
stringNumber == 5
// true
0 == false
// true
0 === false
// false
"false" == false
// false
"false" === false
// false
var myVariable = null;
// undefined
myVariable
// null