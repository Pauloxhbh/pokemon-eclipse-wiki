class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const path = window.location.pathname;
    const isIndex = path.endsWith('/') || path.endsWith('index.html');
    
    const rootPrefix = isIndex ? '' : '../';
    const pagesPrefix = isIndex ? 'pages/' : '';

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${rootPrefix}css/style.css" /> 
      <nav id="sidebar">  
        <ul>
          <li><strong>Navegação Rápida</strong></li>
          <li><a href="${rootPrefix}index.html">Início</a></li>
          <li><a href="${pagesPrefix}quests.html">Quests</a></li>
          <li><a href="${pagesPrefix}items.html">Itens e Equipamentos</a></li>
          <li><a href="${pagesPrefix}catch.html">Pokémons de Catch</a></li>
          <li><a href="${pagesPrefix}tower.html">Tower</a></li>
          <li><a href="${pagesPrefix}tier.html">Tiers dos Pokémons</a></li>
          <li>
            <button class="dropdown-btn">Stones</button>
            <ul class="dropdown-container">
              <li><a href="${pagesPrefix}shiny_stone.html">Shiny Stone</a></li>
              <li><a href="${pagesPrefix}black_stone.html">Black Stone</a></li>
              <li><a href="${pagesPrefix}mega_stone.html">Mega Stone</a></li>
              <li><a href="${pagesPrefix}cell_stone.html">Cell Stone</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    `;

    const sidebar = this.shadowRoot.querySelector('#sidebar');
    const overlay = document.getElementById('overlay'); // O overlay é o único elemento que o componente ainda controla no DOM principal
    const dropdownBtn = this.shadowRoot.querySelector('.dropdown-btn');
    const dropdownContainer = this.shadowRoot.querySelector('.dropdown-container');

    // Ouve o evento "toggle-menu" que o header dispara
    document.addEventListener("toggle-menu", () => {
      sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Fecha o menu se o overlay for clicado
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    }

    // Lógica interna para o dropdown
    dropdownBtn.addEventListener('click', () => {
      dropdownContainer.classList.toggle('show');
      dropdownBtn.classList.toggle('rotate');
    });

    this.updateActiveLink();
  }

  updateActiveLink() {
    const links = this.shadowRoot.querySelectorAll('a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      
      if (link.href.includes('items.html') && /stone|boost|moedas|pokebolas|orb|genecraft/.test(currentPath)) {
          link.classList.add('active');
      }
      
      if (currentPath === linkPath) {
        link.classList.add('active');

        // Se o link ativo estiver dentro de um dropdown, abre o dropdown
        if (link.closest('.dropdown-container')) {
          const container = link.closest('.dropdown-container');
          container.classList.add('show');
          container.previousElementSibling.classList.add('rotate');
        }
      }
    });
  }
}

customElements.define('custom-sidebar', Sidebar);
