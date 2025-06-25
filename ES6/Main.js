//Logical && Logical ||
function getName(name) {
  return name;
}
//&& If first one is true then it will check next one,
//  if the first one is false it will never check the second value
let a = true;
let b = false;
console.log(a && getName("Leelavathi KM"));
//|| or is compleately opposite if the fist value is false then will check the second value
// both are false it will return false both r true it will return the true
console.log(a || getName("Leela"));

// Template Literals Lot of time we will be using this in react projects
// this is to manipulate any kind of string with the dynamic values
let name1 = "Gayathri";
let name2 = "Reddy";

//Merging the string values
console.log(name1 + " " + name2, `${name1} ${name2}`); //Template Literals means `${name1}`

// Ternary Operator
let showRecipeOne = false; //false u will get chicken ,true u will get pizza

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Chicken"));
}

//here we ae using ternary operator if u give the condition
//  if the condition stisfied then will pass statement

// condition ? statement 1 : statement 2
//True will execute the first condition , false will check the second condition
showRecipeOne
  ? console.log(getRecipeOneName("Mutton"))
  : console.log(getRecipeTwoName("Fish"));

//   Destructuring it will unpack values from arrays or objects into separate variables.
//It makes code cleaner, shorter, and more readable, especially when working with APIs,
// objects,  or function parameters.
//"Destructuring in JavaScript allows you to extract values from arrays or objects into
// separate variables in a clean, declarative way. It’s
// especially useful for handling API data, function arguments, or working with React props."
const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};
console.log(product);

//Lets see how we use the destructurin concept

const product2 = {
  description: "Product 2 Description",
  id,
  productName,
  rating,
}; //these all will take from product

//here our task is to get the description from here and the logon

// const getPoroductTwoDescription=product2.description
//console.log(getProductDescription)

const { description } = product2;
console.log(description);

//Array destructuring
const arry = [1, 2, 3, 4];
let getArrayFirstValue = arry[0];
let getArraySecondValue = arry[1];

console.log(getArrayFirstValue, getArraySecondValue);

const [
  arrayFirstelement,
  arraySecondElement,
  arrayThairdElement,
  arrayFourthElement,
] = arry;
console.log(
  arrayFirstelement,
  arraySecondElement,
  arrayThairdElement,
  arrayFourthElement
);

//default parameters, spread and rest operators

// first will learn default parameters is nothing like when u will be passing any parameter
// it will always overwrite the default value, if u dont pass anything it will take the
//default value which u have passsed in the argument

function mulOfTwoNumbers(num1, num2) {
  return num1 * num2;
}
console.log(mulOfTwoNumbers(2, 3));

function mulofTwoNumbers(num1 = 1, num2 = 2) {
  console.log(num1, num2);
  return num1 * num2;
}
console.log(mulofTwoNumbers(10));

// Spread operater
const array2 = [2, 3, 4];
// console.log([...array2]);
const array3 = [10, 20, 30];
//now if i want to merge both of this array
console.log([...array2, ...array3]);
//If you want to add any value u can add like this
console.log(999, ...array2, 90, ...array3, 10000);

//rest parameter or operater
function getInfo(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  return "Leela";
}
console.log(getInfo(1, 2, 3, 4, 5));

//ok when if you have hundreds of arguments u need to pass u cant write a,b,c,d
//so you can basically spread the arguments here what ever u will be passing
function getInfo(a, b, ...xyz) {
  //spread (The rest parameter must be last in a parameter list)
  console.log(a, b);
  console.log(xyz);
  return a, b;
}
console.log(getInfo(1, 2, 3, 4, 5, 8, 99, 77)); //you can pass n number of values here

// ArrayMethods map,filter,find,some, every,includes,indexof, findIndex

const personArray = [
  {
    name: "Person 1",
    age: 42,
    city: "BLR",
  },
  {
    name: "Person 2",
    age: 40,
    city: "Chennai",
  },
  {
    name: "Person 3",
    age: 35,
    city: "HYD",
  },
  {
    name: "Person 4",
    age: 45,
    city: "HYD",
  },
  {
    name: "Person 5",
    age: 25,
    city: "HYD",
  },
]; //what i need to create a new array and that array will consist
// only the name of each and every person , so how we will get that see

// map() is used to transform arrays without modifying the original
// map()it will  transform every element in an array actually returns a new array — making
// it ideal for data transformation without changing the original array.
//  It's better than forEach() when you need to return a new array."
let getAllNAmes = personArray.map((singlePerson, index) => {
  // return singlePerson.name;
  //  console.log(singlePerson)
  console.log(singlePerson, index);
  // Template Literals
  return `${singlePerson.name} age is ${singlePerson.age} city ${singlePerson.city}`;
});
console.log(getAllNAmes);

//Find it will always check any condition which is satisfying, it will return that object
//Find method if thre are more then one element with the same city,if the first element
//  is true then it will stop
let getPersonFromHYD = personArray.find((singlePerson, index) => {
  return singlePerson.city === "Chennai";
});

console.log(getPersonFromHYD);

//it will check all the things and it will return an array
//filter method opposite to the find , it will return all the elements which is with the same city or elements true

let getAllPersonFromHYD = personArray.filter((singlePerson, index) => {
  return singlePerson.city === "HYD";
});
console.log(getAllPersonFromHYD);

//some will return a boolen flag based on if any condition is satisfy
//some any of one condition stisfy & Every will check each and every object is satisfy
let checkSomeArrymethodExmp = personArray.some((singlePerson, index) => {
  return singlePerson.age < 60;
});

console.log(checkSomeArrymethodExmp);

//every will return true when all the condition is satified
let checkSomeArrymethodWithExmp = personArray.every((singlePerson) => {
  return singlePerson.age >= 25;
});

console.log(checkSomeArrymethodWithExmp);

//Includes if the value is present it will return true,
const fruitsArray = ["apple", "banana", "Mango"];

console.log(fruitsArray.includes("Leela"));

//IndexOf if the value is exist it will return 1, if dosent exist it will return -1

console.log(fruitsArray.indexOf("banana"));

//findIndex
let getIndexFromBlr = personArray.findIndex((singlePerson) => {
  return singlePerson.city === "HYD";
});

console.log(getIndexFromBlr);

let getListOfProducts = document.querySelector(".list-of-products");
function renderProducts(getProducts) {
  getListOfProducts.innerHTML = getProducts.map(singleProductItem);
}

//Second Create a function
async function fetctListOfProducts() {
  //Here we are taking try block
  try {
    // exceptionHandling
    const apiResponse = await fetch("https://dummyjson.com/products");
    // Here we give get method
    metod: "GET";
    const result = await apiResponse.json();
    console.log(result);
    // After checking products in clg the we are going to render this products so create if
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (e) {
    console.log(e);
  }
}
// first i will be creating a method here fetchListOfProducts
fetctListOfProducts();
