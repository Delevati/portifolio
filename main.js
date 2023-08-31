let mediaQuery = window.matchMedia("(max-width: 700px)");
let icons = document.querySelectorAll('.icon-neon');
let intervalId;

// Função para esconder todos os ícones
function hideAllIcons() {
  icons.forEach(icon => {
    icon.style.display = 'none';
  });
}

let currentIcon = 0;

function cycleIcons() {
  hideAllIcons(); // Esconde todos os ícones
  icons[currentIcon].style.display = 'block'; // Mostra o ícone atual
  currentIcon = (currentIcon + 1) % icons.length;
}

function startCycling() {
  if (!intervalId) {
    hideAllIcons();
    icons[0].style.display = 'block'; // Mostre o primeiro ícone para começar
    intervalId = setInterval(cycleIcons, 1000);
  }
}

function stopCycling() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    icons.forEach(icon => {
      icon.style.display = 'block';
    });
  }
}

// Verifica o estado inicial
if (mediaQuery.matches) {
  startCycling();
} else {
  stopCycling();
}

// Listener para mudanças na largura da janela
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    startCycling();
  } else {
    stopCycling();
  }
});
