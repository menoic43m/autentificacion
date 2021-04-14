class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Perez Rodriguez Alfredo 193241156
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
