const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const myElement = document.getElementById("ingredients");



for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.classList.add('item');
  li.textContent = ingredients[i];
  myElement.appendChild(li);
}


// const heading = document.createElement("li");

// heading.textContent = ingredients;

// heading.classList.add(item);
// console.log(heading); 
