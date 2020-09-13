let firstName = "vrushi";
firstName = "Vrushasen";

const lastName = "Dhere";
//lastName = "dhere"; // throws error in console that you can't change constants

console.log(firstName + ' ' + lastName);

// arithmetic operators

let a = 1,
    b = 2,
    c = 10

let add = a + b + c,
    substract = (a + b) - c,
    multiply = a * c,
    divide = b / c,
    modulus = c % b,
    exponentation = c ** b


console.log (add + ' ' + substract + ' ' + multiply + ' ' +divide + ' ' +modulus + ' ' + exponentation);



let currentResult = 0;

currentResult = (currentResult + 10) * 3 / 2 - 1;

//let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';

let calculationDescription = `( ${currentResult} + 10) * 3 / 2 - 1`;

outputResult( currentResult, calculationDescription);