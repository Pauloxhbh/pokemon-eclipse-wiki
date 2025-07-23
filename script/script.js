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
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  }

  // Abrir/Fechar menu
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("active");
      body.classList.toggle("menu-open");
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
