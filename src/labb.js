// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
  return a + b;
}

function isBelowZero(input) {
  if (input < 0) {
    return true;
  }
  if (input > 0) {
    return false;
  }
}

function myOwnMultiplyFunction(a, b) {
  return a * b;
}

function myRound(a) {
  return Math.round(a);
}

function addingUp(a) {
  let sum = 0;
  for (b = 1; b <= a; b++) {
    sum += b;
  }
  return sum;
}

function myMinMax(input) {
  let max = Math.max(...input);
  let min = Math.min(...input);
  let number1 = "max";
  let number2 = "min";

  return { number1, max, number2, min };
}

function afterXmasEve2020(date) {
  let xmasEve = new Date("2020-12-24");
  let date = new Date(date);
  if (date >= xmasEve) {
    return true;
  }
  return false;
}

function myArray(array) {
  return array.sort((a, b) => a.length - b.length);
}

function charCounter(array, value) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) {
      count++;
    }
  }
  return count;
}


function numbersOnly(input) {
  const numberArray = input.filter(Number.isInteger);
  
      return numberArray;
    
}


function sortNumbers(array, x){
  if(x === 1){
    return array.sort((a, b) => a - b);
  } else if (x === -1) {
    return array.sort((a, b) => b - a);
  }
}


function personFactory(firstname, lastname) {
  this.firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  this.lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
  this.initials = firstname[0].toUpperCase() + "." + lastname[0].toUpperCase();
}

function doublePrice(myArray) {
  let newArray = [];
  myArray.forEach((element) => {
    object = {name: element.name, price: element.price * 2};
    newArray.push(object);
  });
   return newArray;
}

function and(a, b) {
  if((a == true)) {
    if (a == b) {
      return true;
    }
  }
  return false;
}

function removeLeadingTrailing(input) {
  return parseFloat(input);
}

function getKeysAndValues(input){
  const result;
  const keys = Object.keys(input);
  const values = Object.values(input);
  result = {keys: keys, values: values};
  return result;
}
  

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!

//etc...

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum;
module.exports.multiply = myOwnMultiplyFunction;
module.exports.isBelowZero = isBelowZero;
module.exports.round = myRound;
module.exports.addingUp = addingUp;
module.exports.findMinMax = myMinMax;
module.exports.afterXmasEve2020 = afterXmasEve2020;
module.exports.sortByStringLength = myArray;
module.exports.charCounter = charCounter;
module.exports.numbersOnly = numbersOnly;
module.exports.sortNumbers = sortNumbers;
module.exports.personFactory = personFactory;
module.exports.doublePrice = doublePrice;
module.exports.and = and;
module.exports.removeLeadingTrailing = removeLeadingTrailing;
module.exports.getKeysAndValues = getKeysAndValues;
