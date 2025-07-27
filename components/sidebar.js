class Sidebar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const currentPath = window.location.pathname.split('/').pop(); 
    const pagesOrigin = window.location.origin == "https://pauloxhbh.github.io" ? window.location.origin + "/pokemon-eclipse-wiki" : window.location.origin

    shadow.innerHTML = `
      <link rel="stylesheet" href="${pagesOrigin}/css/style.css" /> 
      <nav id="sidebar">  
        <ul style="position: fixed; top: 60px;">
          <h3><strong>Navegação Rápida</strong></h3>
          <li><a href="${pagesOrigin}/index.html">Início</a></li>
          <li><a href="${pagesOrigin}/pages/quests.html">Quests</a></li>
          <li><a href="${pagesOrigin}/pages/items.html">Itens e Equipamentos</a></li>
          <li><a href="${pagesOrigin}/pages/catches.html">Pokémons de Catch</a></li>
          <li><a href="${pagesOrigin}/pages/farm.html">Hunts de Farm</a></li>
          <li><a href="${pagesOrigin}/pages/fusion.html">Fusões</a></li>
          <li><a href="${pagesOrigin}/pages/tower.html">Tower</a></li>
          <li><a href="${pagesOrigin}/pages/tier.html">Tiers dos Pokémons</a></li>
          <ul>
            <button class="dropdown-btn">Stones</button>
            <ul class="dropdown-container">
              <li><a href="${pagesOrigin}/pages/shiny_stone.html">Shiny Stone</a></li>
              <li><a href="${pagesOrigin}/pages/black_stone.html">Black Stone</a></li>
              <li><a href="${pagesOrigin}/pages/mega_stone.html">Mega Stone</a></li>
              <li><a href="${pagesOrigin}/pages/cell_stone.html">Cell Stone</a></li>
            </ul>
          </ul>
        </ul>
      </nav>
    `;

    const button = shadow.querySelector('.dropdown-btn');
    const dropdownContainer = shadow.querySelector('.dropdown-container');
    const allLinks = shadow.querySelectorAll('a');
    const sidebar = shadow.getElementById("sidebar");
    const dropdownLinks = dropdownContainer.querySelectorAll('a');

    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      const hrefFile = href.split('/').pop(); 

      if (href.includes("pages") && (currentPath === hrefFile)) {
        link.parentElement.classList.add('active');

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
