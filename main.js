/* main.js */
let mediaQuery = window.matchMedia("(max-width: 700px)");
let icons = document.querySelectorAll('.icon-neon');
let intervalId;

function hideAllIcons() {
  icons.forEach(icon => {
    icon.style.display = 'none';
  });
}

let currentIcon = 0;

function cycleIcons() {
  hideAllIcons();
  icons[currentIcon].style.display = 'block';
  currentIcon = (currentIcon + 1) % icons.length;
}

function startCycling() {
  if (!intervalId) {
    hideAllIcons();
    icons[0].style.display = 'block';
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

if (mediaQuery.matches) {
  startCycling();
} else {
  stopCycling();
}

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    startCycling();
  } else {
    stopCycling();
  }
});

/* SCROLL DO LINK 'AQUI' WINDOWLINE2 */
document.addEventListener("DOMContentLoaded", function(){
  var scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var id = this.getAttribute('href').substring(1);
      var target = document.getElementById(id);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

/* rodapé */

document.getElementById('footer-container').addEventListener('click', function() {
  window.open('https://api.whatsapp.com/send?phone=55996462102', '_blank');
});




































/* GITHUB */
/* document.addEventListener("DOMContentLoaded", function(){
fetch('https://api.github.com/users/delevati/repos')
  .then(response => response.json())
  .then(data => {
    let outputgit = '<h2>Meus Repositórios:</h2>';
    data.forEach((repo) => {
      outputgit += `
        <div>
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
        </div>
      `;
    });
    document.getElementById('outputgit').innerHTML = outputgit;
  })
  .catch((error) => {
    console.error('Erro capturado no catch:', error);
    if (error.response) {
      console.error('Detalhes do erro:', error.response);
    }
  });
}); */