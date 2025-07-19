document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  // Abre/fecha o menu lateral
  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Dropdown de Stones
  const dropdowns = document.querySelectorAll(".dropdown-btn");
  dropdowns.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const dropdownContent = this.nextElementSibling;
      const isVisible = dropdownContent.style.display === "block";
      dropdownContent.style.display = isVisible ? "none" : "block";
      this.textContent = isVisible ? "Stones ▸" : "Stones ▼";
    });
  });
});
