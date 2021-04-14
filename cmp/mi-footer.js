class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Alfredo Perez Rodriguez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
