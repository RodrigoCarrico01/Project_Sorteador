document.addEventListener('DOMContentLoaded', () => {
  // Função para ativar hover no label correspondente ao input
  document.querySelectorAll('.input-style').forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);

    if (!label) return;

    input.addEventListener('mouseenter', () => {
      label.classList.add('hovered');
    });

    input.addEventListener('mouseleave', () => {
      label.classList.remove('hovered');
    });

    input.addEventListener('focus', () => {
      label.classList.add('hovered');
    });

    input.addEventListener('blur', () => {
      label.classList.remove('hovered');
    });
  });

});
