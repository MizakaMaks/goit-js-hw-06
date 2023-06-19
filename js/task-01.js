const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`) 
 

allCategories.forEach((el) =>{
const nameOfCategory = el.querySelector('h2').textContent
const numberOfItems = el.querySelectorAll('li').length

console.log(`Category: ${nameOfCategory}`)
console.log(`Elements: ${numberOfItems}`)
})