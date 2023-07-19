class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <header class="header">
        <div class="container">
          <h1 class="logo">
            <a href="/"><img src="/assets/bluecaret-logo-alt.svg" height="1.5rem" alt="BlueCaret logo"/></a>
          </h1>
          <div class="explanation">
            Crafting seamless web experiences with a strong emphasis on accessibility and user-focused design.
          </div>
        </div>
      </header>
    `
  }
}

window.customElements.define('app-header', AppHeader)
