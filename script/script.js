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
  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Fechar menu ao clicar no overlay
  overlay.addEventListener("click", closeMenu);

  // Lógica para todos os Dropdowns
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      // Encontra o container do dropdown (o próximo elemento irmão)
      const dropdownContainer = this.nextElementSibling;
      
      // Fecha outros dropdowns que possam estar abertos (bom para experiência do usuário)
      document.querySelectorAll('.dropdown-container.show').forEach(openContainer => {
        if (openContainer !== dropdownContainer) {
          openContainer.classList.remove('show');
          // Remove também a classe de rotação do botão correspondente
          openContainer.previousElementSibling.classList.remove('rotate');
        }
      });

      // Alterna a exibição do dropdown atual e a rotação do botão
      dropdownContainer.classList.toggle("show");
      this.classList.toggle("rotate");
    });
  });
});
