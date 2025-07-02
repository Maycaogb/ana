const muda = document.querySelector('#muda');
const dogToggle = document.querySelector('#dog');

// Quando clicar na switch/fundo, troca o estado do dog
muda.addEventListener('change', () => {
  dogToggle.checked = muda.checked;

  // Aciona o estilo manualmente (caso precise aplicar sem usar só CSS)
  const dog = document.querySelector('.dog-rollover .dog');
  if (muda.checked) {
    dog.style.transform = 'translate(100px) rotate(360deg)';
    dog.style.transition = '0.6s ease';
    dog.style.backgroundColor = 'rgb(0, 4, 255)';
  } else {
    dog.style.transform = 'none';
    dog.style.backgroundColor = '#6164e4';
  }
});