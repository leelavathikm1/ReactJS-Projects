function getName(name) {
  return name;
}

let a = true;
let b = false;
// console.log(a && getName("Leelavathi KM"));
console.log(a || getName("Leela"));

// Template Literals
let name1 = "Gayathri";
let name2 = "Reddy";

console.log(name1 + " " + name2, `${name1} ${name2}`);

// Ternary Operator
const showRecipeOne = false;

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

showRecipeOne
  ? console.log(getRecipeOneName("Mutton"))
  : console.log(getRecipeTwoName("Fish"));
