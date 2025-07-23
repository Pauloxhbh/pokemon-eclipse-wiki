class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="../css/style.css" /> 
      <nav id="sidebar">
        <ul>
          <li><strong>Navegação Rápida</strong></li>
          <li><a href="../index.html">Início</a></li>
          <li><a href="../pages/tutorial.html">Tutorial</a></li>
          <li><a href="../pages/quests.html">Quests</a></li>
          <li><a href="../pages/items.html">Itens e Equipamentos</a></li>
          <li><a href="../pages/catches.html">Pokémons de Catch</a></li>
          <li><a href="../pages/tower.html">Tower</a></li>
          <li><a href="../pages/tier.html">Tiers dos Pokémons</a></li>
          <li>
            <button class="dropdown-btn">Stones</button>
            <ul class="dropdown-container">
              <li><a href="../pages/shiny_stone.html">Shiny Stone</a></li>
              <li><a href="../pages/black_stone.html">Black Stone</a></li>
              <li><a href="../pages/mega_stone.html">Mega Stone</a></li>
              <li><a href="../pages/cell_stone.html">Cell Stone</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    `;

    const button = shadow.querySelector('.dropdown-btn');
    const dropdownContainer = shadow.querySelector('.dropdown-container');
    const allLinks = shadow.querySelectorAll('a');
    const sidebar = shadow.getElementById("sidebar");
    const dropdownLinks = dropdownContainer.querySelectorAll('a');
    const currentPath = window.location.pathname.split('/').pop(); // ex: "cell_stone.html"

    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      const hrefFile = href.split('/').pop(); // ex: "cell_stone.html"

      if (href.includes("pages") && (currentPath === hrefFile)) {
        link.classList.add('active');

        if (Array.from(dropdownLinks).find(link => link.getAttribute('href') === href)) {
          dropdownContainer.classList.add('show');
          button.classList.add('rotate');
        }
      }
    });

  
    document.addEventListener("toggle-menu", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    button.addEventListener('click', () => {
      shadow.querySelectorAll('.dropdown-container.show').forEach(openContainer => {
        if (openContainer !== dropdownContainer) {
          openContainer.classList.remove('show');
          openContainer.previousElementSibling.classList.remove('rotate');
        }
      });

      dropdownContainer.classList.toggle('show');
      button.classList.toggle('rotate');
    });
  }
}

customElements.define('custom-sidebar', Sidebar);
