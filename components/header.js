class Header extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <link rel="stylesheet" href="../css/style.css" />
      <header id="main-header">
        <button id="menu-toggle" aria-label="Abrir menu de navegação">&#9776;</button>
        <h1>Pokemon Eclipse Wiki</h1>
      </header>
    `;

    const menuToggle = shadow.getElementById("menu-toggle");

    // Emite evento customizado para o document
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("toggle-menu", {
          bubbles: true,
          composed: true
        }));
      });
    }
  }
}

customElements.define('custom-header', Header);
