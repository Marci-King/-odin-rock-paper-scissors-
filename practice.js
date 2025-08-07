/* let fruits = ["apple", "banana", "orange"];
console.log(fruits[2]); //array

let colours = ["blue", "red", "green", "purple", "orange"];

for (let i = 0; i < colours.length; i++)
  console.log(`colour ${i + 1} : ${colours[i]}`); //loop using tempral literal

//map

let numbers = [1, 2, 3, 4, 5];

// Add 1 to each number
let newNumbers = numbers.map(function (num) {
  return num + 1;
});

console.log(newNumbers); // [2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4, 5] (original unchanged!)

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10] //arrow functions

//filter

let car = 1;

car++;

console.log(car);

let arr = ["item1", "item2", "item3"];

for (let i = 0; i < arr.length; i ++)

 let languages = ["javascript", "phython" "java"]

for i = 0 ; i < Array.length ; i++ {console.log (array[i]); }

doubled = numbers.map(*2) 

[1,2,3].map num => num * 2

//filter returns items in array that meet condition original unchanged 

[3,7,2,9,1].filter num => num > 5


`hi my name is ${name}`

//if you want to leave original array unchanged. wrong. answer is When you want to transform every element and create a new array. It's cleaner, functional, and shows intent clearly.
*/
//reduce
/*let scores = [85, 92, 78, 96];

let total = scores.reduce((sum, score) => sum + score, 0);

console.log(total); */

/* let numbers = [2, 4, 6, 8];

function sumOfTripledEvens(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumOfTripledEvens([2, 4, 6, 8])); */

// it reduces all elements to one thing

/* function camelize(str) {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
}

console.log(camelize("my-short-string"));

//word.charAt(0) = gets first character ("s" from "short")

//word.slice(1) = gets everything after first character ("hort")
//+ joins them = "S" + "hort" = "Short" */
/*arr.filter(function(element) {
    return element >= a && element <= b;
}) 


function filterRange(arr, a, b) {
  return arr.filter((element) => element >= a && element <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

function filterRangeInPlace(arr, a, b) {
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];
        if (element < a || element > b) {  // Outside range
            arr.splice(index, 1);  // Remove element
        }
    }
}

ler arr = [5,3,8,1]; 

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr); 

let arr = ["HTML", "Javascript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);



arr.sort(a,b => a-b )

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Generate random index
    let randomIndex = Math.floor(Math.random() * arr.length);

    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
}
let arr = [1, 2, 3];
console.log(shuffle(arr)); 


[1,2,3].map([num => num *2) ;

[3,7,2,9,1].filter(num => num >5)

acc

number >= a && number <= b */
function unique(arr) {
  return [...new Set(strings)];
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));

//alert(unique(strings));
