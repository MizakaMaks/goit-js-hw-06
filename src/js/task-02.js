const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 ingredients.forEach(item) => {
  const ingredientsElements = document.createElement('li');
  ingredientsElements.classList.add('item');
  const titles = document.createElement('h2');
  titles.textContent = item;
  ingredientsElements.appendChild(titles);
  const elList = document.querySelector('#ingredients')
  elList.appendChild(ingredientsElements)
 }