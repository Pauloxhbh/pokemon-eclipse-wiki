class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const pagesOrigin = window.location.origin === "https://pauloxhbh.github.io" ? window.location.origin + "/pokemon-eclipse-wiki" : window.location.origin;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${pagesOrigin}/css/style.css" />
      <header id="main-header">
        <button id="menu-toggle" aria-label="Abrir menu de navegação">&#9776;</button>
        <h1>Pokemon Eclipse Wiki</h1>
      </header>
    `;

    const menuToggle = this.shadowRoot.querySelector("#menu-toggle");

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        // Dispara o evento que a sidebar vai "ouvir"
        this.dispatchEvent(new CustomEvent("toggle-menu", {
          bubbles: true, // Permite que o evento "suba" na árvore de elementos
          composed: true // Permite que o evento cruze a barreira do Shadow DOM
        }));
      });
    }
  }
}

customElements.define('custom-header', Header);
