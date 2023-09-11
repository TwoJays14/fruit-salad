const fruitForm = document.querySelector('#inputSection form');
const fruitList = document.querySelector('#fruitSection ul');
const fruitNutrition = document.querySelector('#nutritionSection p');


// let apiData;

// const getData = async() => {
//   const res = await fetch('https://fruity-api.onrender.com/api/fruits')
//   const data = await res.json()
//   apiData = data
//   console.log(apiData)
// };

// getData()

const fetchFruitData = fruit => {
  fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    addFruit(data)
  })
  .catch(err => console.error(err));
}

let totalCal = 0;
let totalCarbs = 0;
let totalFat = 0;
let totalProtein = 0;
let totalSugar = 0;

const addFruit = fruit => {
  
  const li = document.createElement('li');
  li.textContent = fruit.name
  fruitList.appendChild(li);

  li.addEventListener('click', () => {
    fruitList.removeChild(li)
  });

  totalCal += fruit.nutritions.calories
  totalCarbs += fruit.nutritions.carbohydrates
  totalFat += fruit.nutritions.fat
  totalProtein += fruit.nutritions.protein
  totalSugar += fruit.nutritions.sugar

  fruitNutrition.textContent = 
  `
  Calories: ${Math.round(totalCal)}
  Carbohydrates: ${Math.round(totalCarbs)}
  Fat: ${Math.round(totalFat)}
  Protein: ${Math.round(totalProtein)}
  Sugar: ${Math.round(totalSugar)}
  `
}

fruitForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent
  fetchFruitData(e.target.fruitInput.value);
  e.target.fruitInput.value = ""
});







