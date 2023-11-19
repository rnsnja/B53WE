console.log("working good");

const arr = ["IND", "CHN", "USA", "UK", "JPN", "RSA"];
const obj = {
  INDIA: "IND",
  CHINA: "CHN",
  America: "USA",
  UnitedKingdom: "UK",
  Japan: "JPN",
  Russia: "RSA",
};
// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const objectKeys = Object.keys(obj);
console.log(objectKeys);
const objectValues = Object.values(obj);
console.log(objectValues);
const objectEntries = Object.entries(obj);
console.log(objectEntries);

// for loop
for (let i = 0; i < objectValues.length; i++) {
  console.log(objectValues[i]);
}

// for each
// arrays
arr.forEach((value, index, accArr) => {
  console.log(`
     values of the Arr : ${value},
     index of the  Arr : ${index},
     actual Arr :        ${accArr}
    `);
});

objectValues.forEach((value, index, accArr) => {
  console.log(`
       values of the obj : ${value},
       index of the  obj : ${index},
       actual obj :        ${accArr}
      `);
});

// for in
// best objects
console.log(obj.INDIA);
console.log(obj["INDIA"]);

for (key in obj) {
  console.log(`
    object keys : ${key}
    object values : ${obj[key]}
    `);
}
// for in array
console.log(arr[0]);
for (idx in arr) {
  console.log(`
      arr index : ${idx}
      arr values : ${arr[idx]}
      `);
}

//for of
// best strings
const str = "allcountrydata";
// convertion arrray and iterate
const strArr = str.split("");
console.log(strArr); //[a, l,;, ...]

for (txt of str) {
  console.log(txt);
}

// array
// returns values of an array
for (val of arr) {
  console.log(`values are ${val}`);
}

//object
// pass the objectkeys are values to iterate
for (key of objectKeys) {
  console.log(`
    object keys : ${key}
    object values : ${obj[key]}
    `);
}
