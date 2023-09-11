const fruitForm = document.querySelector('#inputSection form');
const fruitList = document.querySelector('#fruitSection ul');


const addFruit = fruit => {
  const li = document.createElement('li');
  li.textContent = fruit 
  fruitList.appendChild(li);

  li.addEventListener('click', () => {
    fruitList.removeChild(li)
  })
}

fruitForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent
  addFruit(e.target.fruitInput.value);
  e.target.fruitInput.value = ""
});






