let categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(categoryItem => {
  let categoryHeader = categoryItem.querySelector('h2');
  console.log(`Category: ${categoryHeader.textContent}`);
  let categoryElements = categoryItem.querySelectorAll('li');
  console.log(`Elements: ${categoryElements.length}`);
});
