class CustomFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="main-footer">
        <p>
          © 2025 Pokemon Eclipse. Todos os direitos reservados.<br />
          Desenvolvido com carinho para a comunidade.
        </p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
