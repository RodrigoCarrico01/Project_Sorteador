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


}

