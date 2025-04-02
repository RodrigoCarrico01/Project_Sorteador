// Captura dos elementos
const numbers = document.getElementsByClassName("number-input")



// Não permitir letras
for (let i = 0; i < numbers.length; i++) {
  numbers[i].oninput = () => {

    let value = numbers[i].value.replace(/\D/g, "")
    numbers[i].value = value

  }
}

