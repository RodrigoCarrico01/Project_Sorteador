// Esperar que o DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

  // === Referências aos elementos do DOM ===
  const form = document.querySelector("form");
  const numbers = document.getElementsByClassName("number-input");

  const quantityInput = document.getElementById("quantity");
  const firstNumberInput = document.getElementById("first-number");
  const lastNumberInput = document.getElementById("last-number");
  const noRepeatCheckbox = document.getElementById("no-repeat");

  const contentFormFirstDiv = document.querySelector(".content-form div");
  const contentResponseFirstDiv = document.querySelector(".content-response div");
  const responseWrapper = document.querySelector(".response-wrapper");
  const hiddenWrapper = document.querySelector(".hidden");
  const responseButton = hiddenWrapper.querySelector("button");

  // === Impedir a introdução de letras nos inputs ===
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].oninput = () => {
      let value = numbers[i].value.replace(/\D/g, "");
      numbers[i].value = value;
    };
  }

  // === Evento de submissão do formulário ===
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const quantity = parseInt(quantityInput.value, 10);
    const first = parseInt(firstNumberInput.value, 10);
    const last = parseInt(lastNumberInput.value, 10);
    const noRepeat = noRepeatCheckbox.checked;

    // === Validação básica ===
    if (isNaN(quantity) || isNaN(first) || isNaN(last)) {
      alert("Por favor, preencha todos os campos com números válidos.");
      return;
    }
    if (quantity <= 0 || first < 0 || last < 0) {
      alert("Por favor, insira apenas números positivos.");
      return;
    }
    if (first > last) {
      alert("O valor inicial não pode ser maior que o valor final.");
      return;
    }

    const rangeSize = last - first + 1;
    if (noRepeat && quantity > rangeSize) {
      alert("Não é possível sortear sem repetição mais números do que o intervalo permite.");
      return;
    }

    if (quantity > 4) {
      alert("Só é permitido sortear no máximo 4 números.");
      return;
    }

    // === Gerar números e mostrar resultado ===
    const result = generateRandomNumbers(quantity, first, last, noRepeat);

    if (result.length > 0) {
      renderResults(result);
      toggleVisibility(); // Troca de content-form para resultados
    }
  });

  // === Botão "Sortear Novamente" ===
  responseButton.addEventListener("click", () => {
    toggleVisibility(); // Troca de resultados para content-form
  });

  // === Gerar números aleatórios ===
  function generateRandomNumbers(quantity, first, last, noRepeat) {
    const result = [];
    const rangeSize = last - first + 1;

    if (noRepeat) {
      const pool = [];
      for (let i = first; i <= last; i++) {
        pool.push(i);
      }

      for (let i = 0; i < quantity; i++) {
        const index = Math.floor(Math.random() * pool.length);
        result.push(pool[index]);
        pool.splice(index, 1); // Remover o número para não repetir
      }

    } else {
      for (let i = 0; i < quantity; i++) {
        const num = Math.floor(Math.random() * rangeSize) + first;
        result.push(num);
      }
    }

    return result;
  }

  // === Mostrar os resultados sorteados no HTML ===
  function renderResults(numbers) {
    responseWrapper.innerHTML = ""; // Limpar resultados anteriores

    numbers.forEach(num => {
      const card = document.createElement("div");
      card.classList.add("response-card");
      card.innerHTML = `
        <div class="box"></div>
        <span class="number">${num}</span>
      `;
      responseWrapper.appendChild(card);
    });
  }

  // === Alternar visibilidade entre formulário e resultados ===
  function toggleVisibility() {
    contentFormFirstDiv.classList.toggle("hidden");
    contentResponseFirstDiv.classList.toggle("hidden");
  }

});
