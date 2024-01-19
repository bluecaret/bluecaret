class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <header class="header">
        <div class="container">
          <h1 class="logo">
            Caret's Patterns
          </h1>
          <div class="explanation">
            SVG repeating patterns ready to use in your CSS via URI encoded background images with customizable colors and sizes.
          </div>
        </div>
      </header>
    `
  }
}

window.customElements.define('app-header', AppHeader)
