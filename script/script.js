// --- CÓDIGO DA TELA DE ABERTURA (SPLASH SCREEN) ---
window.addEventListener('load', function() {
  const splashScreen = document.getElementById('splash-screen');
  
  // Verifica se a splash screen existe na página atual
  if (splashScreen) {
    // Define o tempo que a splash screen fica visível (em milissegundos)
    // 3000ms = 3 segundos
    setTimeout(() => {
      splashScreen.classList.add('hidden');
    }, 3000); 
  }
});
// --- FIM DO CÓDIGO DA SPLASH SCREEN ---


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  function closeMenu() {
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    if (body) body.classList.remove("menu-open");
  }

  // Abrir/Fechar menu
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      if (sidebar) sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("active");
      if (body) body.classList.toggle("menu-open");
    });
  }

  // Fechar menu ao clicar no overlay
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Lógica para todos os Dropdowns
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const dropdownContainer = this.nextElementSibling;
      
      document.querySelectorAll('.dropdown-container.show').forEach(openContainer => {
        if (openContainer !== dropdownContainer) {
          openContainer.classList.remove('show');
          openContainer.previousElementSibling.classList.remove('rotate');
        }
      });

      dropdownContainer.classList.toggle("show");
      this.classList.toggle("rotate");
    });
  });
});

// --- CÓDIGO PARA A ANIMAÇÃO DE PARTÍCULAS ---
if (typeof particlesJS !== 'undefined') {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
      "color": { "value": "#FFD700" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#FFD700", "opacity": 0.2, "width": 1 },
      "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
      "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }},
      "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
        }
