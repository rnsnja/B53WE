// verb
window.getMultiple();
function getMultiple() {
  console.log(a); // undefined
  var a = 25;
  console.log(a);
  console.log("multiple", a * 5);
}

// function with return keyword

function getName() {
  return "Sanjay";
}
var func_name = getName();
var name = "Sanjay";

console.log(func_name);
console.log(name);

// function with arguments and parameters
function doCalculation(num1, num2) {
  // num1 and num2 are parameters
  console.log(num1 * num2);
}
//arguments
doCalculation(5, 10);

// calculator function
// mul, add and sub

function calculator(operation, num1, num2) {
  if (operation == "sum") {
    return num1 + num2;
  } else if (operation == "sub") {
    return num1 - num2;
  } else if (operation == "mul") {
    return num1 * num2;
  } else {
    return "please given valid arguments";
  }
}

const sum_func = calculator("sum", 10, 15); // 25
const mul_func = calculator("mul", 10, 5); // 50
const sub_func = calculator("sub", 10, 5); // 5
const not_fucn = calculator();
console.log(sum_func);
console.log(mul_func);
console.log(sub_func);
console.log(not_fucn);

// function declaration
function printFunction() {
  console.log("i print");
}
printFunction();
// function statement or expression
const aFucn = function (name) {
  console.log("un named function", name);
};

//anonymous function
// function () {
//     console.log("un named function");
//   };

aFucn("sanjay");

// arrow function

let arrFucn = (num1, num2) => num1 * num2;

const arrName = arrFucn(5, 10);
console.log(arrName);

// IIFE
// Immeditaly invoked function excecution
(function getValue() {
  console.log("value of IIFE");
})();

var axg = 87;

// first class functions
function returnMyname(name) {
  return name;
}
const myName = returnMyname("sanjay");
console.log(myName);

//executable function
function mybatch(batch) {
  return batch;
}

function TellMyBatch(ins, fn) {
  console.log("Hi I'm from" + " " + ins + " " + fn(ins));
}
TellMyBatch("Guvi", mybatch);

// template literals
function greetMe(name, ins) {
  console.log("Hi " + name + " welcome " + ins);
  console.log(`Hi ${name} welcome ${ins}`);
}
greetMe("praveen", "guvi");

// pure functions
// any funvtion that gives same output for same input
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers(5, 10);
addTwoNumbers(5, 10);
addTwoNumbers(5, 10);

// higher order function
// function returns another function
// 25*5 = result
function multiply(factor) {
  return function (number) {
    // 5*2
    return number * factor;
  };
}

const result = multiply(2);
console.log(result(5));

// i want to check an array of data is divisble by a
// given number

// number of value thar are divisble by the number
function payload(arr) {
  return function (div) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % div == 0) {
        count += 1;
      }
    }
    return count;
  };
}

// const isDivisible = payload([2, 4, 5, 7, 8, 15]);
// console.log(isDivisible(2));
// console.log(isDivisible(3));
// console.log(isDivisible(5));

// curring functional call
console.log("using curring", payload([2, 4, 5, 7, 8, 15])(5));
function basicCurriyngAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Basic curring", basicCurriyngAdd(4)(5)(9));
// if (!b) {
//     return a;
//   }
//   return addValues(a + b);

function addValues(a) {
  //a = 10
  // a= 20
  return function (b) {
    //b = 10
    //b = null
    if (!b) {
      return a;
    }
    //a+b = 20
    // addValues(20)
    return addValues(a + b);
  };
}
//console.log(addValues(2)(5)(7)());
console.log(addValues(10)(10)());
