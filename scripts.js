// Captura dos elementos
const form = document.querySelector("form")
const numbers = document.getElementsByClassName("number-input")
const quantityInput = document.getElementById("quantity")
const firstNumberInput = document.getElementById("first-number")
const lastNumberInput = document.getElementById("last-number")
const noRepeatCheckbox = document.getElementById("no-repeat")

// Não permitir letras
for (let i = 0; i < numbers.length; i++) {
  numbers[i].oninput = () => {

    let value = numbers[i].value.replace(/\D/g, "")
    numbers[i].value = value

  }
}

form.onsubmit = (error) => {
  error.preventDefault(); 
  const quantity = parseInt(quantityInput.value, 10)
  const first = parseInt(firstNumberInput.value, 10)
  const last = parseInt(lastNumberInput.value, 10)
  const noRepeat = noRepeatCheckbox.checked


  let result = randomNumber(quantity, first, last, noRepeat)
  for (let i = 0; i < result.length; i++){
     console.log(result[i])
   }


}

function randomNumber(quantity, first, last, repeat) {
  const result = [];
  const rangeSize = last - first + 1;

  //Exceções
  if (first > last) {
    alert("O valor inicial não pode ser maior que o final.");
    return [];
  }
  if (!repeat && quantity > rangeSize) {
    alert("Não é possível sortear sem repetição mais números do que o intervalo permite.");
    return [];
  }

  //Sortear
  if (!repeat) {
    for (let i = 0; i < quantity; i++) {
      const num = Math.floor(Math.random() * rangeSize) + first;
      result.push(num);
    }
  } else {
    const pool = [];
    for (let i = first; i <= last; i++) {
      pool.push(i);
    }
    for (let i = 0; i < quantity; i++) {
      const index = Math.floor(Math.random() * pool.length);
      result.push(pool[index]);
      pool.splice(index, 1); 
    }
  }

  return result;
}


