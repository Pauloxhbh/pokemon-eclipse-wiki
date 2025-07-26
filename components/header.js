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
        document.dispatchEvent(new CustomEvent("toggle-menu", {
          bubbles: true,
          composed: true
        }));
      });
    }
  }
}

customElements.define('custom-header', Header);
